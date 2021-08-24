let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchButton = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchButton.onclick = function(){
    sidebar.classList.toggle("active");
}