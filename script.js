const jokeEl = document.getElementById("jokeEl");

// https://icanhazdadjoke.com/api

fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    jokeEl.innerHTML = jokeText;
  });
