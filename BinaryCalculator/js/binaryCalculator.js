

const elementIds = ["btn0", "btn1", "btnSum", "btnSub", "btnMul", "btnDiv"];
const symbols = ["0", "1", "+", "-", "*", "/"];
var count = 0;
var result_area = document.getElementById("res");

for(let i=0; i<elementIds.length; i++){
    addListener(elementIds[i], symbols[i]);
}

// utility function to add listener
function addListener(elementId, symbol){
    document.getElementById(elementId).addEventListener("click", 
        function(){
            result_area.insertAdjacentText("beforeend", symbol)
        });
}

// add button clear event
document.getElementById("btnClr").addEventListener("click",
    function(){
        result_area.innerText = "";
});

// add equal button event
document.getElementById("btnEql").addEventListener("click",
    function(){
        calculate();
});

// split string into arrays and convert to decimal
function split_assign(value, splitter){
    return value.split(splitter).map(
      function(elem){
        return parseInt(elem, 2);
      }
    );
}

// to convert decimal to binary
function toBinary(decimal_value){
    let binary = "";
    let rem;
    decimal_value = parseInt(decimal_value);
    while (decimal_value > 0){
        rem = decimal_value % 2;
        decimal_value = parseInt(decimal_value / 2, 10);
        binary = rem.toString() + binary;
    }
    return binary;
}

function assignToRes(value){
    result_area.innerText = value.toString();
}

// perform calculation on entered binary value
function calculate(){
    let input_string = result_area.innerText;  // get input string value

    let left = null;
    let right = null;
    let res;
    
    if (input_string.indexOf('+') > -1){
        [left, right] = split_assign(input_string, '+');
        res = toBinary(left + right);
    }
    else if(input_string.indexOf('-') > -1){
        [left, right] = split_assign(input_string, '-');
        res = toBinary(left - right);
    }
    else if(input_string.indexOf('*') > -1){
        [left, right] = split_assign(input_string, '*');
        res = toBinary(left * right);
    }
    else if(input_string.indexOf('/') > -1){
        [left, right] = split_assign(input_string, '/');
        res = toBinary(left / right);
    }
    // assign result to result area
    assignToRes(res);
}