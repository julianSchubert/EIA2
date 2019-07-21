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
        }
        else if (taste == 83) {
            spielerfisch.dy = 5;
        }
        else if (taste == 65) {
            spielerfisch.dx = -5;
        }
        else if (taste == 68) {
            spielerfisch.dx = 5;
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
    let punktzahl = 0;
    function fressen() {
        for (let i = 0; i < endtask.allesInBewegungArray.length; i++) {
            let k = endtask.allesInBewegungArray[i];
            if (spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y) { //geht sicher eleganter aber läuft
                //|| spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x + 5 && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x + 5 && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y + 5  && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y + 5) {
                if (spielerfisch.groesse >= k.groesse) {
                    console.log("Erfolg");
                    if (k.typ == 1) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse += 0.1;
                        punktzahl += 1;
                        return punktzahl;
                    }
                    else if (k.typ == 2) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse += 1;
                        punktzahl += 10;
                        return punktzahl;
                    }
                    else if (k.typ == 3) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse += 1.5;
                        punktzahl += 15;
                        return punktzahl;
                    }
                    else if (k.typ == 4) {
                        endtask.allesInBewegungArray.splice(i, 1);
                        spielerfisch.groesse += 0.5;
                        punktzahl += 5;
                        return punktzahl;
                    }
                }
                else if (spielerfisch.groesse < k.groesse) {
                    console.log("Loser");
                    return punktzahl;
                }
                return punktzahl;
            }
        }
        return punktzahl;
    }
    endtask.fressen = fressen;
    function punktzahlEintragen(_punktzahl) {
        console.log("Geht es?");
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
})(endtask || (endtask = {}));
// if (spielerfisch.): void {
//
//}
//spielerfisch.x + 3.5 * spielerfisch.groesse, spielerfisch.y + 0.35 * spielerfisch.groesse, spielerfisch.groesse, 1.5 * spielerfisch.groesse
// function hitTestPoint(x1, y1, w1, h1, x2, y2) {
//     //x1, y1 = x and y coordinates of object 1
//     //w1, h1 = width and height of object 1
//     //x2, y2 = x and y coordinates of object 2 (usually midpt)
//     if ((x1 <= x2 && x1 + w1 >= x2) &&
//         (y1 <= y2 && y1 + h1 >= y2))
//         return true;
//     else
//         return false;
// }
//Punktzahlberechnung und Eintragung
// let punktzahl: number = 0;
// export function punktzahlBerechnen(_typ: number): number {
//     let fischtyp: number = _typ;
//     //Hier die if abfrage nach dem Typ
//     if (fischtyp == 1) {
//         punktzahl += 15;
//     }
//     else if (fischtyp == 2) {
//         punktzahl += 30;
//     }
//     else if (fischtyp == 3) {
//         punktzahl += 4;
//     }
//     console.log(punktzahl);
//     return punktzahl;
// }
//# sourceMappingURL=main.js.map