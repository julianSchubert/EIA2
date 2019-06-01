document.addEventListener("DOMContentLoaded", init);
let canvas: HTMLCanvasElement;
let crc: CanvasRenderingContext2D;

function init(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");

    hintergrund();

    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * 400;
        blubberblase(x, y);
    }

    for (let i: number = 0; i < 20; i++) {
        let g: number = Math.random() * 700;
        let h: number = 500 + Math.random() * 55;
        kies(g, h);
    }

    fisch(100, 300);

    for (let i: number = 0; i < 5; i++) {
        let c: number = Math.random() * 650;
        let d: number = Math.random() * 500;
        blaufisch(c, d);
    }

    for (let i: number = 0; i < 6; i++) {
        let e: number = Math.random() * 650;
        let f: number = 500 + Math.random() * 50;
        seegras(e, f);
    }

    let x: number = Math.random() * 650;
    let z: number = 500 + Math.random() * 10;
    kiste(x, z);
}

function blubberblase(_x: number, _y: number): void {
    let blase: Path2D = new Path2D();
    blase.arc(_x, _y, 10, 0, 2 * Math.PI);
    crc.fillStyle = "cyan";
    crc.strokeStyle = "blue";
    crc.fill(blase);
    crc.stroke(blase);
}

function hintergrund(): void {
    let boden: Path2D = new Path2D();
    boden.rect(0, 500, 800, 100);
    crc.fillStyle = "olive";
    crc.fill(boden);
    crc.stroke(boden);

    let wasser: Path2D = new Path2D();
    wasser.rect(0, 0, 800, 500);
    crc.fillStyle = "teal";
    crc.fill(wasser);
    crc.stroke(wasser);
}



function kiste(_x: number, _z: number): void {
    let kiste: Path2D = new Path2D();
    kiste.rect(_x, _z, 100, 75);
    kiste.moveTo(_x, _z + 25);
    kiste.lineTo(_x + 100, _z + 25);
    kiste.moveTo(_x, _z + 50);
    kiste.lineTo(_x + 100, _z + 50);
    crc.fillStyle = "sienna";
    crc.strokeStyle = "black";
    crc.fill(kiste);
    crc.stroke(kiste);
    let deckel: Path2D = new Path2D();
    deckel.moveTo(_x, _z);
    deckel.lineTo(_x + 50, _z - 30);
    deckel.lineTo(_x + 150, _z - 30);
    deckel.lineTo(_x + 100, _z);
    deckel.closePath();
    crc.fill(deckel);
    crc.stroke(deckel);
    let füllung: Path2D = new Path2D();
    füllung.moveTo(_x + 10, _z);
    füllung.lineTo(_x + 50, _z - 25);
    füllung.lineTo(_x + 130, _z - 25);
    füllung.lineTo(_x + 90, _z);
    füllung.closePath();
    crc.fillStyle = "black";
    crc.strokeStyle = "black";
    crc.fill(füllung);
    crc.stroke(füllung);
    let seite: Path2D = new Path2D();
    seite.moveTo(_x + 100, _z + 75);
    seite.lineTo(_x + 150, _z + 45);
    seite.lineTo(_x + 150, _z - 30);
    seite.lineTo(_x + 100, _z);
    seite.closePath();
    crc.fillStyle = "sienna";
    crc.strokeStyle = "black";
    crc.fill(seite);
    crc.stroke(seite);
    let linien: Path2D = new Path2D();
    linien.moveTo(_x + 100, _z + 50);
    linien.lineTo(_x + 150, _z + 20);
    linien.moveTo(_x + 150, _z - 5);
    linien.lineTo(_x + 100, _z + 25);
    crc.stroke(linien);
    let klappe: Path2D = new Path2D();
    klappe.moveTo(_x + 50, _z - 30);
    klappe.lineTo(_x + 70, _z - 110);
    klappe.lineTo(_x + 170, _z - 110);
    klappe.lineTo(_x + 150, _z - 30);
    klappe.closePath();
    crc.fillStyle = "sienna";
    crc.fill(klappe);
    crc.stroke(klappe);
}

