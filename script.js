var hamburger = document.querySelector("#hamburger")

hamburger.addEventListener("click", function(){
    console.log("bra")
    document.querySelector("nav").classList.toggle("hide")
})