const gastos = [];
const nome = document.querySelector("#nome");
const registrar = document.querySelector("#registrar");
const tabelaGastos = document.querySelector("#table-gastos");
const tabelaBody = document.querySelector("#table-body");
const tipo = document.querySelector("#tipo");

nome.addEventListener("focus", () => {
  nome.style.border = "2px solid aqua";
});

nome.addEventListener("blur", () => {
  nome.style.borderColor = "transparent";
});

tipo.addEventListener("focus", () => {
  tipo.style.border = "2px solid aqua";
});

tipo.addEventListener("blur", () => {
  tipo.style.borderColor = "transparent";
});

registrar.addEventListener("mouseover", () => {
  registrar.style.color = "aqua";
});

registrar.addEventListener("mouseleave", () => {
  registrar.style.borderColor = "transparent";
  registrar.style.color = "#FFF";
});

const adicionaGasto = () => {
  tabelaBody.innerHTML += `<tr><td>${nome.value}</td><td>${tipo.value}</td></tr>`;
};
