let operators = []
let calcArr = []
const displayEl = document.getElementById("display-el")
const calcEl = document.getElementById("calc-el")
const resultEl = document.getElementById("result-el")

$('#add').click(function() {
  if (displayEl.value == "") {
    return;
  }
    operators.push("+")
    inpSave()
    printOut()
});

$('#sub').click(function() {
  if (displayEl.value == "") {
    return;
  }
  operators.push("-")
  inpSave()
  printOut()
});

$('#sum').click(function() {
  console.log(calcEl.textContent)
  resultEl.textContent = eval(calcEl.textContent);

  calcArr.splice(0, calcArr.length);
  operators.splice(0, operators.length);
  calcEl.textContent = "";
});
console.log(calcArr)

function printOut() {
  calcEl.textContent = "";
  if (calcArr.length === 1) {
    calcEl.textContent += calcArr[0] + operators[0]
  } else {
    for (let i = 0; i < calcArr.length; i++) {
      calcEl.textContent += operators[i] + calcArr[i]
      
    }
  }
  if (calcArr.length > 1) {
    calcEl.textContent = calcEl.textContent.substring(1)
    
  }
}

function inpSave() {
  calcArr.push(displayEl.value)
}



/*
let calc = [];
let actions = [];
const inputEl = document.getElementById("input-el");
const calcEl = document.getElementById("calc-el");
const messageEl = document.getElementById("message-el");

 
$('#test').click(function() {


    calc.push(inputEl.value);
    actions.push("+");
    console.log(calc);
});
 */








/* calcEl.textContent= ""; /
      for (let i = 0; i < calc.length; i++) {
      calcEl.textContent += calc[i] + actions[i];
      }

    calcEl.textContent


   /    if (calc.includes("+", "-")) {
        alert("test")
      } /

   /    const lastentry = calc[calc.length - 1];
       if (calc.includes(lastentry)) {

        calc = calc.split("+").pop
      } / 
});

$('#test3').click(function() {

  actions.push("-")
  calc.push(inputEl.value);
  console.log(calc);

  calcEl.textContent = "";
  for (let i = 0; i < calc.length; i++) {
  calcEl.textContent += calc[i] + actions[i];
}
});

function equal() {


  calc.push(inputEl.value);
  for (let i = 0; i < calc.length; i++) {
    calcEl.textContent += calc[i];
    if(actions.length > i){
    calcEl.textContent += actions[i];
    }
  }

  messageEl.textContent = eval(calcEl.textContent);

  console.log(eval(calc.join("")));
 
  calc.splice(0, calc.length);
  actions.splice(0, actions.length);
  calcEl.textContent = "";
}

/ function equal() {
    var total = 0;
    for (var i = 0; i < x.length; i++) {
      total += x[i];
      console.log(equal);
    }
    messageEl.textContent = "Result:" + equal
  }
*/