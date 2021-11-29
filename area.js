const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputArea = document.querySelector("#output-area");

function calculateTriangleArea() {
    const base = sides[0].value;
    const height = sides[1].value;

    const triangleArea = (0.5 * Number(base) * Number(height)).toFixed(2);
    outputArea.innerText = "The area of the triangle is " + triangleArea + " cm2";
}

areaBtn.addEventListener("click", calculateTriangleArea);