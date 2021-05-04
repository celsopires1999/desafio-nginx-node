# Nginx com Node.js

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

`<h1>Full Cycle Rocks!</h1>`

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: `8080`.

Suba tudo em um repositório e faça a entrega.

## Como validar o desafio

1. Executar o arquivo `docker-compose.yaml` disponível nesse Repo através do comando `docker-compose up -d` , o qual usa as seguintes imagens a partir do Docker Hub:
    * `celsopires/desafio-nginx-node-app`
    * `celsopires/desafio-nginx-node-proxy`
    * `celsopires/desafio-nginx-node-bd`

2. No navegador digite `http://localhost:8080/`

3. Pronto!


### Lembretes para inicializar o projeto no container
1. `docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash`
2. Ir para a pasta `/usr/src/app`
3. `node` (entra node.js para ver que está instalado)
4. `npm init` (gera o projeto inicial)
5. `npm install express --save` (instalando o express)
6. Codificar o programa no index.js na pasta `/usr/src/app` do container
7. `node index.js` (roda o programa)
8. `http://localhost:3000` (verificar a mensagem no browser)

### Fonte do index.js
```const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
```
