const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.querySelector("#sound");

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", async () => {
  const inp = document.querySelector(".search-box input");

  let inpValue = inp.value;

  try{
    let result = await fetch(`${url}${inpValue}`);
  let data = await result.json();

  const result_box = document.querySelector(".result-box");

  result_box.innerHTML = `
    <div>
      <div class="word">
        <h3>${inpValue}</h3>
        <button onclick="playsound()">
          <i class="fa-solid fa-volume-low"></i>
        </button>
      </div>
      <div class="detail">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p>
      </div>
      <div class="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
      </div>
      <div class="word-example">
        ${data[0].meanings[0].definitions[0].example}
      </div>
    </div>
  `;
  sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
  }catch(e){
    const result_box = document.querySelector(".result-box");
    result_box.innerHTML="<h3>Oops...No word found </h3>";
  }
});


function playsound(){
    sound.play();
}
