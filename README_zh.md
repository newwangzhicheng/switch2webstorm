# Switch2WebStorm

本项目是基于 [switch2idea](https://github.com/qczone/switch2idea) 的衍生项目，在其基础上构建而成

[English](README.md)

> 💡 推荐在 WebStorm 中配合 [Switch2Cursor](https://github.com/qczone/switch2cursor) 使用

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/jayep.switch2webstorm?label=VS%20Marketplace&style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/jayep.switch2webstorm?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)

## 🔍 项目简介

一个提升开发效率的 Cursor 扩展，让你在 Cursor 和 WebStorm 之间实现丝滑切换

![Switch2WebStorm演示](images/switch-show.gif)

## 🌟 功能特性

- 🚀 无缝编辑器切换

  - 在 Cursor 和 WebStorm 之间一键切换
  - 自动定位到相同的光标位置（行号和列号）
  - 完美保持编辑上下文，不中断思路
- ⌨️ 便捷的快捷键支持

  - macOS:
    - `Option+Shift+P` - 在 WebStorm 中打开整个项目
    - `Option+Shift+O` - 在 WebStorm 中打开当前文件
  - Windows:
    - `Alt+Shift+P` - 在 WebStorm 中打开整个项目
    - `Alt+Shift+O` - 在 WebStorm 中打开当前文件
- 🔧 多样化的访问方式

  - 快捷键操作
  - 编辑器右键菜单
  - 文件浏览器右键菜单

## 🛠️ 安装指南

### 方式一：通过扩展市场安装

1. 点击 [这里](https://marketplace.visualstudio.com/items?itemName=jayep.switch2webstorm) 安装
2. 在 Cursor 扩展市场中搜索 "Switch2WebStorm" 并安装

### 方式二：本地安装

1. 下载最新版扩展包
2. 在 Cursor 中，选择 `Extensions` → `...` → `Install from VSIX`
3. 选择下载的扩展包完成安装

## 🚀 使用说明

### 基础使用

#### 打开项目

- 快捷键：`Alt+Shift+P`
- 右键菜单：在文件浏览器中右键 → `Open Project in WebStorm`

#### 打开当前文件

- 快捷键：`Alt+Shift+O`
- 右键菜单：
  - 在编辑器中右键 → `Open File in WebStorm`
  - 在文件浏览器中右键 → `Open File in WebStorm`

### 配置

打开 Cursor 设置，点击 `General` → `Editor` → `open editor settings` → `Extensions` → `Switch2WebStorm` → `WebStorm Path`

- macOS：自动遍历 WebStorm 常用安装路径
- Windows：默认 `C:\Program Files\JetBrains\WebStorm\bin\webstorm64.exe`
- Linux：默认 `webstorm`

### 环境要求

- Cursor 1.93.1+
- WebStorm 或其他 JetBrains IDE

## 🧑‍💻 开发者指南

欢迎提交 Issue 和 Pull Request 来改进这个扩展。

## 🙋 常见问题

### 1. 快捷键/点击右键菜单后没有跳转到 WebStorm?

请按以下步骤检查：

1. 打开 Cursor 设置，点击 `General` → `Editor` → `open editor settings` → `Extensions` → `Switch2WebStorm`
2. 确认 WebStorm Path 是否正确配置成 WebStorm 的可执行文件路径

### 2. 是否支持跳转到其他 IDE？

支持，您可以配置 WebStorm Path 为其他 JetBrains IDE 的可执行文件路径

### 3. 如何定义不同项目跳转不同 IDE？

您可以为每个工作区（workspace）单独配置 IDE 路径：

1. 打开 Cursor 设置，点击 `General` → `Editor` → `open editor settings`
2. 选择 `Workspace` 标签页
3. 导航到 `Extensions` → `Switch2WebStorm` → `webstormPath`
4. 输入该项目需要使用的 IDE 路径

示例配置：

- 前端项目：配置 WebStorm 路径
- Spring Boot 项目：配置 IDEA 路径
- Python 项目：配置 PyCharm 路径

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议

## 📮 问题反馈

如果遇到问题或有建议，请通过以下方式反馈：

- [提交 GitHub Issue](https://github.com/jayep/switch2webstorm/issues)

## 🌟 Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=jayep/switch2webstorm&type=Date)](https://star-history.com/#jayep/switch2webstorm&Date)