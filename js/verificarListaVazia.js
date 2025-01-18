const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export function verificarListaVazia(listaCompras) {
  if (listaCompras.firstChild === null) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}
