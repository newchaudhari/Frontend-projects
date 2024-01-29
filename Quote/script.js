const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");

const api_url = "https://api.quotable.io/random";

const quote1 = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};
quote1(api_url);

newQuote.addEventListener("click", () => {
  console.log("button clicked");
  quote1(api_url);
});

tweetQuote.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      ".... by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
});
