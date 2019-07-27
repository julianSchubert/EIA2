var endtask;
(function (endtask) {
    function füttern(_event) {
        console.log("Hallo");
        let positionx = _event.clientX;
        let positiony = _event.clientY;
        for (let i = 0; i < 5; i++) {
            let futter = new endtask.Futter(positionx, positiony);
            endtask.allesInBewegungArray.push(futter);
        }
    }
    endtask.füttern = füttern;
    let anfrage = true;
    let spielerfisch = new endtask.SpielerFisch();
    endtask.allesInBewegungArray.push(spielerfisch);
    //Der Fisch wird von den anderen Fischen verdeckt, wann
    //die Instanz erstellt wurde ist relevant
    //Die Geschwindigkeit muss evt.noch angepasst werden
    //Kann der Fisch rückwärts schwimmen oder lasse ich a weg?
    function fischbewegen(_event) {
        console.log("Check");
        let taste = _event.keyCode;
        if (taste == 87) {
            spielerfisch.dy = -5;
            if (endtask.punktzahl > 1000) {
                spielerfisch.dy = -7;
            }
        }
        else if (taste == 83) {
            spielerfisch.dy = 5;
            if (endtask.punktzahl > 1000) {
                spielerfisch.dy = +7;
            }
        }
        else if (taste == 65) {
            spielerfisch.dx = -5;
            if (endtask.punktzahl > 1000) {
                spielerfisch.dx = -7;
            }
        }
        else if (taste == 68) {
            spielerfisch.dx = 5;
            if (endtask.punktzahl > 1000) {
                spielerfisch.dx = 7;
            }
        }
    }
    endtask.fischbewegen = fischbewegen;
    function fischstoppen(_event) {
        let taste = _event.keyCode;
        if (taste == 87) {
            spielerfisch.dy = 0;
        }
        else if (taste == 83) {
            spielerfisch.dy = 0;
        }
        else if (taste == 65) {
            spielerfisch.dx = 0;
        }
        else if (taste == 68) {
            spielerfisch.dx = 0;
        }
    }
    endtask.fischstoppen = fischstoppen;
    function fressen() {
        for (let i = 0; i < endtask.allesInBewegungArray.length; i++) {
            let k = endtask.allesInBewegungArray[i];
            if (spielerfisch.x + 30 > k.x && spielerfisch.x - 10 - 0.25 * spielerfisch.groesse < k.x && spielerfisch.y - 15 - 0.25 * spielerfisch.groesse < k.y && spielerfisch.y + 15 + 0.25 * spielerfisch.groesse > k.y && endtask.allesInBewegungArray[i] != spielerfisch) {
                //geht sicher eleganter aber läuft 
                // läuft mit spielerfisch spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y 
                //spielerfisch.x + 2 * spielerfisch.groesse <= k.x && spielerfisch.x + 2 * spielerfisch.groesse + spielerfisch.groesse >= k.x && spielerfisch.y + 2 * spielerfisch.groesse <= k.y && spielerfisch.y + 2 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y 
                console.log(spielerfisch.x);
                //|| spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x + 5 && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x + 5 && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y + 5  && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y + 5) {
                if (spielerfisch.groesse >= k.groesse) {
                    console.log("Erfolg");
                    if (k.typ == 1) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        let fisch = new endtask.PinkerFisch();
                        endtask.allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 0;
                        endtask.punktzahl += 2;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 2) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        let fisch = new endtask.Fisch2();
                        endtask.allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 1;
                        endtask.punktzahl += 10;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 3) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        let fisch = new endtask.Fisch();
                        endtask.allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 0.25;
                        endtask.punktzahl += 15;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 4) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        let blase = new endtask.AllesInBewegung(Math.random());
                        endtask.allesInBewegungArray.push(blase);
                        spielerfisch.groesse += 0.5;
                        endtask.punktzahl += 1;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 5) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        let ufo = new endtask.Ufo();
                        endtask.allesInBewegungArray.push(ufo);
                        spielerfisch.groesse += 3;
                        endtask.punktzahl += 50;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 6) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse += 0.5;
                        endtask.punktzahl += 7;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 7) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse -= 2;
                        endtask.punktzahl -= 2;
                        return endtask.punktzahl;
                    }
                    else if (k.typ == 8) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        for (let i = 0; i < 2; i++) {
                            let spacy = new endtask.SpaceFisch();
                            endtask.allesInBewegungArray.push(spacy);
                        }
                        spielerfisch.groesse -= 20;
                        endtask.punktzahl += 100;
                        return endtask.punktzahl;
                    }
                }
                else if (spielerfisch.groesse < k.groesse) {
                    endtask.beenden();
                    duBistEinLoser();
                    return endtask.punktzahl;
                }
                return endtask.punktzahl;
            }
        }
        return endtask.punktzahl;
    }
    endtask.fressen = fressen;
    function punktzahlEintragen(_punktzahl) {
        let element = document.getElementsByTagName("canvas")[0];
        if (element.getContext) {
            let crc = element.getContext("2d");
            let aktuellePunktzahl = "Punktzahl: " + String(_punktzahl);
            crc.clearRect(0, 0, element.width - 800, element.height - 600);
            crc.fillStyle = "white";
            crc.strokeStyle = "white";
            crc.lineWidth = 1;
            crc.font = "15px Arial";
            crc.textAlign = "center";
            crc.textBaseline = "middle";
            crc.fillText(aktuellePunktzahl, element.width - 400, element.height - 590);
            crc.strokeText(aktuellePunktzahl, element.width - 400, element.height - 590);
        }
    }
    endtask.punktzahlEintragen = punktzahlEintragen;
    function duBistEinLoser() {
        if (anfrage == true) {
            endtask.beenden();
            let punkte = String(endtask.punktzahl);
            endtask.spielername = prompt("Punktzahl:" + punkte, "Wie ist dein Name Kadett");
            endtask.insert();
            anfrage = false;
        }
    }
})(endtask || (endtask = {}));
//# sourceMappingURL=main.js.map