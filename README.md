# 使用方式

## 安装

```bash
npm install -g clear-cc
```

## 基本用法

```bash
clear-cc
```

## 运行结果

### 成功清理
```
Checking path: C:\Users\username\.claude\projects
✅ Successfully cleared ~/.claude/projects folder
```

### 文件夹不存在
```
Checking path: C:\Users\username\.claude\projects
ℹ️  ~/.claude/projects folder does not exist
```

### 出现错误
```
Checking path: C:\Users\username\.claude\projects
❌ Error clearing ~/.claude/projects folder: [错误信息]
```

## 注意事项

- 此命令会永久删除 `~/.claude/projects` 文件夹
- 删除操作不可逆，请谨慎使用
- 需要 Node.js >= 12.0.0