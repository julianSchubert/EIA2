var endtask;
(function (endtask) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    endtask.allesInBewegungArray = [];
    let fps = 30;
    let imageData;
    function init() {
        document.addEventListener("keydown", this.movespecial);
        canvas = document.getElementsByTagName("canvas")[0];
        endtask.crc = canvas.getContext("2d");
        zeichneHintergrund();
        canvas.addEventListener("click", endtask.füttern);
        imageData = endtask.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 20; i++) {
            let blase = new endtask.AllesInBewegung(Math.random());
            endtask.allesInBewegungArray.push(blase);
        }
        for (let i = 0; i < 5; i++) {
            let fisch = new endtask.Fisch();
            endtask.allesInBewegungArray.push(fisch);
        }
        for (let i = 0; i < 8; i++) {
            let fisch = new endtask.OrangerFisch();
            endtask.allesInBewegungArray.push(fisch);
        }
        let spielerfisch = new endtask.SpielerFisch();
        endtask.allesInBewegungArray.push(spielerfisch);
        update();
    }
    //Die Stelle des gefressenen kommt von einer Funktion außerhalb Wird übergeben.
    function update() {
        window.setTimeout(update, 1000 / fps);
        endtask.crc.clearRect(0, 0, canvas.width, canvas.height);
        endtask.crc.putImageData(imageData, 0, 0);
        // punktzahlEintragen(punktzahlBerechnen(test())); //Hier muss der Typ der Klasse die gefressen wurde mittels ...[i].typ übergebenwerden
        //für die Stelle im Array sollte die gefressener Fisch Stelle übergeben werden allesInBewegungArray[test()].typ)
        for (let i = 0; i < endtask.allesInBewegungArray.length; i++) {
            endtask.allesInBewegungArray[i].update();
        }
    }
    function zeichneHintergrund() {
        //boden
        endtask.crc.fillStyle = "olive";
        endtask.crc.fillRect(0, 500, 800, 100);
        //wasser
        endtask.crc.fillStyle = "teal";
        endtask.crc.fillRect(0, 0, 800, 500);
        //kies
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 700;
            let y = 500 + Math.random() * 55;
            let kies = new Path2D();
            kies.arc(x, y, 5, 1 * Math.PI, 2 * Math.PI);
            kies.closePath();
            endtask.crc.fillStyle = "gray";
            endtask.crc.strokeStyle = "gray";
            endtask.crc.fill(kies);
            endtask.crc.stroke(kies);
        }
        //seegras
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * 650;
            let y = 500 + Math.random() * 50;
            let seegras = new Path2D();
            seegras.moveTo(x, y);
            seegras.bezierCurveTo(x + 5, y - 15, x - 5, y - 20, x + 15, y - 70);
            seegras.bezierCurveTo(x, y - 20, x + 10, y - 15, x + 8, y);
            seegras.closePath();
            endtask.crc.fillStyle = "limegreen";
            endtask.crc.strokeStyle = "darkgreen";
            endtask.crc.fill(seegras);
            endtask.crc.stroke(seegras);
        }
        //kiste
        for (let i = 0; i < 1; i++) {
            let kiste = new Path2D();
            let x = 550;
            let y = 500;
            kiste.rect(x, y, 100, 75);
            kiste.moveTo(x, y + 25);
            kiste.lineTo(x + 100, y + 25);
            kiste.moveTo(x, y + 50);
            kiste.lineTo(x + 100, y + 50);
            endtask.crc.fillStyle = "sienna";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(kiste);
            endtask.crc.stroke(kiste);
            //deckel
            let deckel = new Path2D();
            deckel.moveTo(x, y);
            deckel.lineTo(x + 50, y - 30);
            deckel.lineTo(x + 150, y - 30);
            deckel.lineTo(x + 100, y);
            deckel.closePath();
            endtask.crc.fill(deckel);
            endtask.crc.stroke(deckel);
            //innenleben
            let füllung = new Path2D();
            füllung.moveTo(x + 10, y);
            füllung.lineTo(x + 50, y - 25);
            füllung.lineTo(x + 130, y - 25);
            füllung.lineTo(x + 90, y);
            füllung.closePath();
            endtask.crc.fillStyle = "black";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(füllung);
            endtask.crc.stroke(füllung);
            //seite
            let seite = new Path2D();
            seite.moveTo(x + 100, y + 75);
            seite.lineTo(x + 150, y + 45);
            seite.lineTo(x + 150, y - 30);
            seite.lineTo(x + 100, y);
            seite.closePath();
            endtask.crc.fillStyle = "sienna";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(seite);
            endtask.crc.stroke(seite);
            //holz
            let linien = new Path2D();
            linien.moveTo(x + 100, y + 50);
            linien.lineTo(x + 150, y + 20);
            linien.moveTo(x + 150, y - 5);
            linien.lineTo(x + 100, y + 25);
            endtask.crc.stroke(linien);
            //klappe
            let klappe = new Path2D();
            klappe.moveTo(x + 50, y - 30);
            klappe.lineTo(x + 70, y - 110);
            klappe.lineTo(x + 170, y - 110);
            klappe.lineTo(x + 150, y - 30);
            klappe.closePath();
            endtask.crc.fillStyle = "sienna";
            endtask.crc.fill(klappe);
            endtask.crc.stroke(klappe);
        }
    }
})(endtask || (endtask = {}));
//# sourceMappingURL=canvas.js.map