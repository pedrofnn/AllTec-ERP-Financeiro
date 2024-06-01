const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", ()=>{
  const dropdownMenu = document.querySelector("form.dropdown-menu");
  dropdownMenu.classList.remove("show");
})