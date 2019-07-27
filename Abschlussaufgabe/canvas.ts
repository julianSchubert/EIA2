namespace endtask {
    document.addEventListener("DOMContentLoaded", missionStart);
    let canvas: HTMLCanvasElement;
    export let crc: CanvasRenderingContext2D;
    export let allesInBewegungArray: AllesInBewegung[] = [];
    export let spielername: string;
    export let punktzahl: number = 0;
    let fps: number = 30;
    let imageData: ImageData;
    let fame: number;


    function missionStart(): void {
        document.addEventListener("keydown", init);
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        zeichneHintergrund();
    }

    function init(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            canvas.addEventListener("click", füttern);
            document.addEventListener("keydown", fischbewegen);
            document.addEventListener("keyup", fischstoppen);

            imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
            for (let i: number = 0; i < 20; i++) {
                let blase: AllesInBewegung = new AllesInBewegung(Math.random());
                allesInBewegungArray.push(blase);
            }
            for (let i: number = 0; i < 1; i++) {
                let spacefisch: SpaceFisch = new SpaceFisch();
                allesInBewegungArray.push(spacefisch);
            }
            for (let i: number = 0; i < 1; i++) {
                let boeserfisch: Ufo = new BoeserFisch();
                allesInBewegungArray.push(boeserfisch);
            }
            for (let i: number = 0; i < 5; i++) {
                let fisch: Fisch = new Fisch();
                allesInBewegungArray.push(fisch);
            }
            for (let i: number = 0; i < 4; i++) {
                let fisch: Fisch2 = new Fisch2();
                allesInBewegungArray.push(fisch);
            }
            for (let i: number = 0; i < 4; i++) {
                let fisch: Fisch = new PinkerFisch();
                allesInBewegungArray.push(fisch);
            }
            update();
            refresh();
        }
    }

    //Die Stelle des gefressenen kommt von einer Funktion außerhalb Wird übergeben.
    function update(): void {
        starten();
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        fressen();
        punktzahlEintragen(fressen()); //Hier muss die aktuelle Punktzahl als Zahl übergeben werden damit es jedes mal neu zeichnet
        for (let i: number = 0; i < allesInBewegungArray.length; i++) {
            allesInBewegungArray[i].update();
        }
    }


    function zeichneHintergrund(): void {
        //boden
        crc.fillStyle = "ivory";
        crc.fillRect(0, 500, 800, 100);
        //wasser
        crc.fillStyle = "navy";
        crc.fillRect(0, 0, 800, 500);
        //Krater
        for (let i: number = 0; i < 6; i++) {
            let x: number = Math.random() * 700;
            let y: number = 500 + Math.random() * 55;
            let unterteil: Path2D = new Path2D();
            unterteil.moveTo(x - 20, y - 10);
            unterteil.quadraticCurveTo(x - 30, y - 1, x - 40, y);
            unterteil.quadraticCurveTo(x, y + 10, x + 40, y);
            unterteil.quadraticCurveTo(x + 30, y - 1, x + 20, y - 10);
            crc.fillStyle = "darkslategray";
            crc.strokeStyle = "black";
            crc.fill(unterteil);
            crc.stroke(unterteil);
            let krater: Path2D = new Path2D();
            krater.moveTo(x - 20, y - 10);
            krater.quadraticCurveTo(x, y - 3, x + 20, y - 10);
            krater.moveTo(x - 20, y - 10);
            krater.quadraticCurveTo(x, y - 17, x + 20, y - 10);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill(krater);
            crc.stroke(krater);
        }
        //sterne
        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * 700;
            let y: number = Math.random() * 490;
            let kies: Path2D = new Path2D();
            kies.arc(x, y, 5, 0, 2 * Math.PI);
            kies.closePath();
            crc.fillStyle = "#f4d705";
            crc.strokeStyle = "#f4d705";
            crc.fill(kies);
            crc.stroke(kies);
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
            crc.fillStyle = "steelblue";
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
            crc.fillStyle = "steelblue";
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
            crc.fillStyle = "steelblue";
            crc.strokeStyle = "black";
            crc.fill(klappe);
            crc.stroke(klappe);
        }
        //seegras
        for (let i: number = 0; i < 8; i++) {
            let x: number = Math.random() * 650;
            let y: number = 600 + Math.random() * 2;
            let seegras: Path2D = new Path2D();
            seegras.moveTo(x, y);
            seegras.bezierCurveTo(x + 5, y - 15, x - 5, y - 20, x + 15, y - 70);
            seegras.bezierCurveTo(x, y - 20, x + 10, y - 15, x + 8, y);
            seegras.closePath();
            crc.fillStyle = "gold";
            crc.strokeStyle = "darkgreen";
            crc.fill(seegras);
            crc.stroke(seegras);
        }
    }
    //Werden benötigt, damit nach dem Spielverlieren die Animationen anhalten
    function starten(): void {
        fame = window.setTimeout(update, 1000 / fps);
    }
    export function beenden(): void {
        window.clearTimeout(fame);
    }
}
