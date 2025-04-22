
// let variavel = 10;
// let numero:number = 10;
// let string:string = "Isso é uma string";
// const boleano = true //false
// const vetor: number[]=[]
// let vetorString:string[] = []


// //adicionar um valor no vetor//////////////////////////////////////////////////////////////////
// vetor.push (10)
// vetorString.push("Mariane")
// console.log(vetor)
// let nomeMateria:string = "Frameworks I"
// console.log(nomeMateria)

// //Objetos em javascript////////////////////////////////////////////////////////////////////////////////

// const objEstudante = {
//     nome:"Mariane",
//     idade: 18,
//     cpf:"076.750.009-19"

// }
//  objEstudante.cpf = "076.750.009-19"
//  console.log(objEstudante)

//  //Crie um vetor com dois objetos de estudante 
//  //nome cpf, idade
//  //Mostre no console.log


//  const obj1 = {
    
//         nome:"Mariane",
//         idade: 18,
//         cpf:"076.750.009-19"
    
//     }
//   const obj2 = {
//     nome:"Aimê",
//     idade: 12,
//     cpf:"076.750.009-19"

//   }
//   const vetorobj2estudantes = [obj1, obj2]
//   console.table(vetorobj2estudantes);

//   //Type
//   type PessoaType = {
//     nome: string;
//     idade: number;
//   }
//   const objPessoa: PessoaType = {
//     nome: "Tere",
//     idade: 30
//   }

//   //Vou continuar explicando por aqui
//   //Em objetos podemos utilizar a tamb´em 
//   //Fica assim:

//   type TypeMaisDeUmTipo = {nome:string|number}
//   const objMaisDeUmTipo:TypeMaisDeUmTipo = {
//     nome: "Mariane"
//   }

//   //Com isso podemos colocar uma propriedade de um objeto com mais de um tipo de dados
//   // Agora passamos para funções
//   //Funções em Javascript/////////////////////////////////////////////////////////////////////////////////////////////////////
//   function soma(a,b){
//     return a+b;
//   }

//  // const resultado = soma(10,20)
//   //console.log("O resultado da soma é:" + resultado) //ou (`O resultado da soma é: ${resultado}`)

// //Outras formas de escrever função:
// function somaA(a:number,b: number):number{
//   return a+b;
// }

//  const somaB =  function (a:number,b: number):number|undefined{
//   return a+b;
// }


// const somaC =  (a:number,b: number):number[] =>{
//   return [a+b];
// }

// const somaD =  (a:number,b: number) =>a+b;


//Crie uma função que receba um vetor e some os número do vetor///////////////////////////////////////

//somaNumeros([1,2,3,4])
//10

//quando o vetor passado for vazio:
//  Retorna Undefined
/*function somaNumeros(vetor:number[]):undefined|number {
  if (vetor.length === 0) {
    return undefined;
  }

  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma = soma + vetor[i];
  }

  return soma;
}

const resultado1 = somaNumeros([1, 2, 3, 4]);
console.log("O resultado da soma é: " + resultado1); 

const resultadoVazio = somaNumeros([]);
console.log("O resultado da soma é: " + resultadoVazio);

// = -> ATRIBUIÇÃO///////////////////////////////
//== -> IGUALDADE////////////////////////////////////////////////
//=== -> É SINAL DE  IGUALDADE DE VALOR E TIPO/////////////////////////////////////

//Crie uma função que receba um vetor e um número/////////////////////////////////////////////
//Sua função deve somar as posições do vetor elevado ao número recebido por parâmetro///////////////////////////////////////

//Exemplo///////////////////////////////////////////////////////////////
//somaElevado([2,2,2],2) //12

//Se o vetor for ´vazio devolva undefined
*/
/*function somaElevado(vetor:number[], numero:number){

    if (vetor.length === 0) {
      return undefined;
    }
  
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma = soma + Math.pow(vetor[i],numero) ;
    }
  
    return soma;
  }

  let vetor = [2,3,4]
  console.log(somaElevado(vetor,2))
  */


  //Faça uma função que receba 2 numeros e devolva um vetor da sequencia dos números///////////////////////////////////////////////////////////////

  //Exemplo: sequencia(10,16) // [10,11,12,13,14,15,16]

 /* function sequencia(inicio, fim) {
    let resultado = []; 
    for (let i = inicio; i <= fim; i++) { 
        resultado.push(i);
    }

    return resultado; 
}

console.log(sequencia(10, 16)); */


