const sum=document.querySelector(".sum")
const btnmoon=document.querySelector(".btnmoon")
const dark=document.querySelector(".dark")
const likeBtns = document.querySelectorAll(".like");
const body=document.querySelector("body")
const header=document.querySelector("header")
const advertising=document.querySelector(".advertising")
const price=document.querySelector(".price")

likeBtns.forEach((btn) => {
    
    btn.addEventListener("click", () => {

        btn.classList.toggle("red");

    });

});
dark.addEventListener("click",()=>{
    btnmoon.classList.toggle("active")
    sum.classList.toggle("active")
    body.classList.toggle("darks")
    header.classList.toggle("darks")
    advertising.classList.toggle("darks")
    price.classList.toggle("darks")
})

