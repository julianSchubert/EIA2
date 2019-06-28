var task12;
(function (task12) {
    class OrangerFisch extends task12.Fisch {
        constructor() {
            super();
            this.dx = Math.random() * -10;
            this.dy = Math.random() * -2;
        }
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 20);
            flosse.lineTo(this.x + 20, this.y + 15);
            flosse.closePath();
            task12.crc.fillStyle = "darkorange";
            task12.crc.strokeStyle = "orangered";
            task12.crc.fill(flosse);
            task12.crc.stroke(flosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            task12.crc.fillStyle = "darkorange";
            task12.crc.strokeStyle = "orangered";
            task12.crc.fill(hinten);
            task12.crc.stroke(hinten);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 20, this.y + 50, this.x + 200, this.y, this.x + 40, this.y + 35);
            task12.crc.fillStyle = "darkorange";
            task12.crc.strokeStyle = "orangered";
            task12.crc.fill(kopf);
            task12.crc.stroke(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 40, this.y + 5, 5, 0, 2 * Math.PI);
            task12.crc.fillStyle = "white";
            task12.crc.fill(auge);
            task12.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 36, this.y + 5, 2, 0, 2 * Math.PI);
            task12.crc.fillStyle = "black";
            task12.crc.fill(iris);
            task12.crc.stroke(iris);
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
    task12.OrangerFisch = OrangerFisch;
})(task12 || (task12 = {}));
//# sourceMappingURL=Fisch2.js.map