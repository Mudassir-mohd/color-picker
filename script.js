let colorPicker = document.getElementById('colorPicker');
let colorBox = document.getElementById('colorBox');
let hexValue = document.getElementById('hexValue');
let rgbValue = document.getElementById('rgbValue');


colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    colorBox.style.backgroundColor = color;
    hexValue.textContent = `HEX: ${color}`;
    const rgb = hexToRgb(color);
    rgbValue.textContent = `RGB: rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
});


function hexToRgb(hex) {
    
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}



function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    });
}

hexValue.addEventListener('click', () => copyToClipboard(hexValue.textContent));
rgbValue.addEventListener('click', () => copyToClipboard(rgbValue.textContent));
