namespace endtask {
    export class BoeserFisch extends Ufo {
        constructor() {
            super();
            this.x = 200;
            this.y = 200;
            this.dx = 2;
            this.dy = 7;
            this.typ = 9;
            this.groesse = 10000;
        }

        draw(): void {
            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 5);
            flosse.quadraticCurveTo(this.x + 60, this.y + 30, this.x + 10, this.y + 35);
            crc.fillStyle = "white";
            crc.fill(flosse);
            crc.stroke(flosse);
            let flosse2: Path2D = new Path2D();
            flosse2.moveTo(this.x - 20, this.y + 5);
            flosse2.quadraticCurveTo(this.x - 70, this.y + 30, this.x - 10, this.y + 20);
            crc.fillStyle = "white";
            crc.fill(flosse2);
            crc.stroke(flosse2);
            let kreis: Path2D = new Path2D();
            kreis.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc.strokeStyle = "white";
            crc.fillStyle = "yellow";
            crc.fill(kreis);
            crc.stroke(kreis);
            let auge1: Path2D = new Path2D();
            auge1.arc(this.x - 10, this.y - 10, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge1);
            crc.stroke(auge1);
            let auge2: Path2D = new Path2D();
            auge2.arc(this.x + 5, this.y - 10, 7, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge2);
            crc.stroke(auge2);
            let pupille: Path2D = new Path2D();
            pupille.arc(this.x - 10, this.y - 10, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(pupille);
            crc.stroke(pupille);
            let pupille2: Path2D = new Path2D();
            pupille2.arc(this.x + 5, this.y - 10, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(pupille2);
            crc.stroke(pupille2);
            let mund: Path2D = new Path2D();
            mund.moveTo(this.x - 20, this.y + 10);
            mund.lineTo(this.x + 15, this.y + 15);
            crc.strokeStyle = "black";
            crc.stroke(mund);
            let brauen: Path2D = new Path2D();
            brauen.moveTo(this.x - 20, this.y - 20);
            brauen.lineTo(this.x, this.y - 10);
            brauen.lineTo(this.x + 10, this.y - 20);
            brauen.lineTo(this.x + 5, this.y - 25);
            brauen.lineTo(this.x, this.y - 12);
            brauen.lineTo(this.x - 12, this.y - 30);
            brauen.lineTo(this.x - 20, this.y - 20);
            crc.fillStyle = "bLack";
            crc.strokeStyle = "black";
            crc.fill(brauen);
            crc.stroke(brauen);
        }
        move(): void {
            super.move();
            if (this.y > 590) {
                this.dy = -7;
            }
            if (this.y < 10) {
                this.dy = + 7;
            }
        }
    }
}