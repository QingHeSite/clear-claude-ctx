#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

function clearClaudeProject() {
  try {
    const homeDir = os.homedir();
    const claudeProjectPath = path.join(homeDir, '.claude', 'projects');
    
    console.log(`Checking path: ${claudeProjectPath}`);
    
    if (fs.existsSync(claudeProjectPath)) {
      fs.rmSync(claudeProjectPath, { recursive: true, force: true });
      console.log('✅ Successfully cleared ~/.claude/projects folder');
    } else {
      console.log('ℹ️  ~/.claude/projects folder does not exist');
    }
  } catch (error) {
    console.error('❌ Error clearing ~/.claude/projects folder:', error.message);
    process.exit(1);
  }
}

clearClaudeProject();