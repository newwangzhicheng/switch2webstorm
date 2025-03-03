import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as os from 'os';
import * as fs from 'fs';

function getMacWebStormPath(): string {
	const commonPaths = [
		'/Applications/WebStorm.app',
		'/Applications/IntelliJ WebStorm.app',
		'/Applications/IntelliJ WebStorm CE.app',
		'/Applications/IntelliJ WebStorm Ultimate.app',
		'/Applications/IntelliJ WebStorm Community Edition.app', 
		`${os.homedir()}/Applications/WebStorm.app`,
		`${os.homedir()}/Applications/IntelliJ WebStorm.app`,
		`${os.homedir()}/Applications/IntelliJ WebStorm CE.app`,
		`${os.homedir()}/Applications/IntelliJ WebStorm Ultimate.app`,
		`${os.homedir()}/Applications/IntelliJ WebStorm Community Edition.app`,
	];

	// Iterate through all possible WebStorm installation paths and return the first existing path
	for (const path of commonPaths) {
		if (fs.existsSync(path)) {
			return path;
		}
	}
	// If no paths exist, return the default APP name
	return 'WebStorm';
}

function executeCommand(command: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const childProcess = exec(command, (error: Error | null, stdout: string, stderr: string) => {
			if (error) {
				console.error('Error executing command:', error);
				console.error('Stderr:', stderr);
				reject(error);
				return;
			}
			if (stdout) {
				console.log('Command output:', stdout);
			}
			if (stderr) {
				console.log('Command stderr:', stderr);
			}
			resolve();
		});

		// Add error handling
		childProcess.on('error', (error: NodeJS.ErrnoException) => {
			if (error.code === 'EPIPE') {
				console.log('Pipe communication disconnected, but this may not affect WebStorm startup');
				resolve(); // Continue execution as WebStorm may have started normally
			} else {
				reject(error);
			}
		});
	});
}

export function activate(context: vscode.ExtensionContext) {

	console.log('Switch2WebStorm is now active!');

	let openFileDisposable = vscode.commands.registerCommand('Switch2WebStorm.openFileInWebStorm', async (uri?: vscode.Uri) => {
		let filePath: string;
		let line = 1;
		let column = 1;

		if (uri) {
			filePath = uri.fsPath;
			const editor = vscode.window.activeTextEditor;
			if (editor && editor.document.uri.fsPath === filePath) {
				line = editor.selection.active.line + 1;
				column = editor.selection.active.character;
			}
		} else {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				vscode.window.showErrorMessage('No active editor!');
				return;
			}
			filePath = editor.document.uri.fsPath;
			line = editor.selection.active.line + 1;
			column = editor.selection.active.character;
		}

		const config = vscode.workspace.getConfiguration('switch2webstorm');
		let webstormPath = config.get<string>('webstormPath');

		if (!webstormPath) {
			if (os.platform() === 'darwin') {
				webstormPath = getMacWebStormPath();
			} else if (os.platform() === 'win32') {
				webstormPath = 'C:\\Program Files\\JetBrains\\WebStorm\\bin\\webstorm64.exe';
			} else {
				webstormPath = 'webstorm';
			}
		}

		let command: string;
		if (os.platform() === 'darwin') {
			const webstormUrl = `webstorm://open?file=${encodeURIComponent(filePath)}&line=${line}&column=${column}`;
			// If WebStorm is already open, using the 'webstorm' command will show two WebStorm icons in the dock temporarily
			// Using the 'open' command instead will prevent this issue
			command = `open -a "${webstormPath}" "${webstormUrl}"`;
		} else {
			command = `"${webstormPath}" --line ${line} --column ${column} "${filePath}"`;
		}

		console.log('Executing command:', command);

		try {
			await executeCommand(command);
		} catch (error) {
			const err = error as Error;
			vscode.window.showErrorMessage(`Failed to open WebStorm: ${err.message}`);
		}
	});

	let openProjectDisposable = vscode.commands.registerCommand('Switch2WebStorm.openProjectInWebStorm', async () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders || workspaceFolders.length === 0) {
			vscode.window.showErrorMessage('No workspace folder is opened!');
			return;
		}

		const projectPath = workspaceFolders[0].uri.fsPath;

		const config = vscode.workspace.getConfiguration('switch2webstorm');
		let webstormPath = config.get<string>('webstormPath');

		if (!webstormPath) {
			if (os.platform() === 'darwin') {
				const macWebStormPath = getMacWebStormPath();
				webstormPath = macWebStormPath || 'WebStorm';
			} else if (os.platform() === 'win32') {
				webstormPath = 'C:\\Program Files\\JetBrains\\WebStorm\\bin\\webstorm64.exe';
			} else {
				webstormPath = 'webstorm';
			}
		}

		let command: string;
		if (os.platform() === 'darwin') {
			const webstormUrl = `webstorm://open?file=${encodeURIComponent(projectPath)}`;
			command = `open -a "${webstormPath}" "${webstormUrl}"`;
		} else {
			command = `"${webstormPath}" "${projectPath}"`;
		}

		console.log('Executing command:', command);

		try {
			await executeCommand(command);
		} catch (error) {
			const err = error as Error;
			vscode.window.showErrorMessage(`Failed to open project in WebStorm: ${err.message}`);
		}
	});

	context.subscriptions.push(openFileDisposable);
	context.subscriptions.push(openProjectDisposable);
}

export function deactivate() {}
