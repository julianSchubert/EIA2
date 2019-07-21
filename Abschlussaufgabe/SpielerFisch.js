var endtask;
(function (endtask) {
    class SpielerFisch extends endtask.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x = 400;
            this.y = 300;
            this.dx = 0;
            this.dy = 0;
            this.groesse = 20;
        }
        draw() {
            let r = this.groesse; //Radius der Kreise
            let hintereflosse = new Path2D();
            hintereflosse.arc(this.x, this.y + 2 * r, r, 1.5 * Math.PI, Math.PI, true);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y + 3 * r);
            hintereflosse.lineTo(this.x, this.y + 2 * r);
            hintereflosse.arc(this.x + r, this.y + 2 * r, r, Math.PI, 1.5 * Math.PI);
            hintereflosse.arc(this.x + r, this.y, r, 0.5 * Math.PI, Math.PI);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y - r);
            hintereflosse.lineTo(this.x - r, this.y);
            hintereflosse.arc(this.x, this.y, r, Math.PI, 0.5 * Math.PI, true);
            hintereflosse.closePath();
            endtask.crc.fillStyle = "lime";
            endtask.crc.strokeStyle = "lime";
            endtask.crc.fill(hintereflosse);
            endtask.crc.stroke(hintereflosse);
            let rumpf = new Path2D();
            rumpf.moveTo(this.x + r, this.y + r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, Math.PI, 1.5 * Math.PI);
            rumpf.lineTo(this.x + 3 * r, this.y + 0.25 * r);
            rumpf.arc(this.x + 3.5 * r, this.y + 0.6 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.arc(this.x + 3.5 * r, this.y + 1.5 * r, 0.25 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.lineTo(this.x + 2 * r, this.y + 2 * r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, 0.5 * Math.PI, Math.PI);
            endtask.crc.fillStyle = "lime";
            endtask.crc.strokeStyle = "olive";
            endtask.crc.fill(rumpf);
            endtask.crc.stroke(rumpf);
            let auge = new Path2D();
            auge.arc(this.x + 2 * r, this.y + 0.5 * r, 0.25 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 2.1 * r, this.y + 0.5 * r, 0.1 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(iris);
            endtask.crc.stroke(iris);
            let fressfeld = new Path2D();
            fressfeld.rect(this.x + 3.5 * r, this.y + 0.35 * r, r, 1.5 * r);
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