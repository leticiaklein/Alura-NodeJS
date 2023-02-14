 import chalk from "chalk";
import fs from 'fs';

// console.log(chalk.blue('olá mundo'));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// function pegaArquivo(caminhoDoArquivo) {
//     fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto) => {
//         if (texto) {
//             console.log(chalk.green(texto));
//         }
//         console.log(chalk.red(erro));
//     })
// }

// Trabalhando com funções síncronas e assíncronas, primeira forma de função assíncrona com JavaScript:

function pegaArquivo(caminhoDoArquivo) {
    fs.promises
    .readFile(caminhoDoArquivo, 'utf-8')
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro)
}

// função para tratar erros:
function trataErro(erro) {
    throw new Error(chalk.red(erro))
}
pegaArquivo('./arquivos/texto.md');