var task12;
(function (task12) {
    class IceCone {
        constructor(_color) {
            this.x = Math.random() * task12.crc.canvas.width;
            this.y = Math.random() * task12.crc.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
            // this.color = randomColor();
            this.color = _color;
        }
        draw() {
            let ice = new Path2D();
            ice.arc(this.x, this.y - 120, 50, 0, 2 * Math.PI);
            task12.crc.fillStyle = this.color;
            task12.crc.fill(ice);
            let waffle = new Path2D();
            waffle.moveTo(this.x - 50, this.y - 100);
            waffle.lineTo(this.x, this.y);
            waffle.lineTo(this.x + 50, this.y - 100);
            waffle.closePath();
            task12.crc.fillStyle = "peru";
            task12.crc.fill(waffle);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > task12.crc.canvas.width + 50) {
                this.x = 0 - 50;
            }
            if (this.x < 0 - 50) {
                this.x = task12.crc.canvas.width + 50;
            }
            if (this.y > task12.crc.canvas.height + 200) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = task12.crc.canvas.height + 200;
            }
        }
    }
    task12.IceCone = IceCone;
})(task12 || (task12 = {}));
//# sourceMappingURL=IceCone.js.map