const nighThemeBtn=document.getElementById("night-theme-btn");

nighThemeBtn.addEventListener("click",function(){
    document.body.classList.toggle("night-theme")


    const theme=localStorage.getItem("theme")

    if (theme ==="night-theme"){
        localStorage.setItem("theme", "")
    }else {
        localStorage.setItem("theme", "night-theme")
    }
})