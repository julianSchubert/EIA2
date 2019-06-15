var task11;
(function (task11) {
    class Fisch {
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 30);
            flosse.lineTo(this.x + 15, this.y + 15);
            flosse.closePath();
            task11.crc.fillStyle = "navy";
            task11.crc.strokeStyle = "silver";
            task11.crc.fill(flosse);
            task11.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            task11.crc.fillStyle = "silver";
            task11.crc.strokeStyle = "navy";
            task11.crc.fill(hinten);
            task11.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 100, this.y + 10, this.x + 35, this.y + 40, this.x + 45, this.y + 35);
            task11.crc.fillStyle = "navy";
            task11.crc.strokeStyle = "silver";
            task11.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 55, this.y + 5, 5, 0, 2 * Math.PI);
            task11.crc.fillStyle = "white";
            task11.crc.fill(auge);
            task11.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 55, this.y + 5, 3, 0, 2 * Math.PI);
            task11.crc.fillStyle = "black";
            task11.crc.fill(iris);
            task11.crc.stroke(iris);
        }
        update() {
            this.move();
            this.draw();
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
    task11.Fisch = Fisch;
})(task11 || (task11 = {}));
//# sourceMappingURL=fisch.js.map