function fisch(_a: number, _b: number): void {
    let flosse: Path2D = new Path2D();
    flosse.moveTo(_a, _b);
    flosse.lineTo(_a, _b + 30);
    flosse.lineTo(_a + 15, _b + 15);
    flosse.closePath();
    crc.fillStyle = "darkorange";
    crc.strokeStyle = "darkorange";
    crc.fill(flosse);
    crc.stroke(flosse);
    let hinten: Path2D = new Path2D();
    hinten.moveTo(_a + 15, _b + 15);
    hinten.lineTo(_a + 45, _b - 5);
    hinten.lineTo(_a + 45, _b + 35);
    hinten.closePath();
    crc.fillStyle = "darkorange";
    crc.strokeStyle = "darkorange";
    crc.fill(hinten);
    crc.stroke(hinten);
    let kopf: Path2D = new Path2D();
    kopf.moveTo(_a + 45, _b - 5);
    kopf.bezierCurveTo(150, 300, 250, 300, _a + 45, _b + 35);
    // kopf.arc(_a + 45, _b + 15, 20, 1.5 * Math.PI, 0.5 * Math.PI); 
    crc.fillStyle = "darkorange";
    crc.strokeStyle = "darkorange";
    crc.fill(kopf);
    let auge: Path2D = new Path2D();
    auge.arc(_a + 55, _b + 5, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.fill(auge);
    crc.stroke(auge);
    let iris: Path2D = new Path2D();
    iris.arc(_a + 55, _b + 5, 2, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.fill(iris);
    crc.stroke(iris);
}


function blaufisch(_a: number, _b: number): void {
    let flosse: Path2D = new Path2D();
    flosse.moveTo(_a, _b);
    flosse.lineTo(_a, _b + 30);
    flosse.lineTo(_a + 15, _b + 15);
    flosse.closePath();
    crc.fillStyle = "navy";
    crc.strokeStyle = "silver";
    crc.fill(flosse);
    crc.stroke(flosse);
    let hinten: Path2D = new Path2D();
    hinten.moveTo(_a + 15, _b + 15);
    hinten.lineTo(_a + 45, _b - 5);
    hinten.lineTo(_a + 45, _b + 35);
    hinten.closePath();
    crc.fillStyle = "silver";
    crc.strokeStyle = "navy";
    crc.fill(hinten);
    crc.stroke(hinten);
    let kopf: Path2D = new Path2D();
    kopf.moveTo(_a + 45, _b - 5);
    kopf.bezierCurveTo(_a + 100, _b + 10, _a + 35, _b + 40, _a + 45, _b + 35);
    // kopf.arc(_a + 45, _b + 15, 20, 1.5 * Math.PI, 0.5 * Math.PI); 
    crc.fillStyle = "navy";
    crc.strokeStyle = "silver";
    crc.fill(kopf);
    let auge: Path2D = new Path2D();
    auge.arc(_a + 55, _b + 5, 5, 0, 2 * Math.PI);
    crc.fillStyle = "white";
    crc.fill(auge);
    crc.stroke(auge);
    let iris: Path2D = new Path2D();
    iris.arc(_a + 55, _b + 5, 3, 0, 2 * Math.PI);
    crc.fillStyle = "black";
    crc.fill(iris);
    crc.stroke(iris);
}

function seegras(_e: number, _f: number): void {
    let seegras: Path2D = new Path2D();
    seegras.moveTo(_e, _f);
    seegras.bezierCurveTo(_e + 5, _f - 15, _e - 5, _f - 20, _e + 15, _f - 70);
    seegras.bezierCurveTo(_e, _f - 20, _e + 10, _f - 15, _e + 8, _f);
    seegras.closePath();
    crc.fillStyle = "limegreen";
    crc.fill(seegras);
    crc.stroke(seegras);
}

function kies(_g: number, _h: number): void {
    let kies: Path2D = new Path2D();
    kies.arc(_g, _h, 5, 1 * Math.PI, 2 * Math.PI);
    kies.closePath();
    crc.fillStyle = "gray";
    crc.strokeStyle = "gray";
    crc.fill(kies);
    crc.stroke(kies);
}
  //lineWidth