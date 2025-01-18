export function verificarListaVazia() {
  if (listaCompras.firstChild === null) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}
