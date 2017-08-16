var display = document.getElementById("display");

function toDisplay(x) {
  if (display.value === "" && (x === "/" || x === "*" || x === "+" || x === "-" || x === ".")) {
    display.value = "";
  }
  else {
   display.value += x; 
  }
  
  if (x === "C") display.value = "";
}

function equals() {
  if (display.value !== "") {
    display.value = eval(display.value);
  }
}

function squared() {
  if (display.value !== "") {
    var x = eval(display.value);
    display.value = x*x;
  }
}

function clearEntry() {
  var entry = display.value;
  if (entry !== "") {
    display.value = entry.substring(0, entry.length-1);
  }
}

function pressKey(x) {
  display.value = x;
}