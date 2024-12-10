function changeText() {
    const pElement = document.getElementById("output"); 
    pElement.innerHTML = "Knappen ble trykket!"; 
}

const button = document.getElementById("myButton"); 
button.addEventListener("click", changeText); 
