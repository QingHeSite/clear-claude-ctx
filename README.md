# 使用方式

## 安装

```bash
npm install -g clear-cc
```

## 更新

```bash
npm update -g clear-cc
```

## 基本用法

```bash
clear-cc
```

## 命令选项

```bash
clear-cc --version    # 或 -v，显示版本号
clear-cc --help       # 或 -h，显示帮助信息
```

## 运行结果

### 成功清理
```
Checking path: C:\Users\username\.claude.json
Checking path: C:\Users\username\.claude.json.backup
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
Checking path: C:\Users\username\.claude\ide
Checking path: C:\Users\username\.claude\shell-snapshots
✅ Successfully cleared ~/.claude.json file
✅ Successfully cleared ~/.claude.json.backup file
✅ Successfully cleared ~/.claude/projects folder
✅ Successfully cleared ~/.claude/statsig folder
✅ Successfully cleared ~/.claude/todos folder
✅ Successfully cleared ~/.claude/ide folder
✅ Successfully cleared ~/.claude/shell-snapshots folder
```

### 文件/文件夹不存在
```
Checking path: C:\Users\username\.claude.json
Checking path: C:\Users\username\.claude.json.backup
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
Checking path: C:\Users\username\.claude\ide
Checking path: C:\Users\username\.claude\shell-snapshots
ℹ️  ~/.claude.json file does not exist
ℹ️  ~/.claude.json.backup file does not exist
ℹ️  ~/.claude/projects folder does not exist
ℹ️  ~/.claude/statsig folder does not exist
ℹ️  ~/.claude/todos folder does not exist
ℹ️  ~/.claude/ide folder does not exist
ℹ️  ~/.claude/shell-snapshots folder does not exist
ℹ️  No Claude files or folders found to clear
```

### 出现错误
```
Checking path: C:\Users\username\.claude.json
Checking path: C:\Users\username\.claude.json.backup
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
Checking path: C:\Users\username\.claude\ide
Checking path: C:\Users\username\.claude\shell-snapshots
❌ Error clearing Claude files and folders: [错误信息]
```

## 注意事项

- 此命令会永久删除以下文件和文件夹：
  - `~/.claude.json` 文件
  - `~/.claude.json.backup` 文件
  - `~/.claude/projects` 文件夹
  - `~/.claude/statsig` 文件夹
  - `~/.claude/todos` 文件夹
  - `~/.claude/ide` 文件夹
  - `~/.claude/shell-snapshots` 文件夹
- 删除操作不可逆，请谨慎使用
- 需要 Node.js >= 12.0.0