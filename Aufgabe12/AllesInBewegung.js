var task12;
(function (task12) {
    class AllesInBewegung extends task12.DingeUnterWasser {
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            task12.crc.fillStyle = "cyan";
            task12.crc.strokeStyle = "blue";
            task12.crc.fill(blase);
            task12.crc.stroke(blase);
            console.log("Hallo");
        }
        update() {
            this.move();
            this.draw();
            super.update();
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
    task12.AllesInBewegung = AllesInBewegung;
})(task12 || (task12 = {}));
//# sourceMappingURL=AllesInBewegung.js.map