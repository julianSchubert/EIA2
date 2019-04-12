var Aufgabe3;
(function (Aufgabe3) {
    //Noch die äs und ös weg void hinter den Funktionen
    document.getElementById("Kartenstapel").addEventListener("click", Karteziehen);
    document.getElementById("Handkarten").addEventListener("click", Karteablegen);
    document.getElementById("Hs").addEventListener("click", Kartensortieren);
    function Sortiertekartenanzeigen() {
        //  Kartensortieren();
    }
    function Kartensortieren() {
        Handkarten.sort(Typvergleichen);
    }
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
        console.log(Handkarten);
    }
    let endzahl;
    function handkartenanzahlauswählen() {
        let handkarten = prompt("Handkartenanzahl wählen", "1-5");
        endzahl = Number(handkarten); //stringtonumber
        return endzahl;
    }
    console.log(handkartenanzahlauswählen());
    let Karte1 = {
        typ: "Herz",
        wert: "Sieben",
    };
    let Karte2 = {
        typ: "Herz",
        wert: "Acht",
    };
    let Karte3 = {
        typ: "Herz",
        wert: "Neun",
    };
    let Karte4 = {
        typ: "Herz",
        wert: "Zehn",
    };
    let Karte5 = {
        typ: "Herz",
        wert: "Bube",
    };
    let Karte6 = {
        typ: "Herz",
        wert: "Dame",
    };
    let Karte7 = {
        typ: "Herz",
        wert: "König",
    };
    let Karte8 = {
        typ: "Herz",
        wert: "Ass",
    };
    let Karte9 = {
        typ: "Karo",
        wert: "Sieben",
    };
    let Karte10 = {
        typ: "Karo",
        wert: "Acht",
    };
    let Karte11 = {
        typ: "Karo",
        wert: "Neun",
    };
    let Karte12 = {
        typ: "Karo",
        wert: "Zehn",
    };
    let Karte13 = {
        typ: "Karo",
        wert: "Bube",
    };
    let Karte14 = {
        typ: "Karo",
        wert: "Dame",
    };
    let Karte15 = {
        typ: "Karo",
        wert: "König",
    };
    let Karte16 = {
        typ: "Karo",
        wert: "Ass",
    };
    let Karte17 = {
        typ: "Pik",
        wert: "Sieben",
    };
    let Karte18 = {
        typ: "Pik",
        wert: "Acht",
    };
    let Karte19 = {
        typ: "Pik",
        wert: "Neun",
    };
    let Karte20 = {
        typ: "Pik",
        wert: "Zehn",
    };
    let Karte21 = {
        typ: "Pik",
        wert: "Bube",
    };
    let Karte22 = {
        typ: "Pik",
        wert: "Dame",
    };
    let Karte23 = {
        typ: "Pik",
        wert: "König",
    };
    let Karte24 = {
        typ: "Pik",
        wert: "Ass",
    };
    let Karte25 = {
        typ: "Kreuz",
        wert: "Sieben",
    };
    let Karte26 = {
        typ: "Kreuz",
        wert: "Acht",
    };
    let Karte27 = {
        typ: "Kreuz",
        wert: "Neun",
    };
    let Karte28 = {
        typ: "Kreuz",
        wert: "Zehn",
    };
    let Karte29 = {
        typ: "Kreuz",
        wert: "Bube",
    };
    let Karte30 = {
        typ: "Kreuz",
        wert: "Dame",
    };
    let Karte31 = {
        typ: "Kreuz",
        wert: "König",
    };
    let Karte32 = {
        typ: "Kreuz",
        wert: "Ass",
    };
    let Karten = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14,
        Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27,
        Karte28, Karte29, Karte30, Karte31, Karte32];
    function getRandomInt(min, max) {
        min = Math.ceil(0);
        max = Math.floor(Karten.length);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function Handkartenzufällig(anzahlkarten, alleKarten) {
        for (let i = 0; i < anzahlkarten; i++) {
            let zahl = getRandomInt(0, Karten.length);
            let prodElement = document.createElement('div');
            let aufderhand = `<p class="${Karten[zahl].typ}">${Karten[zahl].typ} ${Karten[zahl].wert}</p>`;
            prodElement.innerHTML = aufderhand;
            document.getElementById("Handkarten").appendChild(prodElement);
            Handkarten.push(Karten[zahl]);
            Karten.splice(zahl, 1);
            console.log(alleKarten[zahl]);
        }
    }
    let Handkarten = [];
    Handkartenzufällig(endzahl, Karten);
    console.log(Handkarten);
    function Karteziehen() {
        let Nachziehstapel = Karten;
        let neuezahl = getRandomInt(0, Karten.length);
        let prodElement = document.createElement('div');
        let aufderhand = `<p class="${Karten[neuezahl].typ}">${Karten[neuezahl].typ} ${Karten[neuezahl].wert}</p>`;
        prodElement.innerHTML = aufderhand;
        document.getElementById("Handkarten").appendChild(prodElement);
        Handkarten.push(Karten[neuezahl]);
        Karten.splice(neuezahl, 1);
    }
    let Ablagestapel = [];
    function Karteablegen() {
        console.log("Hallo");
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=main.js.map