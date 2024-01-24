const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  // if we want time in 12 hour format use this function instead of currentTime.gethours()
  //   let hours = () => {
  //     if (currentTime.getHours() > 12) {
  //       return currentTime.getHours() - 12;
  //     } else {
  //       return currentTime.getHours();
  //     }
  //   };

  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
