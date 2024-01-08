const BASE_URL = "http://localhost:8080/word/";
const id = document.querySelector("#id");
const word = document.querySelector("#word");
const meaning = document.querySelector("#meaning");
const btn = document.querySelector("form button");



async function getData(search) {
  if (search === "" || search == null) {
    alert("Word can't be empty or null");
  } else {
    const response = await fetch(`${BASE_URL}${search}`);
    try {
      const data = await response.json();
      meaning.innerText = data.meaning;
      console.log(data.meaning);
    } catch {
      alert("Word is not in dictionary");
    }
  }

}

btn.addEventListener("click", (evt) => {
  let text = document.querySelector("form input");
  let search = text.value;
  evt.preventDefault();
  getData(search);
});
