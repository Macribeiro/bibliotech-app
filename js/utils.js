const register = document.querySelector(".register");
const reports = document.querySelector(".reports");
const parameters = document.querySelector(".parameters");
const closeButton = document.querySelector("#menu .menu-button");
const openButton = document.querySelector("#menu .open-menu")

function toggleRegister() {
  const columnRegister = document.querySelector("#menu ul.submenu-register").querySelectorAll("li")
  columnRegister.forEach((li) => {
    li.classList.toggle("hide");
    li.className.includes("hide") ? li.style.display = 'none' : li.style.display = "block"
  });
}

function toggleReports() {
  const columnReports = document.querySelector("#menu ul.submenu-reports").querySelectorAll("li")
  columnReports.forEach((li) => {
    li.classList.toggle("hide");
    li.className.includes("hide") ? li.style.display = 'none' : li.style.display = "block"
  });
}

function toggleParameters() {
  const columnParameters = document.querySelector("#menu ul.submenu-parameters").querySelectorAll("li")
  columnParameters.forEach((li) => {
    li.classList.toggle("hide");
    li.className.includes("hide") ? li.style.display = 'none' : li.style.display = "block"
  });
}

register.addEventListener("click", toggleRegister);
reports.addEventListener("click", toggleReports);
parameters.addEventListener("click", toggleParameters);
closeButton.addEventListener("click", () =>{
  const menu = document.querySelector("#menu")
  menu.classList.toggle("hide")
})
