#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

function showVersion() {
  const packagePath = path.join(__dirname, '..', 'package.json');
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(packageJson.version);
  } catch (error) {
    console.error('❌ Error reading version:', error.message);
    process.exit(1);
  }
}

function clearClaudeProject() {
  try {
    const homeDir = os.homedir();
    const claudeJsonPath = path.join(homeDir, '.claude.json');
    const claudeJsonBackupPath = path.join(homeDir, '.claude.json.backup');
    const claudeProjectPath = path.join(homeDir, '.claude', 'projects');
    const claudeStatsigPath = path.join(homeDir, '.claude', 'statsig');
    const claudeTodosPath = path.join(homeDir, '.claude', 'todos');
    const claudeIdePath = path.join(homeDir, '.claude', 'ide');
    const claudeShellSnapshotsPath = path.join(homeDir, '.claude', 'shell-snapshots');
    
    console.log(`Checking path: ${claudeJsonPath}`);
    console.log(`Checking path: ${claudeJsonBackupPath}`);
    console.log(`Checking path: ${claudeProjectPath}`);
    console.log(`Checking path: ${claudeStatsigPath}`);
    console.log(`Checking path: ${claudeTodosPath}`);
    console.log(`Checking path: ${claudeIdePath}`);
    console.log(`Checking path: ${claudeShellSnapshotsPath}`);
    
    let clearedCount = 0;
    
    if (fs.existsSync(claudeJsonPath)) {
      fs.rmSync(claudeJsonPath, { force: true });
      console.log('✅ Successfully cleared ~/.claude.json file');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude.json file does not exist');
    }
    
    if (fs.existsSync(claudeJsonBackupPath)) {
      fs.rmSync(claudeJsonBackupPath, { force: true });
      console.log('✅ Successfully cleared ~/.claude.json.backup file');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude.json.backup file does not exist');
    }
    
    if (fs.existsSync(claudeProjectPath)) {
      fs.rmSync(claudeProjectPath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/projects folder');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude/projects folder does not exist');
    }
    
    if (fs.existsSync(claudeStatsigPath)) {
      fs.rmSync(claudeStatsigPath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/statsig folder');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude/statsig folder does not exist');
    }
    
    if (fs.existsSync(claudeTodosPath)) {
      fs.rmSync(claudeTodosPath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/todos folder');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude/todos folder does not exist');
    }
    
    if (fs.existsSync(claudeIdePath)) {
      fs.rmSync(claudeIdePath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/ide folder');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude/ide folder does not exist');
    }
    
    if (fs.existsSync(claudeShellSnapshotsPath)) {
      fs.rmSync(claudeShellSnapshotsPath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/shell-snapshots folder');
      clearedCount++;
    } else {
      console.log('ℹ️  ~/.claude/shell-snapshots folder does not exist');
    }
    
    if (clearedCount === 0) {
      console.log('ℹ️  No Claude files or folders found to clear');
    }
  } catch (error) {
    console.error('❌ Error clearing Claude files and folders:', error.message);
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.includes('--version') || args.includes('-v')) {
  showVersion();
} else if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: clear-cc [options]');
  console.log('');
  console.log('Options:');
  console.log('  --version, -v    Show version number');
  console.log('  --help, -h       Show help');
  console.log('');
  console.log('Description:');
  console.log('  Clear ~/.claude.json, ~/.claude.json.backup, ~/.claude/projects, ~/.claude/statsig, ~/.claude/todos, ~/.claude/ide, and ~/.claude/shell-snapshots files/folders');
} else {
  clearClaudeProject();
}