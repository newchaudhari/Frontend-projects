const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const generateQR = document.getElementById("generateQR");

generateQR.addEventListener("click", () => {
  if (qrText.value.length > 0) {
    qrImage.style.display = "block";
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.style.maxHeight = "300px";

    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    qrImage.style.display = "none";
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
});
