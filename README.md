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

## 运行结果

### 成功清理
```
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
✅ Successfully cleared ~/.claude/projects folder
✅ Successfully cleared ~/.claude/statsig folder
✅ Successfully cleared ~/.claude/todos folder
```

### 文件夹不存在
```
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
ℹ️  ~/.claude/projects folder does not exist
ℹ️  ~/.claude/statsig folder does not exist
ℹ️  ~/.claude/todos folder does not exist
ℹ️  No Claude folders found to clear
```

### 出现错误
```
Checking path: C:\Users\username\.claude\projects
Checking path: C:\Users\username\.claude\statsig
Checking path: C:\Users\username\.claude\todos
❌ Error clearing Claude folders: [错误信息]
```

## 注意事项

- 此命令会永久删除 `~/.claude/projects`、`~/.claude/statsig` 和 `~/.claude/todos` 文件夹
- 删除操作不可逆，请谨慎使用
- 需要 Node.js >= 12.0.0