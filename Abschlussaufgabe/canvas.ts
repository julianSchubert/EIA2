namespace endtask {
    document.addEventListener("DOMContentLoaded", init);
    let canvas: HTMLCanvasElement;
    export let crc: CanvasRenderingContext2D;
    export let allesInBewegungArray: AllesInBewegung[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        document.addEventListener("keydown", this.movespecial);
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        zeichneHintergrund();
        canvas.addEventListener("click", füttern);
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 20; i++) {
            let blase: AllesInBewegung = new AllesInBewegung(Math.random());
            allesInBewegungArray.push(blase);
        }
        for (let i: number = 0; i < 5; i++) {
            let fisch: Fisch = new Fisch();
            allesInBewegungArray.push(fisch);
        }
        for (let i: number = 0; i < 8; i++) {
            let fisch: OrangerFisch = new OrangerFisch();
            allesInBewegungArray.push(fisch);
        }
        let spielerfisch: SpielerFisch = new SpielerFisch();
        allesInBewegungArray.push(spielerfisch);
        update();

    }

    //Die Stelle des gefressenen kommt von einer Funktion außerhalb Wird übergeben.
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

       // punktzahlEintragen(punktzahlBerechnen(test())); //Hier muss der Typ der Klasse die gefressen wurde mittels ...[i].typ übergebenwerden
        //für die Stelle im Array sollte die gefressener Fisch Stelle übergeben werden allesInBewegungArray[test()].typ)
        for (let i: number = 0; i < allesInBewegungArray.length; i++) {
            allesInBewegungArray[i].update();
        }
    }

    function zeichneHintergrund(): void {
        //boden
        crc.fillStyle = "olive";
        crc.fillRect(0, 500, 800, 100);
        //wasser
        crc.fillStyle = "teal";
        crc.fillRect(0, 0, 800, 500);
        //kies
        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * 700;
            let y: number = 500 + Math.random() * 55;
            let kies: Path2D = new Path2D();
            kies.arc(x, y, 5, 1 * Math.PI, 2 * Math.PI);
            kies.closePath();
            crc.fillStyle = "gray";
            crc.strokeStyle = "gray";
            crc.fill(kies);
            crc.stroke(kies);
        }
        //seegras
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * 650;
            let y: number = 500 + Math.random() * 50;
            let seegras: Path2D = new Path2D();
            seegras.moveTo(x, y);
            seegras.bezierCurveTo(x + 5, y - 15, x - 5, y - 20, x + 15, y - 70);
            seegras.bezierCurveTo(x, y - 20, x + 10, y - 15, x + 8, y);
            seegras.closePath();
            crc.fillStyle = "limegreen";
            crc.strokeStyle = "darkgreen";
            crc.fill(seegras);
            crc.stroke(seegras);
        }
        //kiste
        for (let i: number = 0; i < 1; i++) {
            let kiste: Path2D = new Path2D();
            let x: number = 550;
            let y: number = 500;
            kiste.rect(x, y, 100, 75);
            kiste.moveTo(x, y + 25);
            kiste.lineTo(x + 100, y + 25);
            kiste.moveTo(x, y + 50);
            kiste.lineTo(x + 100, y + 50);
            crc.fillStyle = "sienna";
            crc.strokeStyle = "black";
            crc.fill(kiste);
            crc.stroke(kiste);
            //deckel
            let deckel: Path2D = new Path2D();
            deckel.moveTo(x, y);
            deckel.lineTo(x + 50, y - 30);
            deckel.lineTo(x + 150, y - 30);
            deckel.lineTo(x + 100, y);
            deckel.closePath();
            crc.fill(deckel);
            crc.stroke(deckel);
            //innenleben
            let füllung: Path2D = new Path2D();
            füllung.moveTo(x + 10, y);
            füllung.lineTo(x + 50, y - 25);
            füllung.lineTo(x + 130, y - 25);
            füllung.lineTo(x + 90, y);
            füllung.closePath();
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill(füllung);
            crc.stroke(füllung);
            //seite
            let seite: Path2D = new Path2D();
            seite.moveTo(x + 100, y + 75);
            seite.lineTo(x + 150, y + 45);
            seite.lineTo(x + 150, y - 30);
            seite.lineTo(x + 100, y);
            seite.closePath();
            crc.fillStyle = "sienna";
            crc.strokeStyle = "black";
            crc.fill(seite);
            crc.stroke(seite);
            //holz
            let linien: Path2D = new Path2D();
            linien.moveTo(x + 100, y + 50);
            linien.lineTo(x + 150, y + 20);
            linien.moveTo(x + 150, y - 5);
            linien.lineTo(x + 100, y + 25);
            crc.stroke(linien);
            //klappe
            let klappe: Path2D = new Path2D();
            klappe.moveTo(x + 50, y - 30);
            klappe.lineTo(x + 70, y - 110);
            klappe.lineTo(x + 170, y - 110);
            klappe.lineTo(x + 150, y - 30);
            klappe.closePath();
            crc.fillStyle = "sienna";
            crc.fill(klappe);
            crc.stroke(klappe);
        }
    }
}
