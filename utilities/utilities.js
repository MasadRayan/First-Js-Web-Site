function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function clearInputFieldById(id) {
    document.getElementById(id).value = '';
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function handleToggle(id , style) {
    document.getElementById(id).style.display = style;
}

function sectionBackgroundColor(id , color) {
    document.getElementById(id).style.backgroundColor = color;
}