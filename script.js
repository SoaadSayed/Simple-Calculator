var inpText = document.getElementById("Answer");
var sum = 0;
var oper = "";
var num = 0;
var total = "";

inpText.style.pointerEvents = "none"

function EnterNumber(val) {

    total += val;
    inpText.value += val;
    num = inpText.value;
}

function EnterOperator(op) {
    
    total += op;
    oper = op;
    sum = num;
    inpText.value = "";
    

}

function EnterClear() {

    document.getElementById("Answer").value = "";
}


function EnterEqual(val) {

    sum = eval(total);
    var x = sum;
    inpText.value = x;
}

















// function EnterEqual(val) {

//     var inpValue = document.getElementById("Answer").value;
//     var temp = eval(inpValue);
//     document.getElementById("Answer").value = temp;
// }
// var num1 = "";
// var operator = "";
// var full = '';

// function EnterNumber(val) {

//     full  += val;
//     num1 += val;
//     inpText.value = num1;
// }

// function EnterOperator(op) {
//     full  += op;
//     operator += op;
//     inpText.value = op;
    

// }