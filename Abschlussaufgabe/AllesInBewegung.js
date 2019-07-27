var endtask;
(function (endtask) {
    class AllesInBewegung {
        constructor(_x) {
            this.x = 630;
            this.y = 485;
            this.dx = _x * 4;
            this.dy = Math.random() * -15;
            this.typ = 1;
            this.groesse = 1;
        }
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "mediumspringgreen";
            endtask.crc.strokeStyle = "cyan";
            endtask.crc.fill(blase);
            endtask.crc.stroke(blase);
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
    endtask.AllesInBewegung = AllesInBewegung;
})(endtask || (endtask = {}));
//# sourceMappingURL=AllesInBewegung.js.map