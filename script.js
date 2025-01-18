import { criarItemDaLista } from "./js/criarItemDaLista.js";
import { verificarListaVazia } from "./js/verificarListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item");
const listaCompras = document.getElementById("lista-de-compras");
const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
const data = new Date().toLocaleDateString("pt-BR");
const hora = new Date().toLocaleTimeString("pt-BR", {
  hour: "numeric",
  minute: "numeric",
});
const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

botaoAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  const itemDaLista = criarItemDaLista(dataCompleta);
  listaCompras.appendChild(itemDaLista);
  verificarListaVazia(listaCompras);
});

verificarListaVazia(listaCompras);
