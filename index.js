//Task 1

const buttonEl = document.querySelector("#button");
const textEl = document.querySelector("#text");

const changeButtonEl = function()  {
    buttonEl.onclick = () => buttonEl.textContent = textEl.value;
};

changeButtonEl();

//Task 2

const title = document.querySelector(".title");
const imageEl = document.querySelector(".image");
const checkboxEl = document.querySelector(".checkbox");

const changeImageEl = () => {
    checkboxEl.onclick = function() {
        if (checkboxEl.checked) {
            title.textContent = "Тепер ви в Сахарі, якщо ви нажмете на чекбокс, ви назад повернетеся до айсбергів";
            imageEl.src = "./images/sahara.jpg";
        } else {
            title.textContent = "Натисніть на чекбокс, і ви з'явитеся у теплій Сахарі";
            imageEl.src = "./images/kriga.jpg";
        }
    }
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
