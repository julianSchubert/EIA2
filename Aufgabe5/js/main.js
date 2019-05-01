var Aufgabe5;
(function (Aufgabe5) {
    /*Aufgabe: Aufgabe5 Eisdealer re-loaded Name: Julian Schubert
    Matrikel:261168
    Datum: 17.04.19
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    In Zusammenarbeit mit Sina Haas, Bente Gossel und Katharina Schmitt*/
    document.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        anzeigen(Aufgabe5.data);
        let alleFieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("uebersicht").addEventListener("click", allesAusgefuellt);
        for (let i = 0; i < alleFieldsets.length; i++) {
            let fieldset = alleFieldsets[i];
            fieldset.addEventListener("change", Gesamtpreis);
            fieldset.addEventListener("change", TexteDazu);
        }
    }
    function anzeigen(_zuweisung) {
        for (let key in _zuweisung) { //for in 
            let value = Aufgabe5.data[key];
            neueFieldsets(key);
            for (let i = 0; i < value.length; i++) {
                WerteEinfuegen(value[i]);
            }
        }
    }
    let fieldset;
    function neueFieldsets(_key) {
        fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = _key;
        fieldset.appendChild(legend);
        document.getElementById("anhängen").appendChild(fieldset);
    }
    function WerteEinfuegen(_value) {
        let prodElement = document.createElement("input");
        let marker = document.createElement("label");
        prodElement.setAttribute("value", _value.value.toString());
        prodElement.setAttribute("text", _value.text);
        prodElement.setAttribute("type", _value.type);
        prodElement.setAttribute("name", _value.name);
        prodElement.setAttribute("id", _value.id);
        prodElement.setAttribute("price", _value.preis.toString());
        prodElement.setAttribute("min", _value.min);
        prodElement.setAttribute("max", _value.max);
        prodElement.setAttribute("step", _value.step);
        marker.innerText = _value.text;
        fieldset.appendChild(prodElement);
        fieldset.appendChild(marker);
    }
    function Gesamtpreis(_event) {
        let ziel = document.getElementsByTagName("input");
        let gesamt = 0;
        document.getElementById("Bestellung2").innerHTML = "";
        for (let i = 0; i < ziel.length; i++) {
            if (ziel[i].type == "number") {
                let preis = ziel[i].getAttribute("price");
                gesamt += Number(ziel[i].value) * Number(preis);
            }
            if (ziel[i].type == "checkbox" && ziel[i].checked == true) {
                let preis = ziel[i].getAttribute("price");
                gesamt += Number(preis);
            }
            if (ziel[i].type == "radio" && ziel[i].checked == true) {
                let preis = ziel[i].getAttribute("price");
                gesamt += Number(preis);
            }
        }
        let prodElement = document.createElement("div");
        document.getElementById("Bestellung2").appendChild(prodElement);
        let neues = `<p> Gesamtpreis ${gesamt} € </p>`;
        prodElement.innerHTML = neues;
    }
    function TexteDazu(_event) {
        let x = document.getElementsByTagName("input");
        document.getElementById("Bestellung").innerHTML = "";
        for (let j = 0; j < x.length; j++) { //durch alle input Elemente durch
            if (x[j].checked == true) {
                let neuesp = document.createElement("p");
                document.getElementById("Bestellung").appendChild(neuesp);
                let xy = x[j].getAttribute("text");
                neuesp.innerHTML = xy;
            }
            if (x[j].type == "number" && Number(x[j].value) > 0) {
                let neuesp = document.createElement("p");
                document.getElementById("Bestellung").appendChild(neuesp);
                let xy = x[j].getAttribute("text");
                neuesp.innerHTML = xy;
            }
        }
    }
    function allesAusgefuellt() {
        let lieferung = document.getElementById("abholen2");
        let adresse1 = document.getElementById("adresse");
        let hausnummer1 = document.getElementById("hausnummer");
        let p1 = document.getElementById("plz");
        let n1 = document.getElementById("name");
        let nn = document.getElementById("nachname");
        if (lieferung.checked == true) {
            let liefern = 0;
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
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main.js.map