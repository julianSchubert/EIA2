namespace Aufgabe3 {/*Aufgabe: Aufgabe3 MauMau Interaktiv Name: Julian Schubert
Matrikel:261168
Datum: 11.04.19 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Er wurde in Zusammenarbeit mit Sina Haas und Bente Gossel erstellt mit Hilfe von Lucas Rohrberg*/

    //Noch die äs und ös weg void hinter den Funktionen pruefeAufLeerzeichen (Camel Case!!!!!!!!!!!!!)


    document.getElementById("Kartenstapel").addEventListener("click", Karteziehen);

    document.addEventListener("keydown", pruefeaufleertaste);

    document.getElementById("Hs").addEventListener("click", Kartensortieren);





    interface Karte {
        typ: string;
        wert: string;
        kartenReihenfolge: number;
    }

    let Karte1: Karte = {
        typ: "Herz",
        wert: "Sieben",
        kartenReihenfolge: 0,
    }

    let Karte2: Karte = {
        typ: "Herz",
        wert: "Acht",
        kartenReihenfolge: 1,
    }

    let Karte3: Karte = {
        typ: "Herz",
        wert: "Neun",
        kartenReihenfolge: 2,
    }

    let Karte4: Karte = {
        typ: "Herz",
        wert: "Zehn",
        kartenReihenfolge: 3,
    }

    let Karte5: Karte = {
        typ: "Herz",
        wert: "Bube",
        kartenReihenfolge: 4,
    }

    let Karte6: Karte = {
        typ: "Herz",
        wert: "Dame",
        kartenReihenfolge: 5,
    }

    let Karte7: Karte = {
        typ: "Herz",
        wert: "König",
        kartenReihenfolge: 6,
    }

    let Karte8: Karte = {
        typ: "Herz",
        wert: "Ass",
        kartenReihenfolge: 7,
    }


    let Karte9: Karte = {
        typ: "Karo",
        wert: "Sieben",
        kartenReihenfolge: 8,
    }

    let Karte10: Karte = {
        typ: "Karo",
        wert: "Acht",
        kartenReihenfolge: 9,
    }

    let Karte11: Karte = {
        typ: "Karo",
        wert: "Neun",
        kartenReihenfolge: 10,
    }

    let Karte12: Karte = {
        typ: "Karo",
        wert: "Zehn",
        kartenReihenfolge: 11,
    }

    let Karte13: Karte = {
        typ: "Karo",
        wert: "Bube",
        kartenReihenfolge: 12,
    }

    let Karte14: Karte = {
        typ: "Karo",
        wert: "Dame",
        kartenReihenfolge: 13,
    }

    let Karte15: Karte = {
        typ: "Karo",
        wert: "König",
        kartenReihenfolge: 14,
    }

    let Karte16: Karte = {
        typ: "Karo",
        wert: "Ass",
        kartenReihenfolge: 15,
    }

    let Karte17: Karte = {
        typ: "Pik",
        wert: "Sieben",
        kartenReihenfolge: 16,
    }

    let Karte18: Karte = {
        typ: "Pik",
        wert: "Acht",
        kartenReihenfolge: 17,
    }

    let Karte19: Karte = {
        typ: "Pik",
        wert: "Neun",
        kartenReihenfolge: 18,
    }

    let Karte20: Karte = {
        typ: "Pik",
        wert: "Zehn",
        kartenReihenfolge: 19,
    }

    let Karte21: Karte = {
        typ: "Pik",
        wert: "Bube",
        kartenReihenfolge: 20,
    }

    let Karte22: Karte = {
        typ: "Pik",
        wert: "Dame",
        kartenReihenfolge: 21,
    }

    let Karte23: Karte = {
        typ: "Pik",
        wert: "König",
        kartenReihenfolge: 22,
    }

    let Karte24: Karte = {
        typ: "Pik",
        wert: "Ass",
        kartenReihenfolge: 23,
    }

    let Karte25: Karte = {
        typ: "Kreuz",
        wert: "Sieben",
        kartenReihenfolge: 24,
    }

    let Karte26: Karte = {
        typ: "Kreuz",
        wert: "Acht",
        kartenReihenfolge: 25,
    }

    let Karte27: Karte = {
        typ: "Kreuz",
        wert: "Neun",
        kartenReihenfolge: 26,
    }

    let Karte28: Karte = {
        typ: "Kreuz",
        wert: "Zehn",
        kartenReihenfolge: 27,
    }

    let Karte29: Karte = {
        typ: "Kreuz",
        wert: "Bube",
        kartenReihenfolge: 28,
    }

    let Karte30: Karte = {
        typ: "Kreuz",
        wert: "Dame",
        kartenReihenfolge: 29,
    }

    let Karte31: Karte = {
        typ: "Kreuz",
        wert: "König",
        kartenReihenfolge: 30,
    }

    let Karte32: Karte = {
        typ: "Kreuz",
        wert: "Ass",
        kartenReihenfolge: 31,
    }


    let Karten: Karte[] = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14,
        Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27,
        Karte28, Karte29, Karte30, Karte31, Karte32]

    let Handkarten: Karte[] = [];
    let Ablagestapel: Karte[] = [];



    //Wahl der Handkartenanzahl

    let endzahl: number;

    function handkartenanzahlauswaehlen(): number {
        let handkarten: string = prompt("Handkartenanzahl wählen", "1-5");
        endzahl = Number(handkarten); //stringtonumber
        return endzahl;

    }


    console.log(handkartenanzahlauswaehlen());


    //Handkarten generieren

    function Handkartenzufaellig(anzahlkarten: number) {
        for (let i: number = 0; i < anzahlkarten; i++) {
            let zahl: number = getRandomInt(0, Karten.length);



            Handkarten.push(Karten[zahl]);
            writeHTML(i);
            Karten.splice(zahl, 1);


        }
    }
    Handkartenzufaellig(endzahl);


    //Zufallszahl

    function getRandomInt(min: number, max: number): number {
        min = Math.ceil(0);
        max = Math.floor(Karten.length);
        return Math.floor(Math.random() * (max - min)) + min;
    }



    function pruefeaufleertaste(_x: KeyboardEvent): void {
        var taste: number = _x.keyCode;
        if (taste == 32) {
            Karteziehen();
        }
    }



    //Eine Karte nachziehen
    function Karteziehen(): void {

        let neuezahl: number = getRandomInt(0, Karten.length);
        Handkarten.push(Karten[neuezahl]);
        writeHTML(Handkarten.length - 1);
        Karten.splice(neuezahl, 1);


    }

    //i übergeben den Stelle im neuen Array entspricht i

    function writeHTML(_neu: number) {
        let prodElement = document.createElement('div')
        let aufderhand: string = `<p class="${Handkarten[_neu].typ} id="${Handkarten[_neu].kartenReihenfolge}">${Handkarten[_neu].typ} ${Handkarten[_neu].wert}</p>`
        prodElement.innerHTML = aufderhand;
        document.getElementById("Handkarten").appendChild(prodElement);
               
    }


    //Sortieren
    function Kartensortieren(): void { //function Sortiertekartenanzeigen():void{//Hier fehlt noch die Funktion die die neuen Handkarten zurückgibt

        Handkarten.sort(Typvergleichen);
        document.getElementById("Handkarten").innerHTML = "";   //Hier wird die Anzeige der Handkarten geleert

        for (let p: number = 0; p < Handkarten.length; p++) {
            writeHTML(p);
        }
    }

    //Vergleichen ob gleich oder nicht
    function Typvergleichen(a: Karte, b: Karte): number {
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



    console.log(Handkarten);



    //Karten ablegen
    document.getElementById("Handkarten").addEventListener("click", Karteablegen);

    function Karteablegen(): void {

        
        let neueReihenfolge: HTMLElement = <HTMLElement>event.target;

        for (let j: number = 0; j < Handkarten.length; j++) {
            console.log(neueReihenfolge.getAttribute("id"));
            if (Number(neueReihenfolge.getAttribute("id")) == Handkarten[j].kartenReihenfolge) {
                Ablagestapel.push(Handkarten[j]);

                let prodElement = document.createElement('div');
                let aufderhand: string = `<p class="${Handkarten[j].typ}" id="${Handkarten[j].kartenReihenfolge}">${Handkarten[j].typ} ${Handkarten[j].wert}</p>`
                prodElement.innerHTML = aufderhand;
                document.getElementById("Ablagestapel").appendChild(prodElement);
                
                Handkarten.splice(j, 1);
                document.getElementById("Handkarten").innerHTML = "";
                for (let u: number = 0; u < Handkarten.length; u++) {
                    writeHTML(u);
                }
            }
        }

    }

    console.log(Ablagestapel)

















}