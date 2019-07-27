var endtask;
(function (endtask) {
    class PinkerFisch extends endtask.Fisch {
        constructor() {
            super();
            this.dx = Math.random() * 10;
            this.dy = Math.random() * 4;
            this.typ = 4;
            this.groesse = 5; //Einbinden in die Bedingung für Fressen
            if (endtask.punktzahl > 500) {
                this.groesse = 10;
            }
        }
        draw() {
            let kopf = new Path2D();
            kopf.moveTo(this.x, this.y);
            kopf.bezierCurveTo(this.x + 10 * this.groesse, this.y + this.groesse, this.x + 3.5 * this.groesse, this.y + 4 * this.groesse, this.x, this.y);
            endtask.crc.fillStyle = "orangered";
            endtask.crc.strokeStyle = "maroon";
            endtask.crc.fill(kopf);
            endtask.crc.stroke(kopf);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 4.5 * this.groesse, this.y - 0.5 * this.groesse);
            flosse.lineTo(this.x, this.y + 3 * this.groesse);
            flosse.lineTo(this.x + 1.5 * this.groesse, this.y + 1.5 * this.groesse);
            flosse.closePath();
            endtask.crc.fillStyle = "maroon";
            endtask.crc.strokeStyle = "maaron";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 15, this.y, 3, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(iris);
            endtask.crc.stroke(iris);
        }
        move() {
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
    endtask.PinkerFisch = PinkerFisch;
})(endtask || (endtask = {}));
//# sourceMappingURL=PinkerFisch.js.map