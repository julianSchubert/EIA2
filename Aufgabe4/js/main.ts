namespace Aufgabe4 {
/*Aufgabe: Aufgabe4 Eisdealer Name: Julian Schubert
Matrikel:261168
Datum: 17.04.19 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


interface Eissorte {
    name: string;
    preis: number;
}

let vanille: Eissorte = {
    name: "Vanille",
    preis: 1.1
};

let schokolade: Eissorte = {
    name: "Schokolade",
    preis: 1.1,
}

let nuss: Eissorte = {
    name: "Nuss",
    preis: 1.1
}

let erdbeere: Eissorte = {
    name: "Erdbeere",
    preis: 1.1
}


interface Zusatz {
    topping: string;
    preis2: number;
}

let sahne: Zusatz = {
    topping: "Sahne",
    preis2: 0.5
}

let streusel: Zusatz = {
    topping: "Streusel",
    preis2: 0.5
}

let soße: Zusatz = {
    topping: "Soße",
    preis2: 0.5
};

let eissorten: Eissorte[] = [vanille, schokolade, nuss, erdbeere]

let zusätze: Zusatz[] = [sahne, streusel, soße]

let warenkorb: Eissorte[] = [];
}


