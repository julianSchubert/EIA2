namespace Aufgabe5 {
    /*Aufgabe: Aufgabe5 Eisdealer re-loaded Name: Julian Schubert
    Matrikel:261168
    Datum: 17.04.19 
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    In Zusammenarbeit mit Sina Haas, Bente Gossel und Katharina Schmitt*/
        
    document.addEventListener("DOMContentLoaded", init);


    function init(_event: Event): void {
        anzeigen(data);
        let alleFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("uebersicht").addEventListener("click", allesAusgefuellt);
        for (let i: number = 0; i < alleFieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = alleFieldsets[i];
            fieldset.addEventListener("change", Gesamtpreis);
            fieldset.addEventListener("change", TexteDazu);

        }
    }

    function anzeigen(_zuweisung: Zuweisung): void {

        for (let key in _zuweisung) {//for in 
            let value: WasEinEisBraucht[] = data[key];
            neueFieldsets(key);
            for (let i: number = 0; i < value.length; i++) {

                WerteEinfuegen(value[i]);
            }
        }
    }


    let fieldset: HTMLFieldSetElement;

    function neueFieldsets(_key: string): void {
        fieldset = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = _key;

        fieldset.appendChild(legend);
        document.getElementById("anhängen").appendChild(fieldset);

    }

    function WerteEinfuegen(_value: WasEinEisBraucht): void {

        let prodElement: HTMLInputElement = document.createElement("input");
        let marker: HTMLLabelElement = document.createElement("label");
        prodElement.setAttribute("value", _value.value);
        prodElement.setAttribute("type", _value.type);
        prodElement.setAttribute("name", _value.name);
        prodElement.setAttribute("id", _value.id);
        prodElement.setAttribute("price", _value.preis.toString());
        prodElement.setAttribute("min", _value.min);
        prodElement.setAttribute("max", _value.max);
        prodElement.setAttribute("step", _value.step);

        marker.innerText = _value.value;
        fieldset.appendChild(prodElement);
        fieldset.appendChild(marker);
    }


    let gesamt: number = 0;

    function Gesamtpreis(_event: Event): void {
        let ziel: HTMLInputElement = <HTMLInputElement>_event.target;
        document.getElementById("Bestellung2").innerHTML = "";
        if (ziel.checked == true || ziel.stepUp) {//stepUp
            let preis: string = ziel.getAttribute("price");
            gesamt += Number(preis);
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("Bestellung2").appendChild(prodElement);
            let neues: string = `<p> Gesamtpreis ${gesamt} € </p>`;

            prodElement.innerHTML = neues;
        }
        else if (ziel.checked == false || ziel.stepDown) {
            let preis: string = ziel.getAttribute("price");
            gesamt -= Number(preis);
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("Bestellung2").appendChild(prodElement);
            let neues: string = `<p> Gesamtpreis ${gesamt} € </p>`;

            prodElement.innerHTML = neues;
        }
    }


    function TexteDazu(_event: Event): void {
        let x: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("Bestellung").innerHTML = "";
        for (let j: number = 0; j < x.length; j++) {       //durch alle input Elemente durch
            if (x[j].checked == true) {
                let neuesp: HTMLParagraphElement = document.createElement("p");
                document.getElementById("Bestellung").appendChild(neuesp);
                neuesp.innerHTML = x[j].value;
            }
        }

    }

    function allesAusgefuellt(): void {

        let lieferung: HTMLInputElement = <HTMLInputElement>document.getElementById("abholen2");
        let adresse1: HTMLInputElement = <HTMLInputElement>document.getElementById("adresse");
        let hausnummer1: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let p1: HTMLInputElement = <HTMLInputElement>document.getElementById("plz");
        let n1: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let nn: HTMLInputElement = <HTMLInputElement>document.getElementById("nachname");
        if (lieferung.checked == true) {
            let liefern: number = 0;
            liefern = 1;
            if (adresse1.value == "" || hausnummer1.value == "" || p1.value == "" || n1.value == "" || nn.value == "" || liefern == 0) {
                document.getElementById("Bestellung").innerHTML += " Es fehlt noch eine Adresseingabe oder ein Name";
            }
            else {
                document.getElementById("Bestellung").innerHTML += " Alles ausgefüllt. Nen Guten!";
            }
        }

        else {
            if (n1.value == "" || nn.value == "") {

                document.getElementById("Bestellung").innerHTML += "Bitte noch einen Namen angeben";
            }
            else {
                document.getElementById("Bestellung").innerHTML += " Alles ausgefüllt. Nen Guten!";
            }
        }
    }
}

