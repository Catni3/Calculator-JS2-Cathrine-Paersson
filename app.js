let operators = [];
let calcArr = [];

/* Startar jquery */
$(document).ready(function() {
    /* Istället för 'getElementById' använder jag jquerys variant */
    const displayEl = $('#display-el').get(0);
    const calcEl = $("#calc-el").get(0);
    const resultEl = $("#result-el").get(0);

    /* plus och minus knappen */
    $("#add, #sub").click(function() {
            if (displayEl.value == "") {
                return;
            }
            /* genom att använda .attr och kalla på value i knapparna vi kallar 
            på gör att jag kunde slå ihop plusoch minusknappen i samma klickfunktion */
            operators.push($(this).attr("value"));
            /* Här kallar jag på fuktionerna som gör att uträkningen sparas och skrivs ut */
            inpSave();
            printOut();
        }),

        /* Här är klickfuktionen för = knappen. */
        $("#sum").click(function() {
            /* eval() gör uträkningar av det som står i calkulator fältet och sätter de result fältet.
            Är medveten om att eval är en osäker funktion att använda men i 
            nuläget vet jag inte hur jag ska ändra det till något annat */
            resultEl.textContent = eval(calcEl.textContent);

            calcArr.splice(0, calcArr.length);
            operators.splice(0, operators.length);
            calcEl.textContent = "";
        });

    /* funktionen för själva utskriften av uträkningen */
    function printOut() {
        /* börjar med att tömma calkulator fältet och resultatfältet inför ny uträckning */
        calcEl.textContent = "";
        resultEl.textContent = "";
        /* Om man skulle råka skriva in en bokstav kommer programmet att förbise det. 
        Det går alltså inte att använda bokstäver i uträckningen */
        if (isNaN(displayEl.value)) {
            calcArr = [];
            operators = [];
            return;
            /* om arrayen har exakt ett värde läggs det till i kalkylationen */
        } else if (calcArr.length === 1) {
            calcEl.textContent += calcArr[0] + operators[0];
        } else {
            /* använder .each i egenskap av for loop, 
            där vi loopar igenom arrayen och skriver ut i kalkylationen */
            $.each(calcArr, function(i) {
                calcEl.textContent += operators[i] + calcArr[i];
            });
        }
        /* denna ser till att kalkylationen inte börjar med ett tecken, 
        som kunde bli när man la till fler operatorer och siffror i uträkningen */
        if (calcArr.length > 1) {
            calcEl.textContent = calcEl.textContent.substring(1);
        }
    }
    /* här sparas det som står i calculation i arrayen för våra uträkningar */
    function inpSave() {
        calcArr.push(displayEl.value);
    }
})