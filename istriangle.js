const inputs = document.querySelectorAll(".input-box");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180) {
        outputBox.innerText = "Yay! The angles form a triangle <3";
    } else {
        outputBox.innerText = "Oh no! The angles do NOT form a triangle </3";
    }
}

checkBtn.addEventListener("click", isTriangle);