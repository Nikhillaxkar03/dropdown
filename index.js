let DropDownMenu = document.querySelector("img");
DropDownMenu.addEventListener("click",()=> {
    for(let i = 0; i<=5; i++){
    document.querySelector(".drop").classList.toggle("dropDown");
    document.querySelectorAll(".drop li")[i].classList.toggle("dropItems");
}})