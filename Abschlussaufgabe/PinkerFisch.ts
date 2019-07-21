namespace endtask {
    export class PinkerFisch extends Fisch {

            constructor() {
                super();
                this.dx = Math.random() * 10;
                this.dy = Math.random() * 4;
                this.typ = 4;
                this.groesse = 5; //Einbinden in die Bedingung für Fressen
            }

            draw(): void {
                let kopf: Path2D = new Path2D();
                kopf.moveTo(this.x, this.y);
                kopf.bezierCurveTo(this.x + 10 * this.groesse, this.y + this.groesse, this.x + 3.5 * this.groesse , this.y + 4 * this.groesse, this.x , this.y);
                crc.fillStyle = "orangered";
                crc.strokeStyle = "maroon";
                crc.fill(kopf);
                crc.stroke(kopf);
                let flosse: Path2D = new Path2D();
                flosse.moveTo(this.x + 4.5 * this.groesse, this.y - 0.5 * this.groesse);
                flosse.lineTo(this.x , this.y + 3 * this.groesse);
                flosse.lineTo(this.x + 1.5 * this.groesse, this.y + 1.5 * this.groesse);
                flosse.closePath();
                crc.fillStyle = "maroon";
                crc.strokeStyle = "maaron";
                crc.fill(flosse);
                crc.stroke(flosse);
                let auge: Path2D = new Path2D();
                auge.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI);
                crc.fillStyle = "white";
                crc.fill(auge);
                crc.stroke(auge);
                let iris: Path2D = new Path2D();
                iris.arc(this.x + 15, this.y, 3, 0, 2 * Math.PI);
                crc.fillStyle = "black";
                crc.fill(iris);
                crc.stroke(iris);
            }
            
            move(): void {
                this.x -= this.dx;
                this.y += this.dy;
                if (this.x < 0) {
                    this.x = 800;
                }
                if (this.y > 600) {
                    this.y = 0;
                }
            }






















    }
}