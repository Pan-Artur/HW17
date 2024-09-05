//Task 1

const buttonEl = document.querySelector("#button");
const textEl = document.querySelector("#text");

const changeButtonEl = function()  {
    buttonEl.textContent = textEl.textContent;
};

changeButtonEl();

//Task 2

const title = document.querySelector(".title");
const imageEl = document.querySelector(".image");
const checkboxEl = document.querySelector(".checkbox");

const changeImageEl = () => {
    imageEl.src = "./images/sahara.jpg";
};

changeImageEl();

//Task 3

const task3ImageEl = document.querySelector(".task3-image");
const linkEl = document.querySelector(".link");

linkEl.href = "https://www.twitch.tv";
task3ImageEl.alt = "Twitch Photo";

//Task 4

const piecesOfListEl = document.querySelector("li p");

const firstListElement = piecesOfListEl.firstChild;

firstListElement.textContent = "Підручник з біології 9 клас";
