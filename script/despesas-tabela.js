const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", ()=>{
  const dropdownMenu = document.querySelector("form.dropdown-menu");
  dropdownMenu.classList.remove("show");
})

const form = document.querySelector("#search-form");
form.addEventListener("submit", (e) => {
  console.log("ERRO");
  window.location.replace("./index.html")
})