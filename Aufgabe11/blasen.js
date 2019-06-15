var task11;
(function (task11) {
    class Blubb {
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            task11.crc.fillStyle = "cyan";
            task11.crc.strokeStyle = "blue";
            task11.crc.fill(blase);
            task11.crc.stroke(blase);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 800) {
                this.x = 570;
                this.y = 490;
            }
            if (this.y < 0) {
                this.y = 490;
                this.x = Math.random() * 90 + 560;
            }
        }
    }
    task11.Blubb = Blubb;
})(task11 || (task11 = {}));
//# sourceMappingURL=blasen.js.map