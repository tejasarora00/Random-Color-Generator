let randomBtn = document.querySelector("button");

randomBtn.addEventListener("click", function () {
    let h1 = document.querySelector('h1');
    let randomColor = getRandomColor();
    h1.innerText = randomColor;
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}