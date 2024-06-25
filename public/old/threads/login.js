document.querySelector("#box-lol").addEventListener("click",()=>{
    alert("lol");
});
const kekBox = document.querySelector("#box-kek");
kekBox.addEventListener("click",()=>{
    alert("kek");
});

[
    {
        id: "#box-lol",
        text: "lol",
    },
    {
        id: "#box-kek",
        text: "kek",
    },
].forEach((e)=>{
    document.querySelector(e.id).addEventListener("click",()=>{
        alert(e.text);
    });;
})
