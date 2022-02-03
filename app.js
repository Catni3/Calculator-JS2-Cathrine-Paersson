let operators = []
let calcArr = []
const displayEl = document.getElementById("display-el")
const calcEl = document.getElementById("calc-el")
const resultEl = document.getElementById("result-el")

$('#add').click(function() {
    calcArr.push(displayEl.value)
    calcArr.textContent = "";
    operators.push("+")

    for (let i = 0; i < calcArr.length; i++) {
        calcEl.textContent += calcArr[i] + operators[i];

    }
});

$('#sum').click(function() {
    calcArr.push(displayEl.value)
        /* resultEl.textContent = "" */
});
console.log(calcArr)




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