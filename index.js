import chalk from "chalk";
import fs from 'fs';

// console.log(chalk.blue('olá mundo'));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

function pegaArquivo(caminhoDoArquivo) {
    fs.readFile(caminhoDoArquivo, 'utf-8', (erro, texto) => {
        if (texto) {
            console.log(chalk.green(texto));
        }
        console.log(chalk.red(erro));
    })
}

pegaArquivo('./arquivos/texto.md');