var endtask;
(function (endtask) {
    class Ufo extends endtask.SpaceFisch {
        constructor() {
            super();
            this.x = 200;
            this.y = 200;
            this.dx = 1;
            this.dy = 10;
            this.typ = 8;
            this.groesse = 50;
        }
        draw() {
            let dach = new Path2D();
            dach.moveTo(this.x, this.y);
            dach.moveTo(this.x - 2 * this.groesse, this.y);
            dach.quadraticCurveTo(this.x, this.y - 2 * this.groesse, this.x + 2 * this.groesse, this.y);
            dach.lineTo(this.x - 2 * this.groesse, this.y);
            endtask.crc.fillStyle = "lightskyblue";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(dach);
            endtask.crc.stroke(dach);
            let mitte = new Path2D();
            mitte.moveTo(this.x - 2 * this.groesse, this.y);
            mitte.quadraticCurveTo(this.x - 2.5 * this.groesse, this.y + 0.8 * this.groesse, this.x - 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.lineTo(this.x + 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.moveTo(this.x + 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.quadraticCurveTo(this.x + 2.5 * this.groesse, this.y + 0.8 * this.groesse, this.x + 2 * this.groesse, this.y);
            mitte.lineTo(this.x - 2 * this.groesse, this.y);
            endtask.crc.fillStyle = "rebeccapurple";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(mitte);
            endtask.crc.stroke(mitte);
            let unten = new Path2D();
            unten.moveTo(this.x - 2 * this.groesse, this.y + this.groesse);
            unten.quadraticCurveTo(this.x, this.y + 2 * this.groesse, this.x + 2 * this.groesse, this.y + this.groesse);
            endtask.crc.fillStyle = "purple";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(unten);
            endtask.crc.stroke(unten);
        }
        move() {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y > 590) {
                this.dy = -10;
            }
            if (this.y < 10) {
                this.dy = +10;
            }
        }
    }
    endtask.Ufo = Ufo;
})(endtask || (endtask = {}));
//# sourceMappingURL=Ufo.js.map