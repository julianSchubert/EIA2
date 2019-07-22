var endtask;
(function (endtask) {
    class SpielerFisch extends endtask.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x = 400;
            this.y = 300;
            this.dx = 0;
            this.dy = 0;
            this.typ = 10;
            this.groesse = 20;
        }
        draw() {
            let r = this.groesse; //Radius der Kreise
            let obereflosse = new Path2D();
            obereflosse.moveTo(this.x - 0.95 * r, this.y - 0.5 * r);
            obereflosse.lineTo(this.x - 1.25 * r, this.y - 1.25 * r);
            obereflosse.lineTo(this.x - 2.5 * r, this.y - 1 * r);
            obereflosse.lineTo(this.x - 2 * r, this.y - 0.75 * r);
            endtask.crc.fillStyle = "blue";
            endtask.crc.strokeStyle = "lime";
            endtask.crc.fill(obereflosse);
            endtask.crc.stroke(obereflosse);
            let hinten = new Path2D();
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
            endtask.crc.fillStyle = "blue";
            endtask.crc.strokeStyle = "lime";
            endtask.crc.fill(hinten);
            endtask.crc.stroke(hinten);
            let koerper = new Path2D();
            koerper.moveTo(this.x, this.y);
            koerper.quadraticCurveTo(this.x - 1.5 * r, this.y - 1.5 * r, this.x - 3.5 * r, this.y - 0.25 * r);
            koerper.lineTo(this.x - 3.5 * r, this.y + 0.5 * r);
            koerper.quadraticCurveTo(this.x - 1.5 * r, this.y + 1.25 * r, this.x, this.y);
            koerper.closePath();
            endtask.crc.fillStyle = "lime";
            endtask.crc.strokeStyle = "blue";
            endtask.crc.fill(koerper);
            endtask.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 1.5 * r, this.y + 0.25 * r);
            flosse.lineTo(this.x - 2 * r, this.y + 0.75 * r);
            flosse.lineTo(this.x - 2.5 * r, this.y + 1.25 * r);
            flosse.lineTo(this.x - 2 * r, this.y + 0.25 * r);
            flosse.closePath();
            endtask.crc.fillStyle = "blue";
            endtask.crc.strokeStyle = "lime";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let auge = new Path2D;
            auge.arc(this.x - 1 * r, this.y - 0.2 * r, 0.3 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.strokeStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let pupille = new Path2D;
            pupille.arc(this.x - 0.75 * r, this.y - 0.2 * r, 0.075 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(pupille);
            endtask.crc.stroke(pupille);
            let fressfeld = new Path2D();
            fressfeld.rect(this.x - 10, this.y - 20, 40, 40);
            endtask.crc.strokeStyle = "black";
            endtask.crc.stroke(fressfeld);
        }
        //Die Werte müssen angepasst werden bei Änderung der Canvasgröße
        move() {
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
    endtask.SpielerFisch = SpielerFisch;
})(endtask || (endtask = {}));
//# sourceMappingURL=SpielerFisch.js.map