const menu = document.getElementById("menu"),
chevron = document.getElementById("chevron");

const buttonToggle = () => {
    menu.classList.toggle("open");
    chevron.innerHTML = 
    !menu.classList.contains("open") ? `<i class="fa fa-folder-open" aria-hidden="true"></i>` : `<i class="fa fa-times" aria-hidden="true"></i>`;
};
const button = () => 
    alert("main button clicked!!");

const buttonMenu = () => {
    buttonToggle();
    alert("main button clicked!!");
    }

