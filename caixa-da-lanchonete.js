
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoPagamento, itens) {

        const formasDePagamento = ['dinheiro', 'debito', 'credito'];

        const cardapio = [
            { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        ]

      //  lógica aqui
      let valorTotal = 0;
      let itensNoCarrinho = [];
  
      if (itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
  
      for (const itemPedido of itens) {
        const itemCodigo = itemPedido .split(',')[0];
        const itemQuantidade = Number(itemPedido.split(',')[1]);

        if (itemQuantidade == 0){
            return 'Quantidade inválida!';
        }

        const itemCardapio = cardapio.find(
          (item) => item.codigo === itemCodigo
        );
  
        if (!itemCardapio) {
          return 'Item inválido!';
        }
  
        if (itemCardapio.descricao.includes('extra')) {
          const nomeItemPrincipal = itemCardapio.descricao
            .split('(extra do ')[1]
            .split(')')[0];

          const itemPrincipal = cardapio.find(
            (item) =>
              item.descricao.includes(nomeItemPrincipal) &&
              !item.descricao.includes('extra')
          );
  
          if (
            !itensNoCarrinho.some((item) =>
              item.descricao.includes(nomeItemPrincipal)
            )
          ) {
            return 'Item extra não pode ser pedido sem o principal';
          }
        } else {
          itensNoCarrinho.push(itemCardapio);
        }
  
        valorTotal += itemCardapio.valor * itemQuantidade
      }
  
      if (!formasDePagamento.includes(metodoPagamento)) {
        return 'Forma de pagamento inválida!';
      }
  
      if (metodoPagamento === 'dinheiro') {
        valorTotal *= 0.95; // 5% de desconto
      } else if (metodoPagamento === 'credito') {
        valorTotal *= 1.03; // 3% de acréscimo
      }

      return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
      .format(valorTotal.toFixed(2));
    }
  }

export { CaixaDaLanchonete };

  
