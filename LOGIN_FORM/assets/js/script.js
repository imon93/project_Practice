const container = document.querySelector(".container");
const registerbtn = document.querySelector(".register_btn");
const loginbtn = document.querySelector(".login_btn");

registerbtn.addEventListener("click", ()=>{
    container.classList.add("active");
});

loginbtn.addEventListener("click", ()=>{
    container.classList.remove("active");
});
