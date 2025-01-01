const path = require("node:path")
const fs = require("node:fs")

const filePath = path.join(process.cwd(),  "texto.txt")

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
        console.log(`Erro ao abrir o arquivo no caminho ${filePath}`);
        return
    }
    console.log(dados.toString());
})

