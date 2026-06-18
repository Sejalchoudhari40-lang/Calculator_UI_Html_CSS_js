const display=document.getElementById('display');
function appendValue(v){display.value+=v;}
function clearDisplay(){display.value='';}
function backspace(){display.value=display.value.slice(0,-1);}
function calculate(){
try{display.value=eval(display.value);}catch{display.value='Error';}
}
function toggleTheme(){
document.body.classList.toggle('light-mode');
}