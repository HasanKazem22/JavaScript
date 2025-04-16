const unitConverter = {
    mtf: function(meters) {
        return meters * 3.28084;
    },

    ktp: function(kilograms) {
        return kilograms * 2.20462;
    },

    ctf: function(celsius) {
        return (celsius * 9/5) + 32
    }
}

document.getElementById("convertButton").onclick = () => {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let convertType = document.getElementById("convertType").value;

    let convertedValue;
    convertedValue = convertType === 'mtf' ? unitConverter.mtf(inputValue) :
                     convertType === 'ktp' ? unitConverter.ktp(inputValue) :
                     unitConverter.ctf(inputValue);

    document.getElementById("convertedValue").textContent = convertedValue.toFixed(2);
}