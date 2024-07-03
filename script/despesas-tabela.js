const resetButton = document.getElementById("resetButton");
const searchForm = document.getElementById("searchForm");
const editButtons = document.querySelectorAll(".editButton");
const viewButtons = document.querySelectorAll(".viewButton");
const excluirButtons = document.querySelectorAll(".excluirButton");
const modalButton = document.getElementById("modalSubmit");
const modalForm = document.getElementById("modalForm");
let currentTableRow

/*EVENTOS */
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

//Botão de edição de item
editButtons.forEach((button)=> {
  button.addEventListener("click",() => {
    const tableRow = button.closest("tr")
    currentTableRow = tableRow
    formFill(tableRow, modalForm);
    inputsDisabled(false);
  });
})
//Botão de visualização de item
viewButtons.forEach((button) => {
  button.addEventListener("click",() => {
    const tableRow = button.closest("tr")
    currentTableRow = tableRow
    formFill(tableRow, modalForm);
    inputsDisabled(true);
  })
})
//Botão de exclusão de item
excluirButtons.forEach((button) => {
  button.addEventListener("click",() => {
    const tableRow = button.closest("tr")
    tableRow.remove();
  })
})
//Formulário Modal botão submit
modalButton.addEventListener("click",(e) => {
  const editarTrue = e.currentTarget.textContent.includes("Editar");
  if(editarTrue) {
    inputsDisabled(false);
  } else {
    const formButton = document.querySelector("#modalForm button");
    formButton.click();
  }
} )
//Fomulário Modal edição da tabela
modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const rowCells = currentTableRow.cells
  const inputs = [
    inputNome.value, 
    inputTipo.value, 
    `R$${inputValor.value}`,
    formatarData(inputData.value, "tabela"),
    inputCategoria.value,
    inputStatus.value
  ]
  for(let i = 0; i < inputs.length; i++){
    let span = rowCells[i].querySelector("span")
    rowCells[i].firstChild.textContent = inputs[i]
    if(span){
      changeSpanClass(span, inputs[i])
    }
  }
  const myModal = bootstrap.Modal.getInstance("#modalDetails")
  myModal.hide(); 
});

/*FUNÇÕES*/
//Habilitar edição no formulário modal
function inputsDisabled(boolean){
  const allInputs = modalForm.querySelectorAll("input, select, textarea");
  const modalButton = document.getElementById("modalSubmit");
  const modalHeader = document.getElementById("modalDetailsLabel");
  allInputs.forEach(input => input.disabled = boolean);
  if(boolean){
    modalHeader.textContent = "Visualização";
    modalButton.textContent = "Editar";
  } else {
    modalHeader.textContent = "Edição";
    modalButton.textContent = "Salvar";
  } 
}
//Preencher o formulário
function formFill(row, form){
  const rowCells = row.cells;
  const nomeCell = rowCells[0].textContent;
  const tipoCell = rowCells[1].textContent;
  const valorCell = rowCells[2].textContent.replace("R$", "");
  const dataCell = formatarData(rowCells[3].textContent, "input");
  const categoriaCell = rowCells[4].textContent;
  const statusCell = rowCells[5].textContent;
  
  form.inputNome.value = nomeCell;
  form.inputTipo.value = tipoCell;
  form.inputValor.value = valorCell;
  form.inputData.value = dataCell
  form.inputCategoria.value = categoriaCell;
  form.inputStatus.value = statusCell;
}
//Formatar a data para input ou tabela
function formatarData(dataString,tipo){
  if(tipo === "input"){
    const data = dataString.split("/");
    return dataFormatada = `${data[2]}-${data[1]}-${data[0]}`
  } else if(tipo === "tabela") {
    const data = dataString.split("-");
    return dataFormatada = `${data[2]}/${data[1]}/${data[0]}`
  }
}
//Mudar a cor do status
function changeSpanClass(span, text){
  span.className = ''
  span.classList.add("badge", "align-middle", "rounded-pill");
  switch(text){
    case "Completo":{span.classList.add("text-bg-success");};break;
    case "Pendente":{span.classList.add("text-bg-warning");};break;
    case "Venceu":{span.classList.add("text-bg-danger");};break;
  }
}