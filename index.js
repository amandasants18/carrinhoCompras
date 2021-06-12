console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')


const Pedido = require('./Pedido')
const Produto = require('./Produto')




//receber via terminal as entradas de id e quantidade 
const ler = require("readline-sync")
const produtos = require('./database')

//como fazer uma pergunta que vai ser respondida no terminal
const verProdutos = ler.question("Voce deseja encontrar produtos por categoria? (S/N)").toLocaleUpperCase()

if(verProdutos === "S"){

    console.log("Essas são as nossas categorias : ")
    console.log("Alimento, Bebida, Casa, Higiene e Informática")

    const qualCategoria = ler.question("Voce está buscando por qual categoria? ")
    const categoria = produtos.filter(item => item.categoria === qualCategoria)
    console.table(categoria)


}else {

    console.log("Esses são nossos produtos disponíveis : ")
    produtos.sort((a,b) => a.preco - b.preco)
    console.table(produtos)


}

var produtosEscolhidos = new Array()

do{
    
    var idDigitado = ler.question("Digite o id do produto desejado: ")
   
   
   
    while(idDigitado> 8){
    
        var idDigitado = ler.question("Digite um ID valido : ")
   }


    var qtdInserida = parseInt(ler.question("Digite a quantidade desejada: "))
    while(qtdInserida < 0){

        var qtdInserida = ler.question("Digite uma quantidade válida: ")
    }


    var produtoSelecionado = produtos.filter(produto => produto.id == idDigitado)
     

    var item = new Produto(produtoSelecionado[0].nome, produtoSelecionado[0].descricao, produtoSelecionado[0].categoria, produtoSelecionado[0].preco, qtdInserida)
    produtosEscolhidos.push(item)
    



 
    console.log("Incluido no carrinho!")
    console.log("-----------------------------------------------------------")

    var continuarComprando = ler.question("Deseja continuar comprando ? (S/N)" ).toLocaleUpperCase()
    
}

while (continuarComprando === "S");
    
console.log("-------------------------------------------------------------")
console.log("Pedido encerrado")

const possuiCupom = ler.question("Possui cupom de desconto ? (S/N)").toLocaleUpperCase()

var valorCupom = 0
if(possuiCupom === "S"){
    
    valorCupom = ler.question("Digite o valor do cupom: ")

    while(valorCupom > 15 || valorCupom < 0){

        valorCupom = ler.question("Digite o valor de cupom válido: ")
   
   }

   

console.log("Voce possui " +valorCupom + "% de desconto")

}
   
console.log("---------------------------------------")


    const Pedido1 = new Pedido(valorCupom, produtosEscolhidos)


   
    const hoje = new Date()


const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()


const dataFormatada = hoje.toLocaleDateString('pt-BR')

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dataLonga = hoje.toLocaleDateString('pt-BR', options)
 
console.log("Produtos escolhidos : ")
console.table(Pedido1.ItensPedidos)
console.log("-------------------------------------------------")
console.log(dataLonga)
console.log("-------------------------------------------------")


console.log("A quantidade de itens é de : " +Pedido1.qtdItens())
console.log("O subtotal foi de R$ : " +Pedido1.subTotal().toFixed(2))
console.log("Total a pagar R$ : " +Pedido1.total().toFixed(2))

console.log("-------------------------------------------------")

console.log("Volte Sempre!")





