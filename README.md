# Switch2WebStorm

This project is a derivative of [switch2idea](https://github.com/qczone/switch2idea), built upon its foundation

[中文](README_zh.md)

> 💡 Recommended to use with [Switch2Cursor](https://github.com/qczone/switch2cursor) in WebStorm

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/jayep.switch2webstorm?label=VS%20Marketplace&style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/jayep.switch2webstorm?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

## 🔍 Project Overview

A Cursor extension that enhances development efficiency by enabling smooth switching between Cursor and WebStorm

![Switch2WebStorm Demo](images/switch-show.gif)

## 🌟 Features

- 🚀 Seamless Editor Switching
  - One-click switching between Cursor and WebStorm
  - Automatically positions to the same cursor location (line and column)
  - Perfectly maintains editing context without interrupting workflow
- ⌨️ Convenient Shortcut Support
  - macOS:
    - `Option+Shift+P` - Open project in WebStorm
    - `Option+Shift+O` - Open current file in WebStorm
  - Windows:
    - `Alt+Shift+P` - Open project in WebStorm
    - `Alt+Shift+O` - Open current file in WebStorm
- 🔧 Multiple Access Methods
  - Keyboard shortcuts
  - Editor context menu
  - File explorer context menu

## 🛠️ Installation Guide

### Method 1: Install from Extension Marketplace

1. Click [here](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm) to install
2. Search for "Switch2WebStorm" in the Cursor extension marketplace and install

### Method 2: Local Installation

1. Download the latest extension package
2. In Cursor, select `Extensions` → `...` → `Install from VSIX`
3. Select the downloaded extension package to complete installation

## 🚀 Usage Instructions

### Basic Usage

#### Open Project

- Shortcut: `Alt+Shift+P`
- Context Menu: Right-click in file explorer → `Open Project in WebStorm`

#### Open Current File

- Shortcut: `Alt+Shift+O`
- Context Menu:
  - Right-click in editor → `Open File in WebStorm`
  - Right-click in file explorer → `Open File in WebStorm`

### Configuration

Open Cursor settings, click `General` → `Editor` → `open editor settings` → `Extensions` → `Switch2WebStorm` → `WebStorm Path`

- macOS: Automatically traverses common WebStorm installation paths
- Windows: Default `C:\Program Files\JetBrains\WebStorm\bin\webstorm64.exe`
- Linux: Default `webstorm`

### Requirements

- Cursor 1.93.1+
- WebStorm or other JetBrains IDEs

## 🧑‍💻 Developer Guide

Issues and Pull Requests are welcome to improve this extension.

## 🙋 FAQ

### 1. No jump to WebStorm after using shortcut/right-click menu?

Please check the following steps:

1. Open Cursor settings, click `General` → `Editor` → `open editor settings` → `Extensions` → `Switch2WebStorm`
2. Verify that WebStorm Path is correctly configured to WebStorm's executable path

### 2. Does it support jumping to other IDEs?

Yes, you can configure WebStorm Path to the executable path of other JetBrains IDEs

### 3. How to define different IDEs for different projects?

You can configure IDE paths separately for each workspace:

1. Open Cursor settings, click `General` → `Editor` → `open editor settings`
2. Select the `Workspace` tab
3. Navigate to `Extensions` → `Switch2WebStorm` → `webstormPath`
4. Enter the IDE path needed for that project

Configuration examples:

- Frontend project: Configure WebStorm path
- Spring Boot project: Configure IDEA path
- Python project: Configure PyCharm path

## 📄 License

This project is licensed under the [MIT License](LICENSE)

## 📮 Feedback

If you encounter issues or have suggestions, please provide feedback through:

- [Submit GitHub Issue](https://github.com/jayep/switch2webstorm/issues) 

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jayep/switch2webstorm&type=Date)](https://star-history.com/#jayep/switch2webstorm&Date)