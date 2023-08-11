
let btn = document.querySelector("button");
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", async()=>{

let joke1 =await getjoke()
let joke = document.getElementById("joke");
joke.innerText= joke1;

})
async function getjoke(){
    let res = await fetch(url);
    let data = await res.json();
    return data.joke ;
    
    
}
