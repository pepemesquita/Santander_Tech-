const { log } = require("node:console");
const dns = require("node:dns");

const urlPesquisada = "nexedia.com.br";

// dns.resolve4(urlPesquisada, (err, addresses) =>{
//     if (err) {
//         console.log("url não encontrada");
//         return
//     }

//     console.log(addresses);
// })

async function bootstrap() {
  const addresses = await dns.promises.resolve4(urlPesquisada);
  console.log(addresses);

  const nameServers = await dns.promises.resolveNs(urlPesquisada);
  console.log(nameServers);
}

bootstrap();
