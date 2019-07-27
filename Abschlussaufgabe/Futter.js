var endtask;
(function (endtask) {
    class Futter extends endtask.AllesInBewegung {
        constructor(_x, _y) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 0.3;
            this.dy = Math.random() * 4;
            this.typ = 6 + Math.round(Math.random());
        }
        draw() {
            let futter = new Path2D();
            futter.arc(this.x, this.y, 3, Math.PI, 2 * Math.PI);
            futter.lineTo(this.x + 3, this.y + 10);
            futter.arc(this.x, this.y + 10, 3, 0, Math.PI);
            futter.bezierCurveTo(this.x + 1, this.y + 5, this.x - 4, this.y + 5, this.x - 3, this.y);
            if (this.typ == 6) {
                endtask.crc.fillStyle = "olivedrab";
                endtask.crc.strokeStyle = "olivedrab";
            }
            else if (this.typ == 7) {
                endtask.crc.fillStyle = "springgreen";
                endtask.crc.strokeStyle = "springgreen";
            }
            endtask.crc.fill(futter);
            endtask.crc.stroke(futter);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
            }
        }
    }
    endtask.Futter = Futter;
})(endtask || (endtask = {}));
//# sourceMappingURL=Futter.js.map