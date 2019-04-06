
let endzahl: number

function handkartenanzahlauswählen(): number {

    let handkarten: string = prompt("Handkartenanzahl wählen", "1-5");

    endzahl = Number(handkarten); //stringtonumber

    return endzahl;
}


console.log(handkartenanzahlauswählen());


interface Karte {
    typ: string;
    wert: string;
}

let Karte1: Karte = {
    typ: "Herz",
    wert: "Sieben",
}

let Karte2: Karte = {
    typ: "Herz",
    wert: "Acht",
}

let Karte3: Karte = {
    typ: "Herz",
    wert: "Neun",
}

let Karte4: Karte = {
    typ: "Herz",
    wert: "Zehn",
}

let Karte5: Karte = {
    typ: "Herz",
    wert: "Bube",
}

let Karte6: Karte = {
    typ: "Herz",
    wert: "Dame",
}

let Karte7: Karte = {
    typ: "Herz",
    wert: "König",
}

let Karte8: Karte = {
    typ: "Herz",
    wert: "Ass",
}


let Karte9: Karte = {
    typ: "Karo",
    wert: "Sieben",
}

let Karte10: Karte = {
    typ: "Karo",
    wert: "Acht",
}

let Karte11: Karte = {
    typ: "Karo",
    wert: "Neun",
}

let Karte12: Karte = {
    typ: "Karo",
    wert: "Zehn",
}

let Karte13: Karte = {
    typ: "Karo",
    wert: "Bube",
}

let Karte14: Karte = {
    typ: "Karo",
    wert: "Dame",
}

let Karte15: Karte = {
    typ: "Karo",
    wert: "König",
}

let Karte16: Karte = {
    typ: "Karo",
    wert: "Ass",
}

let Karte17: Karte = {
    typ: "Pik",
    wert: "Sieben",
}

let Karte18: Karte = {
    typ: "Pik",
    wert: "Acht",
}

let Karte19: Karte = {
    typ: "Pik",
    wert: "Neun",
}

let Karte20: Karte = {
    typ: "Pik",
    wert: "Zehn",
}

let Karte21: Karte = {
    typ: "Pik",
    wert: "Bube",
}

let Karte22: Karte = {
    typ: "Pik",
    wert: "Dame",
}

let Karte23: Karte = {
    typ: "Pik",
    wert: "König",
}

let Karte24: Karte = {
    typ: "Pik",
    wert: "Ass",
}

let Karte25: Karte = {
    typ: "Kreuz",
    wert: "Sieben",
}

let Karte26: Karte = {
    typ: "Kreuz",
    wert: "Acht",
}

let Karte27: Karte = {
    typ: "Kreuz",
    wert: "Neun",
}

let Karte28: Karte = {
    typ: "Kreuz",
    wert: "Zehn",
}

let Karte29: Karte = {
    typ: "Kreuz",
    wert: "Bube",
}

let Karte30: Karte = {
    typ: "Kreuz",
    wert: "Dame",
}

let Karte31: Karte = {
    typ: "Kreuz",
    wert: "König",
}

let Karte32: Karte = {
    typ: "Kreuz",
    wert: "Ass",
}


let Karten: Karte[] = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14,
    Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27,
    Karte28, Karte29, Karte30, Karte31, Karte32]



function getRandomInt(min: number, max: number): number {
    min = Math.ceil(0);
    max = Math.floor(Karten.length);
    return Math.floor(Math.random() * (max - min)) + min;
}


function Handkartenzufällig(anzahlkarten: number, alleKarten: Karte[]) {
    for (let i = 0; i < anzahlkarten; i++) {
        let zahl: number = getRandomInt(0, Karten.length);

        let prodElement = document.createElement('div');
        let aufderhand: Karte = `<p>${Karten[zahl]}</p>`
        prodElement.innerHTML = aufderhand;
        document.getElementById("Handkarten").appendChild(prodElement);

    
        Handkarten.push(Karten[zahl]);
        Karten.splice(zahl, 1);

        console.log(alleKarten[zahl]);
    }

}


let Handkarten: Karte[] = []

Handkartenzufällig(endzahl, Karten)

console.log(Handkarten);



