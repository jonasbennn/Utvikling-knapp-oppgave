//Endrer teksten i <p> og knappens farge
function changeTextAndButtonStyle() {
    const pElement = document.getElementById("output");
    const button = document.getElementById("myButton");

    // Endre teksten i <p>-elementet
    pElement.innerHTML = "Knappen ble trykket!";

    // Endre knappens farge
    button.style.backgroundColor = "#004080"; 
}

//Tilbakestiller teksten og knappens farge
function reset() {
    const pElement = document.getElementById("output"); 
    const button = document.getElementById("myButton"); 

    // Tilbakestill teksten i <p>-elementet
    pElement.innerHTML = "";

    // Tilbakestill knappens farge
    button.style.backgroundColor = "#007BFF";
}

// Knytter knappene til funksjonene
const button = document.getElementById("myButton");
button.addEventListener("click", changeTextAndButtonStyle);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
