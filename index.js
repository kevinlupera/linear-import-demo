const { LinearImport } = require('@linear/import');

console.log('Linear Import Library Loaded');
console.log('To use the CLI, run: pnpm exec linear-import --help');

// Example of how one might programmatically use it if the library exports it (checking exports is good)
// Based on the package name, it's primarily a CLI tool, but let's see if we can require it.
try {
  const linearImport = require('@linear/import');
  console.log('Successfully required @linear/import');
} catch (error) {
  console.log('Could not require @linear/import programmatically. This is expected if the package is designed primarily as a CLI tool.');
  console.log('Error details:', error.message);
}
