const produtos = require("./database")
const Produto = require('./Produto')

module.exports = class Pedido{

constructor(valorCupom, listaProdutos){

    this.valorCupom = valorCupom
    this.ItensPedidos = listaProdutos
  
     
}



qtdItens(){
    var soma = 0
    for ( let i = 0; i < this.ItensPedidos.length; i++){

        
        var produtoAtual = this.ItensPedidos[i]
        
        soma = soma + produtoAtual.qtd
    }
    
    return soma

}


subTotal(){
    var soma = 0
    for ( let i = 0; i < this.ItensPedidos.length; i++){

        
        var produtoAtual = this.ItensPedidos[i]
        var precoPorQtd = produtoAtual.qtd * produtoAtual.preco
        soma = soma + precoPorQtd
    }
    
    return soma

}

total(){
     
    var soma = this.subTotal()
    var desconto = 0
    desconto =  soma - ((this.valorCupom/100) * soma)
    return desconto
  }
  
}




        
         
 
