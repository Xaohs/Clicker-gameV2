var goldCount = 0;
var doransBlade = 0;
var doransRing = 0;
var ampTome = 0;
var totalCost = 0;
var seconds = 0;
var seconds1 = 0;
var id;
var cancel = setInterval(idleTotal, 1000);
var cancel1 = setInterval(printAmount, 50);
// Print total coins
function printAmount() {
    seconds1 += 1;
    let ownedStructure = (doransRing + ampTome);
    let ownedStructureGPS = (doransRing/10) + (ampTome);
    document.getElementById("rich").innerHTML = "Gold: " + goldCount.toFixed(0);
    document.getElementById("damage").innerHTML = "Total AD: " + (doransBlade + 1);
    document.getElementById("ability_power").innerHTML = "Total AP: " + ownedStructure + " (" + ownedStructureGPS + " gps)";
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
    } else {
        alert("not enough coins");
        totalCost = 0;
    }

}
function ap(clicked_id) {
    id = clicked_id;
    totalCost = 0; 
    if (id === "dorans_Ring" && goldCount >= 15 * 1.15**doransRing) {
        totalCost = 15 * 1.15**doransRing;
        doransRing++
        goldCount = goldCount - totalCost; 
        printAmount();
        return doransRing, totalCost;
        } else if (id === "dorans_Ring" && goldCount <= 15 * 1.15**doransRing) {
            alert("You don't have enough gold to buy Doran's Ring");
            totalCost = 0;
        } 
    if (id === "amp_Tome" && goldCount >= 100 * 1.15**ampTome) {
        totalCost = 100 * 1.15**ampTome;
        ampTome++;
        goldCount = goldCount - totalCost; 
        printAmount();
        return ampTome, totalCost;
        } else if (id === "amp_Tome" && goldCount <= 100 * 1.15**ampTome) {
            alert("You don't have enough gold to buy Amplifying Tome");
            totalCost = 0;
        } 
}
function idleTotal() {
    seconds += 1;
    goldCount = goldCount + (doransRing / 10); 
    goldCount = goldCount + (ampTome); 
    return goldCount;
}