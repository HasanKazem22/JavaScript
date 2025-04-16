document.getElementById("convertButton").onclick = function() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;

    let convertTemp = unit === 'C'
    ? (temp * 9/5) + 32
    : (temp - 32) * 5/9;

    document.getElementById("convertedValue").textContent = convertTemp.toFixed(2);
}