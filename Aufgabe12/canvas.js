var task12;
(function (task12) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    task12.allesInBewegungArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        task12.crc = canvas.getContext("2d");
        zeichneHintergrund();
        canvas.addEventListener("click", task12.füttern);
        imageData = task12.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 20; i++) {
            let blase = new task12.AllesInBewegung(Math.random());
            task12.allesInBewegungArray.push(blase);
        }
        for (let i = 0; i < 5; i++) {
            let fisch = new task12.Fisch();
            task12.allesInBewegungArray.push(fisch);
        }
        for (let i = 0; i < 8; i++) {
            let fisch = new task12.OrangerFisch();
            task12.allesInBewegungArray.push(fisch);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task12.crc.clearRect(0, 0, canvas.width, canvas.height);
        task12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < task12.allesInBewegungArray.length; i++) {
            task12.allesInBewegungArray[i].update();
        }
    }
    function zeichneHintergrund() {
        //boden
        task12.crc.fillStyle = "olive";
        task12.crc.fillRect(0, 500, 800, 100);
        //wasser
        task12.crc.fillStyle = "teal";
        task12.crc.fillRect(0, 0, 800, 500);
        //kies
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 700;
            let y = 500 + Math.random() * 55;
            let kies = new Path2D();
            kies.arc(x, y, 5, 1 * Math.PI, 2 * Math.PI);
            kies.closePath();
            task12.crc.fillStyle = "gray";
            task12.crc.strokeStyle = "gray";
            task12.crc.fill(kies);
            task12.crc.stroke(kies);
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
            task12.crc.fillStyle = "limegreen";
            task12.crc.strokeStyle = "darkgreen";
            task12.crc.fill(seegras);
            task12.crc.stroke(seegras);
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
            task12.crc.fillStyle = "sienna";
            task12.crc.strokeStyle = "black";
            task12.crc.fill(kiste);
            task12.crc.stroke(kiste);
            //deckel
            let deckel = new Path2D();
            deckel.moveTo(x, y);
            deckel.lineTo(x + 50, y - 30);
            deckel.lineTo(x + 150, y - 30);
            deckel.lineTo(x + 100, y);
            deckel.closePath();
            task12.crc.fill(deckel);
            task12.crc.stroke(deckel);
            //innenleben
            let füllung = new Path2D();
            füllung.moveTo(x + 10, y);
            füllung.lineTo(x + 50, y - 25);
            füllung.lineTo(x + 130, y - 25);
            füllung.lineTo(x + 90, y);
            füllung.closePath();
            task12.crc.fillStyle = "black";
            task12.crc.strokeStyle = "black";
            task12.crc.fill(füllung);
            task12.crc.stroke(füllung);
            //seite
            let seite = new Path2D();
            seite.moveTo(x + 100, y + 75);
            seite.lineTo(x + 150, y + 45);
            seite.lineTo(x + 150, y - 30);
            seite.lineTo(x + 100, y);
            seite.closePath();
            task12.crc.fillStyle = "sienna";
            task12.crc.strokeStyle = "black";
            task12.crc.fill(seite);
            task12.crc.stroke(seite);
            //holz
            let linien = new Path2D();
            linien.moveTo(x + 100, y + 50);
            linien.lineTo(x + 150, y + 20);
            linien.moveTo(x + 150, y - 5);
            linien.lineTo(x + 100, y + 25);
            task12.crc.stroke(linien);
            //klappe
            let klappe = new Path2D();
            klappe.moveTo(x + 50, y - 30);
            klappe.lineTo(x + 70, y - 110);
            klappe.lineTo(x + 170, y - 110);
            klappe.lineTo(x + 150, y - 30);
            klappe.closePath();
            task12.crc.fillStyle = "sienna";
            task12.crc.fill(klappe);
            task12.crc.stroke(klappe);
        }
    }
})(task12 || (task12 = {}));
//Aus der init rausgeholt
//Fisch
// for (let i: number = 0; i < 5; i++) {
//     let x: number = Math.random() * 650;
//     let y: number = Math.random() * 500;
//     let dx: number = Math.random() * 7;
//     let dy: number = Math.random() * 1.8;
//     let fisch: Fisch;
//     fisch = new Fisch();
//     fisch.x = x;
//     fisch.y = y;
//     fisch.dx = dx;
//     fisch.dy = dy;
//     fischArray.push(fisch);
//     fisch.draw();
// }
// update();
// //Blubberblasen
// for (let i: number = 0; i < 20; i++) {
//     let x: number = 630;
//     let y: number = 480;
//     let dx: number = Math.random() * 1.5;
//     let dy: number = Math.random() * -10;
//     let blase: Blubb;
//     blase = new Blubb();
//     blase.x = x;
//     blase.y = y;
//     blase.dx = dx;
//     blase.dy = dy;
//     blasenArray.push(blase);
//     blase.draw();
// }
// update();
// //2ter Fisch
// for (let i: number = 0; i < 6; i++) {
//     let x: number = Math.random() * 650;
//     let y: number = Math.random() * 500;
//     let dx: number = Math.random() * -5;
//     let dy: number = Math.random() * -1;
//     let orangerfisch: OrangerFisch;
//     orangerfisch = new OrangerFisch();
//     orangerfisch.x = x;
//     orangerfisch.y = y;
//     orangerfisch.dx = dx;
//     orangerfisch.dy = dy;
//     nochEinFischArray.push(orangerfisch);
//     orangerfisch.draw();
// }
//# sourceMappingURL=canvas.js.map