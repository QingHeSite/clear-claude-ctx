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
    const claudeProjectPath = path.join(homeDir, '.claude', 'projects');
    const claudeStatsigPath = path.join(homeDir, '.claude', 'statsig');
    const claudeTodosPath = path.join(homeDir, '.claude', 'todos');
    
    console.log(`Checking path: ${claudeProjectPath}`);
    console.log(`Checking path: ${claudeStatsigPath}`);
    console.log(`Checking path: ${claudeTodosPath}`);
    
    let clearedCount = 0;
    
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
    
    if (clearedCount === 0) {
      console.log('ℹ️  No Claude folders found to clear');
    }
  } catch (error) {
    console.error('❌ Error clearing Claude folders:', error.message);
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
  console.log('  Clear ~/.claude/projects, ~/.claude/statsig, and ~/.claude/todos folders');
} else {
  clearClaudeProject();
}