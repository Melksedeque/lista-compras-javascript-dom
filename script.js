const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaCompras = document.getElementById("lista-de-compras");
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

  containerItemDaLista.classList.add("lista-item-container");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  nomeItem.innerText = inputItem.value;

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemDaLista.appendChild(containerItemDaLista);
  listaCompras.appendChild(itemDaLista);

  console.log(containerItemDaLista);
});
