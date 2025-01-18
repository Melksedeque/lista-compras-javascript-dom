import gerarDataCompleta from "./gerarDataCompleta.js";

const inputItem = document.getElementById("input-item");
let contador = 1;

export function criarItemDaLista() {
  if (!inputItem.value) {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  const inputCheckbox = document.createElement("input");
  const nomeItem = document.createElement("p");
  const itemData = document.createElement("p");
  const dataCompleta = gerarDataCompleta();

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

  return itemDaLista;
}
