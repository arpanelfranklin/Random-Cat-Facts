let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let req =  await axios.get(url);
    let fact = req.data.fact;
    let p = document.querySelector("p");
    p.innerText= fact;
})