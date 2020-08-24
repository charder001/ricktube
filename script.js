var hamburger = document.querySelector("#hamburger")
var collapsedNav = document.querySelector("#collapsed-nav")

hamburger.addEventListener("click", function(){
    console.log("bra")
    document.querySelector("#expanded-nav").classList.toggle("hide")
    collapsedNav.classList.toggle("hide")
})


