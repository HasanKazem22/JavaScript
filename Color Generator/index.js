let colorCode = document.getElementById("colorCode");
colorCode.textContent = "#FFFFFF"

document.getElementById("generateCode").onclick = function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorCode.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
}