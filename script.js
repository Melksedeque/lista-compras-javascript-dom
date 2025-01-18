import { criarItemDaLista } from "./js/criarItemDaLista.js";
import { verificarListaVazia } from "./js/verificarListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item");
const listaCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  const itemDaLista = criarItemDaLista();
  listaCompras.appendChild(itemDaLista);
  verificarListaVazia(listaCompras);
});

verificarListaVazia(listaCompras);
