"use strict";
//  declare variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".memory");
const btnVolume = document.querySelector(".musicOnOff");

const audioFiles = ["track0.mp3", "track1.mp3", "track2.mp3", "track3.mp3"];


function randomTrack() {
  return audioFiles[Math.floor(Math.random() * audioFiles.length)];
}

let playing = false;

let audio = new Audio(randomTrack());

audio.addEventListener("ended", function () {
  audio = new Audio(randomTrack());
  audio.play;
});

const playMusic = function () {
  audio.play();
};

// show the modal window
const openModal = function (e) {
  document.querySelector(".photo").src = `memory${this.id}.png`;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// close the modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// turn the music on and off
btnVolume.addEventListener("click", function () {
  if (!playing) {
    playMusic();
    document.querySelector(".speakerImage").src = "volume-on.png";
    playing = true;
  } else {
    audio.pause();
    document.querySelector(".speakerImage").src = "volume-off.png";
    playing = false;
  }
});

// add the event listeners to the panels to open window, and click background, esc or X to close
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