//MAP
//FILTER
//FIND
//MAP É UMA FUNÇÃO DE VETOR
//SERVE PARA TRANSFORMAR O VETOR EM OUTRA COISA

//AULA DE SÁBADO:////////////////////////////////////////////////////////////////
/* function soma2(vetor:number[]){
  return vetor.map((x)=>x+2)
}
console.log(soma2([1,2,3,4,4,5,5,6,7,]))


//faça uma função que receba um vetor e devolva esse vetor elevado ao cubo///////////
//EX: eleva([1,2,3]) --------  eleva([1,8,27])

function eleva(vetor:number[]){
  return vetor.map((x)=>x**3)
}
console.log(eleva([1,2,3]))*/


/**
 * TAMBÉM SÃO FUNÇÕES DE VETORES
 * .FIND -> Procurar
 * .FILTER -> Filtrar
 */

/*const vetor = [1,2,3,4,5]
 function predicado(valorBuscado){
 if(valorBuscado <6){
   return true
 }
 else{
  return false
 }
 }

console.log(vetor.filter(predicado))*/

/**
 * Assincronidade -> característica também do javascript, na qual não executa as linhas de código em sequência.
 
 * Promises 
 * then / catch
 * await / async
 */


/*function demora(){
  setTimeout(() => {
     console.log("Timeout: ")
  },1000)
  for (let i=0; i<10000000000; i++){} 
  console.log("Dados!")
}
console.log("Inicio do Código")
demora()
console.log("executei")
*/


//then/catch

/*function demora(){
  const pro = new Promise((resolve,reject)=>{

    setTimeout(() => {
      if (Math.random()<.5){

        resolve("Dados!!!")
      }else{
      reject("Fodase!")
      }
    },1000)
  })
  return pro
}
console.log("Inicio do Código")


const resultado = demora()
resultado.then((dados)=>{console.log("Resultado Promessa = " +dados)})
.catch((erro)=>{console.log(erro)})
console.log("executei")
*/

//Novo javascript trouxe esse novo conceito de await e async
//Await -> é pra você ficar esperando algo que é assíncrono (async).
//porém não podemos utilizar await sem ser uma função assíncrona (async)


/*async function aux(){
  try{

    const resultado = await demora()
    console.log("Dados após await: "+resultado)
  }
  catch(erro){
   console.log("Erro no TRY/CATCH: "+erro)
  }
//aux();*/
 


//////////AULA 08/04/2025//////////////////////////////////////
/*import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';

const access: ConnectionOptions = {
    host:"localhost",
    user: 'root',
    password: "",
    database: 'banco1023b',
    port: 3306
};

const conn = mysql.createConnection(access);
conn
.then((conn:Connection)=>{
    console.log("Conectou no banco")

    conn.query("SELECT * FROM estudantes")
    .then(query=>{
      const [resultado,estruturaTabela]=query
       console.log(resultado)
       console.log(estruturaTabela)
    })
    .catch((erro)=>{
        if(erro.code==="ER_NO_SUCH_TABLE"){
            console.log("Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
        }else if(erro.code==="ER_PARSE_ERROR"){
         console.log("vc digitou errado man")
        }else{
          console.log(erro)
        }
    })

    conn.end()
    .then(()=>console.log("Finalizei a conexão"))
    .catch(()=>console.log("Não Finalizei a conexão"))
    //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
})
.catch(erro=>{
    console.log("Não conectou :(")
    if(erro.code==="ECONNREFUSED"){
        console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
    }else if(erro.code==="ER_BAD_DB_ERROR"){
        console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
    }else if(erro.code==="ER_ACCESS_DENIED_ERROR"){
        console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
    }else{
        console.log(erro)
    }
})
//fastify //////////////////////////////////////////////////////////////////////////////////////////////////////////////


import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = fastify()

app.get("/",(request:FastifyRequest,reply:FastifyReply)=>{
  reply.send("Fastify Funcionando!")
})

app.get("/estudantes",(request,reply)=>{
  reply.send("Estudantes estão CANSADOOOOOOOOOOOOOOSSSS")
}) 

app.listen({port:8000},(erro, endereco)=>{
  if(erro){
    console.log("ERRO: FASTIFY N TA FUNCIONANDO NÃO MAN")
  }
  console.log(`Fastify iniciando porta: ${endereco}`)
})
*/


//////COMO IMPRIMIR UMA TABELA NO NAVEGADOR??//////////////////////////////////////
///PRIMEIRA FORMA:////////////////////////////

