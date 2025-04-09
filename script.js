let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});




particlesJS.load("particles-js","particles-config.json");



// Toggle music playback
  function toggleMusic() {
    const music = document.getElementById("diwaliMusic");
    const controlButton = document.getElementById("musicControl");
  
    if (music.paused) {
      music.play();
      controlButton.textContent = "Pause Music";
    } else {
      music.pause();
      controlButton.textContent = "Play Music";
    }
  }
  