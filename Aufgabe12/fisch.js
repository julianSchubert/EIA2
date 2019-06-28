var task12;
(function (task12) {
    class Fisch extends task12.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x *= Math.random();
            this.y *= Math.random();
            this.dx = Math.random() * 17;
            this.dy = Math.random() * 6;
        }
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 30);
            flosse.lineTo(this.x + 15, this.y + 15);
            flosse.closePath();
            task12.crc.fillStyle = "navy";
            task12.crc.strokeStyle = "silver";
            task12.crc.fill(flosse);
            task12.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            task12.crc.fillStyle = "silver";
            task12.crc.strokeStyle = "navy";
            task12.crc.fill(hinten);
            task12.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 100, this.y + 10, this.x + 35, this.y + 40, this.x + 45, this.y + 35);
            task12.crc.fillStyle = "navy";
            task12.crc.strokeStyle = "silver";
            task12.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 55, this.y + 5, 5, 0, 2 * Math.PI);
            task12.crc.fillStyle = "white";
            task12.crc.fill(auge);
            task12.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 55, this.y + 5, 3, 0, 2 * Math.PI);
            task12.crc.fillStyle = "black";
            task12.crc.fill(iris);
            task12.crc.stroke(iris);
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
    task12.Fisch = Fisch;
})(task12 || (task12 = {}));
//# sourceMappingURL=Fisch.js.map