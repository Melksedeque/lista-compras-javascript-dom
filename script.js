const inputItem = document.getElementById("input-item");
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
  e.preventDefault();
  console.log(inputItem.value);

  if (!inputItem.value) {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  const inputCheckbox = document.createElement("input");
  const nomeItem = document.createElement("p");
  const itemData = document.createElement("p");

  containerItemDaLista.classList.add("lista-item-container");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  nomeItem.innerText = inputItem.value;
  itemData.classList.add("texto-data");
  itemData.innerText = dataCompleta;

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);
  itemDaLista.appendChild(itemData);

  listaCompras.appendChild(itemDaLista);

  verificarListaVazia();
});

function verificarListaVazia() {
  // listaCompras.querySelectorAll("li")
  console.log(listaCompras);
  if (listaCompras.firstChild === null) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia();
