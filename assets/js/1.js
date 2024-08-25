function randomnumber(){
    let maxe=parseInt(document.getElementById('max').value);
    let mine=parseInt(document.getElementById('min').value);
    let resultElement = document.getElementById('Random_Number');
    if (isNaN(maxe) || isNaN(mine)) {
        resultElement.textContent = "Please enter valid numbers.";
        resultElement.style.color = "darkred";
        return;
    }
    if (maxe <= mine) {
        resultElement.textContent = "Max value should be greater than Min value.";
        resultElement.style.color = "darkred";
        return;
    }
    let Random_Number=Math.floor(Math.random()*(maxe-mine)+mine);
    document.getElementById('Random_Number').textContent = "Random Number: " + Random_Number;

}
