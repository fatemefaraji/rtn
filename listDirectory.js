```javascript
const fs = require('fs');
const path = require('path');

function printDirectoryStructure(dirPath, prefix = '') {
  try {
    // Read the contents of the directory
    const files = fs.readdirSync(dirPath);
    
    files.forEach((file, index) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      const isLast = index === files.length - 1;
      
      // Print the file or directory name
      console.log(`${prefix}${isLast ? '└──' : '├──'} ${file}`);
      
      // If it's a directory, recurse into it
      if (stats.isDirectory()) {
        printDirectoryStructure(filePath, `${prefix}${isLast ? '    ' : '│   '}`);
      }
    });
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
}

// Start from the project root
const projectRoot = path.resolve('C:\\Users\\admin\\OneDrive\\Desktop\\New folder (3)\\rtn');
console.log(`Project Structure: ${projectRoot}`);
printDirectoryStructure(projectRoot);
```