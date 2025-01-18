import { criarItemDaLista } from "./js/criarItemDaLista";
import { verificarListaVazia } from "./js/verificarListaVazia";

const botaoAdicionar = document.getElementById("adicionar-item");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
const listaCompras = document.getElementById("lista-de-compras");
const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
const data = new Date().toLocaleDateString("pt-BR");
const hora = new Date().toLocaleTimeString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
});
const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
let contador = 1;

botaoAdicionar.addEventListener("click", (e) => {
  verificarListaVazia();
  criarItemDaLista();
  listaCompras.appendChild(itemDaLista);
});

verificarListaVazia();
