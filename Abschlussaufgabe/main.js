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
    //Punktzahlberechnung und Eintragung
    function punktzahlBerechnen(_typ) {
        let punktzahl = 0;
        let fischtyp = _typ;
        //Hier die if abfrage nach dem Typ
        if (fischtyp == 1) {
            punktzahl += 15;
        }
        else if (fischtyp == 2) {
            punktzahl += 30;
        }
        else if (fischtyp == 3) {
            punktzahl += 4;
        }
        console.log(punktzahl);
        return punktzahl;
    }
    endtask.punktzahlBerechnen = punktzahlBerechnen;
    function punktzahlEintragen(_punktzahl) {
        console.log("Geht es?");
        let element = document.getElementsByTagName("canvas")[0];
        if (element.getContext) {
            let crc = element.getContext("2d");
            let aktuellePunktzahl = "Punktzahl: " + String(_punktzahl);
            crc.clearRect(0, 0, element.width - 800, element.height - 600);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.lineWidth = 2;
            crc.font = "15px Arial";
            crc.textAlign = "center";
            crc.textBaseline = "middle";
            crc.fillText(aktuellePunktzahl, element.width - 400, element.height - 590);
            //crc.strokeText(aktuellePunktzahl, element.width - 400, element.height - 590);
        }
    }
    endtask.punktzahlEintragen = punktzahlEintragen;
})(endtask || (endtask = {}));
//# sourceMappingURL=main.js.map