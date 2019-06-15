var task11;
(function (task11) {
    class OrangerFisch {
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 20);
            flosse.lineTo(this.x + 20, this.y + 15);
            flosse.closePath();
            task11.crc.fillStyle = "darkorange";
            task11.crc.strokeStyle = "orangered";
            task11.crc.fill(flosse);
            task11.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            task11.crc.fillStyle = "darkorange";
            task11.crc.strokeStyle = "orangered";
            task11.crc.fill(hinten);
            task11.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 20, this.y + 50, this.x + 200, this.y, this.x + 40, this.y + 35);
            task11.crc.fillStyle = "darkorange";
            task11.crc.strokeStyle = "orangered";
            task11.crc.fill(kopf);
            task11.crc.stroke(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 40, this.y + 5, 5, 0, 2 * Math.PI);
            task11.crc.fillStyle = "white";
            task11.crc.fill(auge);
            task11.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 36, this.y + 5, 2, 0, 2 * Math.PI);
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
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y < 0) {
                this.y = 600;
            }
        }
    }
    task11.OrangerFisch = OrangerFisch;
})(task11 || (task11 = {}));
//# sourceMappingURL=fisch2.js.map