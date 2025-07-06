let input= document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string ="";
const operators =['+','-','*','/','%'];
function isValidInput(newChar,currentString){
    const lastChar = currentString.slice(-1);
    if (operators.includes(newChar)&&operators.includes(lastChar)) return false;
    if (currentString.length ===0 &&operators.includes(newChar)&& newChar!=='-') return false;
    if (newChar=== '.' && /\.\d*$/.test(currentString)) return false;
}
