namespace Aufgabe4 {
    /*Aufgabe: Aufgabe4 Eisdealer Name: Julian Schubert
    Matrikel:261168
    Datum: 17.04.19 
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    In Zusammenarbeit mit Sina Haas, Bente Gossel, Katharina Schmitt und mit Hilfe von Lucas Rohrberg.*/


    document.getElementById("uebersicht").addEventListener("click", allesAusgefuellt);

    window.addEventListener("load", init);

    function init(_event: Event): void {

        let alleFieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < alleFieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = alleFieldsets[i];
            fieldset.addEventListener("change", Gesamtpreis);
            fieldset.addEventListener("change", TexteDazu);
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


    function TexteDazu(_event: Event): void {

        let ziel: HTMLInputElement = <HTMLInputElement>_event.target; //casten du bist das, ich bin mir sicher

        if (ziel.checked == true) {
            let prodElement: HTMLParagraphElement = document.createElement("p");
            document.getElementById("Bestellung").appendChild(prodElement);
            prodElement.innerHTML = ziel.value;
            prodElement.id = ziel.id;
        }
        else if (ziel.checked == false) {
            let elternelement: HTMLDivElement = <HTMLDivElement>document.getElementById("Bestellung");
            for (let i: number = 0; i < elternelement.children.length; i++) {  //alle Kinder des divs werden in der Schleife durchlaufen
                if (ziel.id == elternelement.children[i].id) {                 //Ids abgleichen von den p Kindern mit dem erstellten p und dessen Id
                    elternelement.removeChild(elternelement.children[i]);
                }
            }
        }
    }

    let gesamt: number = 0;

    function Gesamtpreis(_event: Event): void {
        let ziel: HTMLInputElement = <HTMLInputElement>_event.target;
        document.getElementById("Bestellung2").innerHTML = "";
        if (ziel.checked == true) {
            let preis: string = ziel.getAttribute("price");
            gesamt += Number(preis);
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("Bestellung2").appendChild(prodElement);
            let neues: string = `<p> Gesamtpreis ${gesamt} € </p>`;

            prodElement.innerHTML = neues;
        }
        else if (ziel.checked == false) {
            let preis: string = ziel.getAttribute("price");
            gesamt -= Number(preis);
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("Bestellung2").appendChild(prodElement);
            let neues: string = `<p> Gesamtpreis ${gesamt} € </p>`;

            prodElement.innerHTML = neues;
        }
    }
}
