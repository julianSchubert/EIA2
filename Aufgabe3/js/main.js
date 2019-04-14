var Aufgabe3;
(function (Aufgabe3) {
    document.getElementById("Kartenstapel").addEventListener("click", Karteziehen);
    document.addEventListener("keydown", pruefeaufleertaste);
    document.getElementById("Hs").addEventListener("click", Kartensortieren);
    let karte1 = {
        typ: "Herz",
        wert: "Sieben",
        kartenReihenfolge: 0,
    };
    let karte2 = {
        typ: "Herz",
        wert: "Acht",
        kartenReihenfolge: 1,
    };
    let karte3 = {
        typ: "Herz",
        wert: "Neun",
        kartenReihenfolge: 2,
    };
    let karte4 = {
        typ: "Herz",
        wert: "Zehn",
        kartenReihenfolge: 3,
    };
    let karte5 = {
        typ: "Herz",
        wert: "Bube",
        kartenReihenfolge: 4,
    };
    let karte6 = {
        typ: "Herz",
        wert: "Dame",
        kartenReihenfolge: 5,
    };
    let karte7 = {
        typ: "Herz",
        wert: "König",
        kartenReihenfolge: 6,
    };
    let karte8 = {
        typ: "Herz",
        wert: "Ass",
        kartenReihenfolge: 7,
    };
    let karte9 = {
        typ: "Karo",
        wert: "Sieben",
        kartenReihenfolge: 8,
    };
    let karte10 = {
        typ: "Karo",
        wert: "Acht",
        kartenReihenfolge: 9,
    };
    let karte11 = {
        typ: "Karo",
        wert: "Neun",
        kartenReihenfolge: 10,
    };
    let karte12 = {
        typ: "Karo",
        wert: "Zehn",
        kartenReihenfolge: 11,
    };
    let karte13 = {
        typ: "Karo",
        wert: "Bube",
        kartenReihenfolge: 12,
    };
    let karte14 = {
        typ: "Karo",
        wert: "Dame",
        kartenReihenfolge: 13,
    };
    let karte15 = {
        typ: "Karo",
        wert: "König",
        kartenReihenfolge: 14,
    };
    let karte16 = {
        typ: "Karo",
        wert: "Ass",
        kartenReihenfolge: 15,
    };
    let karte17 = {
        typ: "Pik",
        wert: "Sieben",
        kartenReihenfolge: 16,
    };
    let karte18 = {
        typ: "Pik",
        wert: "Acht",
        kartenReihenfolge: 17,
    };
    let karte19 = {
        typ: "Pik",
        wert: "Neun",
        kartenReihenfolge: 18,
    };
    let karte20 = {
        typ: "Pik",
        wert: "Zehn",
        kartenReihenfolge: 19,
    };
    let karte21 = {
        typ: "Pik",
        wert: "Bube",
        kartenReihenfolge: 20,
    };
    let karte22 = {
        typ: "Pik",
        wert: "Dame",
        kartenReihenfolge: 21,
    };
    let karte23 = {
        typ: "Pik",
        wert: "König",
        kartenReihenfolge: 22,
    };
    let karte24 = {
        typ: "Pik",
        wert: "Ass",
        kartenReihenfolge: 23,
    };
    let karte25 = {
        typ: "Kreuz",
        wert: "Sieben",
        kartenReihenfolge: 24,
    };
    let karte26 = {
        typ: "Kreuz",
        wert: "Acht",
        kartenReihenfolge: 25,
    };
    let karte27 = {
        typ: "Kreuz",
        wert: "Neun",
        kartenReihenfolge: 26,
    };
    let karte28 = {
        typ: "Kreuz",
        wert: "Zehn",
        kartenReihenfolge: 27,
    };
    let karte29 = {
        typ: "Kreuz",
        wert: "Bube",
        kartenReihenfolge: 28,
    };
    let karte30 = {
        typ: "Kreuz",
        wert: "Dame",
        kartenReihenfolge: 29,
    };
    let karte31 = {
        typ: "Kreuz",
        wert: "König",
        kartenReihenfolge: 30,
    };
    let karte32 = {
        typ: "Kreuz",
        wert: "Ass",
        kartenReihenfolge: 31,
    };
    let karten = [karte1, karte2, karte3, karte4, karte5, karte6, karte7, karte8, karte9, karte10, karte11, karte12, karte13, karte14,
        karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27,
        karte28, karte29, karte30, karte31, karte32];
    let handkarten = [];
    let ablagestapel = [];
    //Wahl der Handkartenanzahl
    let endzahl;
    function handkartenanzahlauswaehlen() {
        let handkarten = prompt("Handkartenanzahl wählen", "1-5");
        endzahl = Number(handkarten); //stringtonumber
        return endzahl;
    }
    console.log(handkartenanzahlauswaehlen());
    //Handkarten generieren
    function Handkartenzufaellig(anzahlkarten) {
        for (let i = 0; i < anzahlkarten; i++) {
            let zahl = getRandomInt(0, karten.length);
            handkarten.push(karten[zahl]);
            writeHTML(i);
            karten.splice(zahl, 1);
        }
    }
    Handkartenzufaellig(endzahl);
    //Zufallszahl
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(karten.length);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function pruefeaufleertaste(_x) {
        var taste = _x.keyCode;
        if (taste == 32) {
            Karteziehen();
        }
    }
    //Eine Karte nachziehen
    function Karteziehen() {
        let neuezahl = getRandomInt(0, karten.length);
        handkarten.push(karten[neuezahl]);
        writeHTML(handkarten.length - 1);
        karten.splice(neuezahl, 1);
    }
    //i übergeben den Stelle im neuen Array entspricht i
    function writeHTML(_neu) {
        let prodElement = document.createElement('div');
        let aufderhand = `<p class="${handkarten[_neu].typ}" id="${handkarten[_neu].kartenReihenfolge}">${handkarten[_neu].typ} ${handkarten[_neu].wert}</p>`;
        prodElement.innerHTML = aufderhand;
        document.getElementById("Handkarten").appendChild(prodElement);
    }
    //Sortieren
    function Kartensortieren() {
        handkarten.sort(Typvergleichen);
        document.getElementById("Handkarten").innerHTML = ""; //Hier wird die Anzeige der Handkarten geleert
        for (let p = 0; p < handkarten.length; p++) {
            writeHTML(p);
        }
    }
    //Vergleichen ob gleich oder nicht
    function Typvergleichen(a, b) {
        let typA = a.typ;
        let typB = b.typ;
        if (typA < typB) {
            return -1;
        }
        if (typA > typB) {
            return 1;
        }
        return 0;
    }
    console.log(handkarten);
    //Karten ablegen
    document.getElementById("Handkarten").addEventListener("click", Karteablegen);
    function Karteablegen(event) {
        let x = event.target;
        for (let j = 0; j < handkarten.length; j++) {
            console.log(x.getAttribute("id"));
            if (Number(x.getAttribute("id")) == handkarten[j].kartenReihenfolge) {
                ablagestapel.push(handkarten[j]);
                console.log(ablagestapel);
                let prodElement = document.createElement('div');
                let neueHand = `<p class="${handkarten[j].typ}" id="${handkarten[j].kartenReihenfolge}">${handkarten[j].typ} ${handkarten[j].wert}</p>`;
                prodElement.innerHTML = neueHand;
                document.getElementById("Ablagestapel").appendChild(prodElement);
                handkarten.splice(j, 1);
                document.getElementById("Handkarten").innerHTML = "";
                for (let u = 0; u < handkarten.length; u++) {
                    writeHTML(u);
                }
            }
        }
    }
    console.log(ablagestapel);
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=main.js.map