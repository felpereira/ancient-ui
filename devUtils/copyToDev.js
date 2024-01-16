

const fs = require('fs');

const sourceFolderPath = 'dist';
const destinationFolderPath = 'C:\\Repositorios\\antimageapp\\node_modules\\ancient-ui';
const path = require('path');


function deletarPastaRecursivamente(caminhoDaPasta) {
  if (fs.existsSync(caminhoDaPasta)) {
    fs.readdirSync(caminhoDaPasta).forEach(arquivo => {
      const caminhoCompleto = path.join(caminhoDaPasta, arquivo);

      if (fs.lstatSync(caminhoCompleto).isDirectory()) {
        // Se é uma subpasta, chama a função recursivamente
        deletarPastaRecursivamente(caminhoCompleto);
      } else {
        // Se é um arquivo, exclui o arquivo
        fs.unlinkSync(caminhoCompleto);
        console.log('Arquivo excluído:', caminhoCompleto);
      }
    });

    // Após excluir todos os arquivos da pasta, exclui a própria pasta
    fs.rmdirSync(caminhoDaPasta);
    console.log('Pasta excluída:', caminhoDaPasta);
  } else {
    console.error('A pasta não existe:', caminhoDaPasta);
  }
}

deletarPastaRecursivamente(destinationFolderPath)

console.log("arquivo excluidos")

try {
  fs.cpSync(sourceFolderPath, destinationFolderPath, {
    recursive: true,
  });
} catch (error) {
  console.log(error.message);
}

console.log("FEITO")