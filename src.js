let currentColorValues = new Array;

window.onload = function () {

    let red = document.getElementById('resultRed');
    let green = document.getElementById('resultGreen');
    let blue = document.getElementById('resultBlue');
    
    document.getElementById('resultRed').innerHTML = generateRandomNumber();
    document.getElementById('resultGreen').innerHTML = generateRandomNumber();
    document.getElementById('resultBlue').innerHTML = generateRandomNumber();

    document.querySelector('body').style.background = `rgb(${red.innerHTML}, ${green.innerHTML}, ${blue.innerHTML})`

    currentColorValues.push(document.getElementById('resultRed').innerHTML.toString());
    currentColorValues.push(document.getElementById('resultGreen').innerHTML.toString());
    currentColorValues.push(document.getElementById('resultBlue').innerHTML.toString());

    console.log(currentColorValues);

}

let colorIndex = 0;

let color = new Array(document.getElementById('randomRed'), 
             document.getElementById('randomGreen'), 
             document.getElementById('randomBlue'));

const randomButton = document.getElementById('randomButton');
randomButton.addEventListener("click", randomizeContent);

function downloadColor() {
    let a = document.createElement("a");
    const blob = new Blob([currentColorValues], {type:"text/plain"});

    a.href = URL.createObjectURL(blob);
    a.download = "colors.txt";
    a.click();

    URL.revokeObjectURL(a.href);
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 255) + 1;
}

async function randomizeContent() {
    color[colorIndex].innerHTML = generateRandomNumber();

    
    if(colorIndex < 2) { // if all three numbers have been generated
        colorIndex++;
    } else { 
        
        colorIndex = 0;

        document.querySelector('body').style.background = `rgb(${color[0].innerHTML}, ${color[1].innerHTML}, ${color[2].innerHTML})`;

        await sleep(100);
        document.getElementById('resultRed').innerHTML = `${color[0].innerHTML}`;
        await sleep(100);
        color[0].innerHTML = '🎲';

        await sleep(100);
        document.getElementById('resultGreen').innerHTML = `${color[1].innerHTML}`;
        await sleep(100);
        color[1].innerHTML = '🎲';

        await sleep(100);
        document.getElementById('resultBlue').innerHTML = `${color[2].innerHTML}`;
        await sleep(100);
        color[2].innerHTML = '🎲';

        currentColorValues[0] = document.getElementById('resultRed').innerHTML.toString();
        currentColorValues[1] = document.getElementById('resultGreen').innerHTML.toString();
        currentColorValues[2] = document.getElementById('resultBlue').innerHTML.toString();

        console.log(currentColorValues);
    }
}

async function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}