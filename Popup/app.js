const popup = document.getElementById("popup");
const submit = document.getElementById("submit");
const ok = document.getElementById("ok");

submit.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
ok.addEventListener("click", () => {
  popup.classList.remove("open-popup");
});
