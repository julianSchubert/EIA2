namespace endtask {
    export class SpielerFisch extends AllesInBewegung {
        groesse: number;
        constructor() {
            super(Math.random());
            this.x = 400;
            this.y = 300;
            this.dx = 0;
            this.dy = 0;
            this.typ = 10;
            this.groesse = 20;
        }
        draw(): void {//
            let r: number = this.groesse; //Radius der Kreise
            let obereflosse: Path2D = new Path2D();
            obereflosse.moveTo(this.x - 0.95 * r, this.y - 0.5 * r);
            obereflosse.lineTo(this.x - 1.25 * r, this.y - 1.25 * r);
            obereflosse.lineTo(this.x - 2.5 * r, this.y - 1 * r);
            obereflosse.lineTo(this.x - 2 * r, this.y - 0.75 * r);
            crc.fill(obereflosse);
            crc.stroke(obereflosse);
            let hinten: Path2D = new Path2D();
            hinten.moveTo(this.x - 3 * r, this.y - 0.5 * r);
            hinten.lineTo(this.x - 3.75 * r, this.y - 1 * r);
            hinten.lineTo(this.x - 5 * r, this.y - 0.25 * r);
            hinten.lineTo(this.x - 4 * r, this.y - 0.5 * r);
            hinten.lineTo(this.x - 3.5 * r, this.y - 0.25 * r);
            hinten.lineTo(this.x - 3.5 * r, this.y + 0.5 * r);
            hinten.lineTo(this.x - 4 * r, this.y + 0.75 * r);
            hinten.lineTo(this.x - 5 * r, this.y + 0.25 * r);
            hinten.lineTo(this.x - 3.5 * r, this.y + 1.25 * r);
            hinten.lineTo(this.x - 2.75 * r, this.y + 0.65 * r);
            hinten.closePath();
            crc.fill(hinten);
            crc.stroke(hinten);
            let koerper: Path2D = new Path2D();
            koerper.moveTo(this.x, this.y);
            koerper.quadraticCurveTo(this.x - 1.5 * r, this.y - 1.5 * r, this.x - 3.5 * r, this.y - 0.25 * r);
            koerper.lineTo(this.x - 3.5 * r, this.y + 0.5 * r);
            koerper.quadraticCurveTo(this.x - 1.5 * r, this.y + 1.25 * r, this.x, this.y);
            koerper.closePath();
            crc.fillStyle = "lime";
            crc.strokeStyle = "lime";
            crc.fill(koerper);
            crc.stroke(koerper);
            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x - 1.5 * r, this.y + 0.25 * r);
            flosse.lineTo(this.x - 2 * r, this.y + 0.75 * r);
            flosse.lineTo(this.x - 2.5 * r, this.y + 1.25 * r);
            flosse.lineTo(this.x - 2 * r, this.y + 0.25 * r);
            flosse.closePath();
            crc.fillStyle = "#0534f4";
            crc.strokeStyle = "#0534f4";
            crc.fill(flosse);
            crc.stroke(flosse);
            let auge: Path2D = new Path2D;
            auge.arc(this.x - 1 * r, this.y - 0.2 * r, 0.3 * r, 0, 2  * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "white";
            crc.fill(auge);
            crc.stroke(auge);
            let pupille: Path2D = new Path2D;
            pupille.arc(this.x - 0.75 * r, this.y - 0.2 * r, 0.075 * r, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.fill(pupille);
            crc.stroke(pupille);
            let fressfeld: Path2D = new Path2D();
            fressfeld.rect(this.x - 10 , this.y - 20, 40, 40);
            crc.strokeStyle = "black";
            crc.stroke(fressfeld);
        }

         //Die Werte müssen angepasst werden bei Änderung der Canvasgröße
         move(): void {
            this.y += this.dy;
            this.x += this.dx;    
            if (this.y > 580) {
                this.y = 580;
            }
            else if (this.y < 8) {
                this.y = 8;
            }
            else if (this.x > 800) {
                this.x = 0;
            }
            else if (this.x < 0) {
                this.x = 800;
            }
        }
   
    }
    
}
