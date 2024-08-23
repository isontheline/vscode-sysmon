# vscode-sysmon
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/isontheline.vscode-sysmon)](https://marketplace.visualstudio.com/items?itemName=isontheline.vscode-sysmon)
[![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/isontheline.vscode-sysmon)](https://marketplace.visualstudio.com/items?itemName=isontheline.vscode-sysmon)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/isontheline.vscode-sysmon)](https://marketplace.visualstudio.com/items?itemName=isontheline.vscode-sysmon)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/isontheline.vscode-sysmon)](https://marketplace.visualstudio.com/items?itemName=isontheline.vscode-sysmon)

Visual Studio Code extension to show system stats (Initial fork from [njzydark](https://github.com/njzydark/vscode-stats-bar))

## Features
- Support show cpu load, loadavg, network speed, memory usage and uptime
- Support custom display format, order and priority
- Support copy ip to clipboard
- Support change loacation and refresh interval

## Extension Settings
You can visit this extension page in vscode to see detail

## Display Format
You can use `$(icon-name)` to show icon, visit this site [https://microsoft.github.io/vscode-codicons/dist/codicon.html](https://microsoft.github.io/vscode-codicons/dist/codicon.html) to find icon name

### Cpu Load
* ${percent}

### Loadavg
* ${1}
* ${5}
* ${15}

### Uptime
* ${days}
* ${hours}
* ${minutes}

### Network Speed
* ${up}
* ${up-unit}
* ${down}
* ${down-unit}

### Memory Usage
* ${used}
* ${total}
* ${percent}
* ${pressurePercent}
* ${unit}

## Thanks
* [njzydark](https://github.com/njzydark/vscode-stats-bar)
* [systeminformation](https://systeminformation.io)