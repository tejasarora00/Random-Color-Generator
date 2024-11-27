let randomBtn = document.querySelector("button");

function getRandomColor(){
    let red = Math.floor(math.random()*255);
    let green = Math.floor(math.random()*255);
    let blue = Math.floor(math.random()*255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

randomBtn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let div = document.querySelector("div");
    let randomColor = randomColor;
    h1.innerText = randomColor;
    div.style.backgroundColor = randomColor;
})