const resetButton = document.getElementById("resetButton");
const searchForm = document.getElementById("searchForm");
const editButton = document.querySelectorAll(".editButton");
const viewButton = document.querySelectorAll(".viewButton");
const modalButton = document.getElementById("modalSubmit");
//Fechar Formulário de filtro
resetButton.addEventListener("click", ()=>{
  const dropdownMenu = document.querySelector("form.dropdown-menu");
  dropdownMenu.classList.remove("show");
})

//Barra de pesquisa
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.currentTarget.querySelector("input");
  console.log(input.value);//REMOVER
});

//Botão de edição da tabela
editButton.forEach(button => {
  button.addEventListener("click",() => {
    inputsHabilitar(false, "Salvar", "Edição");
  });
})
//Botão de visualização de item
viewButton.forEach((button) => {
  button.addEventListener("click",() => {
    inputsHabilitar(true, "Editar", "Visualização");
  })
})
//Formulário Modal
modalButton.addEventListener("click",(e) => {
  const editarTrue = e.currentTarget.textContent.includes("Editar");
  if(editarTrue) {
    inputsHabilitar(false, "Salvar", "Edição");
  } else {
    const formButton = document.querySelector("#modalForm button");
    formButton.click();
  }
} )

//Habilitar edição no formulário modal
function inputsHabilitar(boolean, btnText, headerTxt){
  const modalForm = document.getElementById("modalForm");
  const allInputs = modalForm.querySelectorAll("input, select, textarea");
  const modalButton = document.getElementById("modalSubmit");
  const modalHeader = document.getElementById("modalDetailsLabel");
  allInputs.forEach(e => e.disabled = boolean)
  modalHeader.textContent = headerTxt
  modalButton.textContent = btnText
}