/*import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mysql, { ConnectionOptions } from 'mysql2/promise'

const app = fastify()

// Configuração da conexão com o banco de dados
const access: ConnectionOptions = {
  host: 'localhost',
  user: 'root',
  password: '',  // Coloque sua senha aqui, se houver
  database: 'banco1023b',
  port: 3306
}

// Rota para mostrar se o servidor Fastify está funcionando
app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
  reply.send("Fastify Funcionando!")
})

// Rota para pegar e exibir os dados da tabela 'estudantes'
app.get("/estudantes", async (request, reply) => {
  try {
    // Conectando ao banco de dados MySQL
    const conn = await mysql.createConnection(access)
    conn.query("SELECT * FROM estudantes")
    // Realizando a consulta SQL para pegar todos os estudantes
    const [rows] = await conn.query("SELECT * FROM estudantes")

    // Fechando a conexão com o banco
    await conn.end()

    // Enviando os dados no formato JSON para o navegador
    reply.send(rows)

  } catch (erro) {
    console.error(erro)
    reply.status(500).send("Erro ao acessar o banco de dados.")
  }
})

// Iniciando o servidor Fastify na porta 8000
app.listen({port:8000}, (erro, endereco) => {
  if (erro) {
    console.log("ERRO: Fastify não está funcionando!")
    process.exit(1)
  }
  console.log(`Fastify iniciado na porta: ${endereco}`)
})
*/

 //////SEGUNDA FORMA, MAIS SIMPLES://///////////////////////////////////////

/* import fastify, { FastifyReply, FastifyRequest } from 'fastify'

const app = fastify()

app.get("/",(request:FastifyRequest,reply:FastifyReply)=>{
  reply.send("Fastify Funcionando!")
})

app.get("/estudantes",(request,reply)=>{
  reply.send("Estudantes estão CANSADOOOOOOOOOOOOOOSSSS")
}) 

app.get("/tabelas",(request,reply)=>{
  const conn = mysql.createConnection(access);
conn
.then((conn:Connection)=>{
    console.log("Conectou no banco")

    conn.query("SELECT * FROM estudantes")
    .then(query=>{
      const [resultado,estruturaTabela]=query
       console.log(resultado)
       console.log(estruturaTabela)
       reply.send(resultado)
    })
    .catch((erro)=>{
        if(erro.code==="ER_NO_SUCH_TABLE"){
            console.log("Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.")
        }else if(erro.code==="ER_PARSE_ERROR"){
         console.log("vc digitou errado man")
        }else{
          console.log(erro)
        }
    })

    conn.end()
    .then(()=>console.log("Finalizei a conexão"))
    .catch(()=>console.log("Não Finalizei a conexão"))
    //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
})
.catch(erro =>{
    console.log("Não conectou :(")
    console.log(erro)
    if(erro.code==="ECONNREFUSED"){
        console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
    }else if(erro.code==="ER_BAD_DB_ERROR"){
        console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
    }else if(erro.code==="ER_ACCESS_DENIED_ERROR"){
        console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
    }else{
        console.log(erro)
    }
})
}) 

app.listen({port:8000},(erro, endereco)=>{
  if(erro){
    console.log("ERRO: FASTIFY N TA FUNCIONANDO NÃO MAN")
  }
  console.log(`Fastify iniciando porta: ${endereco}`)
})

*/

import mysql, { Connection, ConnectionOptions , QueryError } from 'mysql2/promise';
import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors)

app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando!")
})
app.get("/estudantes", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn = await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'banco1023b',
            port: 3306
        });
        const resultado = await conn.query("SELECT * FROM estudantes")
        const [dados,estruturaTabela] = resultado
        reply.status(200).send(dados)
        
    } catch (erro:any) {
        if (erro.code === "ECONNREFUSED") {
            console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!")
            reply.status(400).send({mensagem:"ERRO: LIGUE O LARAGÃO!!! CABEÇA!"})
        } else if (erro.code === "ER_BAD_DB_ERROR") {
            console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO"})
        } else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
            console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO")
            reply.status(400).send({mensagem:"ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO"})
        } else {
            console.log(erro)
            reply.status(400).send({mensagem:"ERRO DESCONHECIDO OLHE O TERMINAL"})
        }
    }
})
app.listen({ port: 8000 }, (erro, endereco) => {
    if (erro) {
        console.log("ERRO: Fastify não iniciou")
    }
    console.log(`Fastify iniciado na porta: ${endereco}`)
})
