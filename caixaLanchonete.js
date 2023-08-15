// caixaLanchonete.js
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const itens = ['cafe,4', 'chantily,4', 'suco,4', 'sanduiche,4','queijo,4','salgado,4','combo1,4','combo2,4'];

 const pagamento = 'dinheiro'

 const resultado = new CaixaDaLanchonete().calcularValorDaCompra(pagamento, itens)

 console.log(resultado)


 