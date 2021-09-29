var goldCount = 0;
var doransBlade = 0;
var doransRing = 0;
var ampTome = 0;
var blastWand = 0;
var totalCost = 0;
var seconds = 0;
var seconds1 = 0;
var id;
var printPrice = 0;
var cancel = setInterval(idleTotal, 1000);
var cancel1 = setInterval(printAmount, 50);
//*********ON LOAD*********** */ print the base price of items
document.getElementById("dorans_Ring_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + 15;
document.getElementById("amp_Tome_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + 100;
document.getElementById("blasting_Wand_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + 1100;
// Print total coins
function printAmount() {
    seconds1 += 1;
// Print Gold/AD/AP
    let ownedStructure = (doransRing + ampTome);
    let ownedStructureGPS = (doransRing/10) + (ampTome) + (blastWand*8);
    document.getElementById("rich").innerHTML = "Gold: " + goldCount.toFixed(0);
    document.getElementById("damage").innerHTML = "Total AD: " + (doransBlade + 1);
    document.getElementById("ability_power").innerHTML = "Total AP: " + ownedStructure + " (" + ownedStructureGPS + " gps)";
    document.title = goldCount.toFixed(0) + " Gold";
// check if current gold = the price for opacity
    if (goldCount > 15 * 1.15**doransRing) {
        document.getElementById("dorans_Ring").style.opacity = "1";   
    } else {
        document.getElementById("dorans_Ring").style.opacity = "0.4";
    }
    if (goldCount > 100 * 1.15**ampTome) {
        document.getElementById("amp_Tome").style.opacity = "1"; 
    } else {
        document.getElementById("amp_Tome").style.opacity = "0.4";
    }
    if (goldCount > 1100 * 1.15**blastWand) {
        document.getElementById("blasting_Wand").style.opacity = "1"; 
    } else {
        document.getElementById("blasting_Wand").style.opacity = "0.4";
    }
}
// goldCount adds coins
function teemoClick() {
    goldCount++;
    goldCount = goldCount + doransBlade;
    printAmount();
    return goldCount;
}
function ad() {
    totalCost = 0; 
    totalCost = (15 * 1.15**doransBlade);
    if (goldCount >= totalCost) {
        doransBlade++;
        goldCount = goldCount - totalCost; 
        printAmount();
        return doransBlade, totalCost;
    }
}
function ap(clicked_id) {
    id = clicked_id;
    totalCost = 0; 
    printPrice = 0;
    if (id === "dorans_Ring" && goldCount >= 15 * 1.15**doransRing) {
// calc total cost
        totalCost = 15 * 1.15**doransRing;
// calc total cost for the one AFTER this - To show price
        printPrice = 15 * 1.15**(doransRing+1);
        document.getElementById("dorans_Ring_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + Math.ceil(printPrice);
// +1 item
        doransRing++;
        goldCount = goldCount - totalCost; 
        printAmount();
        return doransRing, totalCost, printPrice, id;
        }
    if (id === "amp_Tome" && goldCount >= 100 * 1.15**ampTome) {
        totalCost = 100 * 1.15**ampTome;
        printPrice = 100 * 1.15**(ampTome+1);
        document.getElementById("amp_Tome_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + Math.ceil(printPrice);
        ampTome++;
        goldCount = goldCount - totalCost; 
        printAmount();
        return ampTome, totalCost, printPrice;
    }
    if (id === "blasting_Wand" && goldCount >= 1100 * 1.15**blastWand) {
        totalCost = 1100 * 1.15**blastWand;
        printPrice = 1100 * 1.15**(blastWand+1);
        document.getElementById("blasting_Wand_Gold").innerHTML = "<img src=\"Images/gold_Coin.jpg\" width=\"50px\" height=\"40px\">" + Math.ceil(printPrice);
        blastWand++;
        goldCount = goldCount - totalCost; 
        printAmount();
        return blastWand, totalCost, printPrice;
    }

}
function idleTotal() {
    seconds += 1;
    goldCount = goldCount + (doransRing / 10); 
    goldCount = goldCount + (ampTome); 
    goldCount = goldCount + (blastWand * 8); 
    return goldCount;
}