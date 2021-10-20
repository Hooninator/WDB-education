let operands = [];
let curr = "";
let strbuffer = "";
let operator = null;

let operator_dict = {
    "+":add,
    "-":subtract,
    "x":mul,
    "÷":div
}

function input(num) {
    strbuffer+=num;
    curr += num;
    //alert(result.innerHTML)
    result.innerHTML=strbuffer;
}

function execute() {
    operand1 = operands[0];
    operand2 = parseInt(curr);
    val= operator(operand1, operand2);
    //alert(result)
    strbuffer = val.toString();
    result.innerHTML=strbuffer;
    operands = [val]
    curr = ""
    operator = null
}

function operate(op) {
    operator = operator_dict[op];
    operands.push(parseInt(curr));
    curr=""
    strbuffer+=op
    result.innerHTML=strbuffer;
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if (b==0){
        return NaN;
    }
    return a/b;
}

function clear() {
    operands = [];
    curr = "";
    strbuffer = "";
    operator = null;
    result.innerHTML=0;
}

function back() {
    let to_remove = curr[-1];
    if (operator_dict.hasOwnProperty(to_remove)) {
        operator = null;
    } else {
        curr = curr.slice(0, curr.length-1);
    }
    strbuffer= strbuffer.slice(0, strbuffer.length-1);
    result.innerHTML=strbuffer;
}

let zero = document.getElementById("zero-button");
let one = document.getElementById("one-button");
let two = document.getElementById("two-button");
let three = document.getElementById("three-button");
let four = document.getElementById("four-button");
let five = document.getElementById("five-button");
let six = document.getElementById("six-button");
let seven = document.getElementById("seven-button");
let eight = document.getElementById("eight-button");
let nine = document.getElementById("nine-button")
zero.addEventListener("click", function(){input(zero.innerHTML)});
one.addEventListener("click", function(){input(one.innerHTML)});
two.addEventListener("click", function(){input(two.innerHTML)});
three.addEventListener("click", function(){input(three.innerHTML)});
four.addEventListener("click", function(){input(four.innerHTML)});
five.addEventListener("click", function(){input(five.innerHTML)});
six.addEventListener("click", function(){input(six.innerHTML)});
seven.addEventListener("click", function(){input(seven.innerHTML)});
eight.addEventListener("click", function(){input(eight.innerHTML)});
nine.addEventListener("click", function(){input(nine.innerHTML)});
let results = document.getElementsByClassName("result-screen");

let a = document.getElementById("add-button")
a.addEventListener("click", function(){operate(a.innerHTML)});
let s = document.getElementById("minus-button")
s.addEventListener("click", function(){operate(s.innerHTML)});
let d = document.getElementById("div-button")
d.addEventListener("click", function(){operate(d.innerHTML)});
let m = document.getElementById("mul-button")
m.addEventListener("click", function(){operate(m.innerHTML)});

let e = document.getElementById("equal-button");
e.addEventListener("click", function(){execute()});

let c = document.getElementById("c-button");
c.addEventListener("click", function(){clear()})

let b = document.getElementById("back-button");
b.addEventListener("click", function(){back()})