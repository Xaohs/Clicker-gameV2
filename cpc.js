var clicking = 0;
var totalCoins = 0;
var adBought = 0;
var apBought = 0;
var seconds = 0;
var seconds1 = 0;
var cancel = setInterval(calcTotal, 1000);
var cancel1 = setInterval(printAmount, 50);
var idle = 0;
var totalCost = 0;

function teemoClick() {
    clicking++;
    clicking = clicking + adBought;
    howMuchNow();
    return clicking;
}
function howMuchNow() {
    totalCoins = (clicking + idle);
    document.getElementById("rich").innerHTML = "Gold: " + totalCoins.toFixed(2);
}
function ad() {
    totalCost = 0; 
    totalCost = (10 * 1.15**adBought);
    if (totalCoins >= totalCost) {
        adBought++
        clicking = clicking - totalCost; 
        howMuchNow()
        return adBought, totalCost;
    } else {
        alert("not enough coins");
        totalCost = 0;
    }

}
function ap() { 
    totalCost = 0; 
    totalCost = (100 * 1.15**apBought);
    if (totalCoins >= totalCost) {
        apBought++
        clicking = clicking - totalCost; 
        howMuchNow()
        return apBought, totalCost;
    } else {
        alert("not enough coins");
        totalCost = 0;
    }
}
function calcTotal() {
    seconds += 1;
    idle = idle + (apBought / 10); 
    totalCoins = (clicking + idle);
    return totalCoins;
}
function printAmount() {
    seconds1 += 1;
    document.getElementById("rich").innerHTML = "Gold: " + totalCoins.toFixed(2);
    document.getElementById("damage").innerHTML = "Total AD: " + (adBought + 1);
    document.getElementById("ability_power").innerHTML = "Total AP: " + (apBought) + " (" + (apBought/10) + " gps)";
}







