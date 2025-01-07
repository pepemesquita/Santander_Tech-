const querystring = require("node:querystring");

const baseUrl = "https://www.sitedeviagem.com.br"

const uri = querystring.stringify({
    destino: "Rio de Janeiro",
    periodo: "Verão"
})

const url = `${baseUrl}/${uri}`

const parsedUri = querystring.parse(uri)

console.log(uri);
console.log(parsedUri);
console.log(parsedUri.destino);