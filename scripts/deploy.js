#!/usr/bin/env node

/**
 * Deployment script for PuppyHub USA frontend
 * This script helps automate the deployment process to Vercel
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define deployment environments
const ENVIRONMENTS = {
  PRODUCTION: 'production',
  PREVIEW: 'preview',
  DEVELOPMENT: 'development'
};

/**
 * Run a command and return its output
 * @param {string} command - Command to run
 * @returns {string} Command output
 */
function runCommand(command) {
  try {
    return execSync(command, { stdio: 'pipe' }).toString().trim();
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

/**
 * Check if Git working directory is clean
 * @returns {boolean} True if clean, false otherwise
 */
function isGitClean() {
  const status = runCommand('git status --porcelain');
  return status.length === 0;
}

/**
 * Get the current Git branch
 * @returns {string} Current branch name
 */
function getCurrentBranch() {
  return runCommand('git rev-parse --abbrev-ref HEAD');
}

/**
 * Deploy to Vercel
 * @param {string} environment - Deployment environment
 */
function deploy(environment) {
  console.log(`\n🚀 Deploying to ${environment}...\n`);
  
  // Build the project
  console.log('📦 Building project...');
  runCommand('npm run build');
  
  // Deploy to Vercel
  let deployCommand = 'vercel';
  
  if (environment === ENVIRONMENTS.PRODUCTION) {
    deployCommand += ' --prod';
  } else if (environment === ENVIRONMENTS.PREVIEW) {
    deployCommand += ' --prebuilt';
  }
  
  console.log(`\n🚢 Deploying to Vercel (${environment})...`);
  runCommand(deployCommand);
  
  console.log('\n✅ Deployment complete!');
}

/**
 * Main function
 */
async function main() {
  console.log('🐶 PuppyHub USA Deployment Script\n');
  
  // Check if Vercel CLI is installed
  try {
    runCommand('vercel --version');
  } catch (error) {
    console.error('❌ Vercel CLI is not installed. Please install it with: npm i -g vercel');
    process.exit(1);
  }
  
  // Check Git status
  if (!isGitClean()) {
    console.warn('⚠️  Warning: You have uncommitted changes in your working directory.');
    
    const answer = await new Promise(resolve => {
      rl.question('Do you want to continue anyway? (y/N): ', resolve);
    });
    
    if (answer.toLowerCase() !== 'y') {
      console.log('Deployment cancelled.');
      process.exit(0);
    }
  }
  
  // Get current branch
  const currentBranch = getCurrentBranch();
  console.log(`📋 Current branch: ${currentBranch}`);
  
  // Determine environment based on branch
  let environment = ENVIRONMENTS.PREVIEW;
  if (currentBranch === 'main' || currentBranch === 'master') {
    environment = ENVIRONMENTS.PRODUCTION;
  } else if (currentBranch === 'develop') {
    environment = ENVIRONMENTS.DEVELOPMENT;
  }
  
  // Ask for confirmation
  const answer = await new Promise(resolve => {
    rl.question(`Deploy to ${environment}? (Y/n): `, resolve);
  });
  
  if (answer.toLowerCase() === 'n') {
    console.log('Deployment cancelled.');
    process.exit(0);
  }
  
  // Deploy
  deploy(environment);
  
  rl.close();
}

main().catch(error => {
  console.error('❌ Deployment failed:', error);
  process.exit(1);
});
