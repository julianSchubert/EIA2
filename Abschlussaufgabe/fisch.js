var endtask;
(function (endtask) {
    class Fisch extends endtask.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x *= Math.random();
            this.y *= Math.random();
            this.dx = Math.random() * 17;
            this.dy = Math.random() * 6;
            this.typ = 2;
            this.groesse = 10;
        }
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 30);
            flosse.lineTo(this.x - 15, this.y + 15);
            flosse.closePath();
            endtask.crc.fillStyle = "fuchsia";
            endtask.crc.strokeStyle = "deeppink";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x - 15, this.y + 15);
            hinten.lineTo(this.x - 45, this.y - 5);
            hinten.lineTo(this.x - 45, this.y + 35);
            hinten.closePath();
            endtask.crc.fillStyle = "deeppink";
            endtask.crc.strokeStyle = "fuchsia";
            endtask.crc.fill(hinten);
            endtask.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x - 45, this.y - 5);
            kopf.bezierCurveTo(this.x - 100, this.y + 10, this.x - 35, this.y + 40, this.x - 45, this.y + 35);
            endtask.crc.fillStyle = "fuchsia";
            endtask.crc.strokeStyle = "deeppink";
            endtask.crc.fill(kopf);
            endtask.crc.stroke(kopf);
            let auge = new Path2D();
            auge.arc(this.x - 55, this.y + 5, 5, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x - 55, this.y + 5, 3, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(iris);
            endtask.crc.stroke(iris);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 800) {
                this.x = 0;
            }
            if (this.y > 600) {
                this.y = 0;
            }
        }
    }
    endtask.Fisch = Fisch;
})(endtask || (endtask = {}));
//# sourceMappingURL=Fisch.js.map