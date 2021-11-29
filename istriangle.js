const inputs = document.querySelectorAll(".input-box");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    var angle1 = Number(inputs[0].value);
    var angle2 = Number(inputs[1].value);
    var angle3 = Number(inputs[2].value);
    ;
    if ((inputs[0].value !== "") && (inputs[1].value !== "") && (inputs[2].value !== "")) {
        if ((Math.sign(angle1) === 1) && (Math.sign(angle2) === 1) && (Math.sign(angle3) === 1)) {
            const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);
            if (sumOfAngles === 180) {
                outputBox.innerText = "Yay! The angles form a triangle";
            }
            else {
                outputBox.innerText = "Oh no! The angle do NOT form a triangle";
            }
        }
        else if ((Math.sign(angle1) === -1) || (Math.sign(angle2) === -1) || (Math.sign(angle3) === -1)) {

            outputBox.innerText = "Angles can't be negative";
        }
        else if ((Math.sign(angle1) === 0) || (Math.sign(angle2) === 0) || (Math.sign(angle3) === 0)) {

            outputBox.innerText = "Angles can't be zero";
        }
    }
}


checkBtn.addEventListener("click", isTriangle);