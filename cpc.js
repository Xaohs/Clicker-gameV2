var clicking = 0;
var totalCoins = 0;
var adBought = 0;
var apBought = 0;
var seconds = 0;
var seconds1 = 0;
var cancel = setInterval(calcTotal, 1000);
var cancel1 = setInterval(printAmount, 50);
var idle = 0;

function teemoClick() {
    clicking++;
    clicking = clicking + adBought;
    howMuchNow();
    return clicking;
}
function howMuchNow() {
    totalCoins = clicking + idle;
    document.getElementById("rich").innerHTML = "Gold: " + totalCoins.toFixed(2);
}
function ad() { 
    adBought++ 
    return adBought;
}
function ap() { 
    apBought++ 
    return apBought;
}
function calcTotal() {
    seconds += 1;
    idle = idle + (apBought / 10); 
    totalCoins = clicking + idle;
    return totalCoins;
}
function printAmount() {
    seconds1 += 1;
    document.getElementById("rich").innerHTML = "Gold: " + totalCoins.toFixed(2);
    document.getElementById("damage").innerHTML = "Total AD: " + (adBought + 1);
    document.getElementById("ability_power").innerHTML = "Total AP: " + (apBought) + " (" + (apBought/10) + " gps)";
}







