function Ausführen() {
    var Name = prompt("Bitte Name eingeben", "Darth Vader");
    if (Name != null) {
        document.getElementById("Einfügen").innerHTML =
            "Hi " + Name + "!Schöne Website,oder?";
    }
    console.log("Hi " + Name + "!Schöne Website,oder?");
}
let i;
let resultat;
let s = "";
for (i = 1; i < 7; i++) {
    s += i + "\t";
}
console.log(s);
s = "";
for (i = 9; i > 2; i--) {
    s += i + "\t";
    s += i * i + "\n";
}
console.log(s);
resultat = 0;
for (i = 1; i < 11; i = i + 2) {
    resultat = resultat + 1;
    console.log("Zwischensumme: " + resultat);
}
Ausführen();
//# sourceMappingURL=main.js.map