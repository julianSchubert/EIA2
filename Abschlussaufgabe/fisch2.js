var endtask;
(function (endtask) {
    class Fisch2 extends endtask.Fisch {
        constructor() {
            super();
            this.dx = Math.random() * -10;
            this.dy = Math.random() * -2;
            this.typ = 3;
            this.groesse = 25;
        }
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 20);
            flosse.lineTo(this.x + 20, this.y + 15);
            flosse.closePath();
            endtask.crc.fillStyle = "darkorange";
            endtask.crc.strokeStyle = "orangered";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            endtask.crc.fillStyle = "darkorange";
            endtask.crc.strokeStyle = "orangered";
            endtask.crc.fill(hinten);
            endtask.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 20, this.y + 50, this.x + 200, this.y, this.x + 40, this.y + 35);
            endtask.crc.fillStyle = "darkorange";
            endtask.crc.strokeStyle = "orangered";
            endtask.crc.fill(kopf);
            endtask.crc.stroke(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 40, this.y + 5, 5, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 36, this.y + 5, 2, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(iris);
            endtask.crc.stroke(iris);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }
    endtask.Fisch2 = Fisch2;
})(endtask || (endtask = {}));
//# sourceMappingURL=Fisch2.js.map