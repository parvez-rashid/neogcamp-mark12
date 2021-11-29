const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
    const hypotenuse = Math.sqrt(sumOfSquares).toFixed(2);
    outputBox.innerText = "The length of the hypotenuse = " + hypotenuse;
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);