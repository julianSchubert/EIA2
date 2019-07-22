namespace endtask {
    export class Fisch extends AllesInBewegung {

        constructor() {
            super(Math.random());
            this.x *= Math.random();
            this.y *= Math.random();
            this.dx = Math.random() * 17;
            this.dy = Math.random() * 6;
            this.typ = 2;
            this.groesse = 10;
        }

        draw(): void {
            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 30);
            flosse.lineTo(this.x - 15, this.y + 15);
            flosse.closePath();
            crc.fillStyle = "fuchsia";
            crc.strokeStyle = "deeppink";
            crc.fill(flosse);
            crc.stroke(flosse);
            let hinten: Path2D = new Path2D();
            hinten.moveTo(this.x - 15, this.y + 15);
            hinten.lineTo(this.x - 45, this.y - 5);
            hinten.lineTo(this.x - 45, this.y + 35);
            hinten.closePath();
            crc.fillStyle = "deeppink";
            crc.strokeStyle = "fuchsia";
            crc.fill(hinten);
            crc.stroke(hinten);
            let kopf: Path2D = new Path2D();
            kopf.moveTo(this.x - 45, this.y - 5);
            kopf.bezierCurveTo(this.x - 100, this.y + 10, this.x - 35, this.y + 40, this.x - 45, this.y + 35);
            crc.fillStyle = "fuchsia";
            crc.strokeStyle = "deeppink";
            crc.fill(kopf);
            crc.stroke(kopf);
            let auge: Path2D = new Path2D();
            auge.arc(this.x - 55, this.y + 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge);
            crc.stroke(auge);
            let iris: Path2D = new Path2D();
            iris.arc(this.x - 55, this.y + 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);
            crc.stroke(iris);
        }
        
        move(): void {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }














}