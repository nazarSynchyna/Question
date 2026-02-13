import "/src/sass/style.scss";

const yesBtn = document.querySelector('.btn--yes');
const noBtn = document.querySelector('.btn--no');
const result = document.querySelector('.result');

let yesSize = 1;
let noSize = 1;

const noTexts = [
    "Точно?",
    "Падумай",
    "Нада нада",
    "Го го",
    "Падумай ще раз"
];

let clickCount = 0;

noBtn.addEventListener('click', () => {

    if (clickCount < noTexts.length) {
        noBtn.innerText = noTexts[clickCount];
        clickCount++;
    } 

    else {
        noBtn.style.opacity = "0";
        noBtn.style.transform = "scale(0)";
        noBtn.style.pointerEvents = "none";
        return;
    }

    noSize -= 0.1;
    if (noSize > 0.4) {
        noBtn.style.transform = `scale(${noSize})`;
    }

    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener('click', () => {
    result.innerHTML = "Тоді на пукальну прогулочку?";
    result.style.opacity = 0;
    setTimeout(() => {
        result.style.opacity = 1;
    }, 100);
});