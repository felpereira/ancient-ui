

const fs = require('fs');

const sourceFolderPath = 'dist';
const destinationFolderPath = 'C:\\Repositorios\\antimageapp\\node_modules\\ancient-ui';
try {
  fs.cpSync(sourceFolderPath, destinationFolderPath, {
    recursive: true,
  });
} catch (error) {
  console.log(error.message);
}

console.log("FEITO")