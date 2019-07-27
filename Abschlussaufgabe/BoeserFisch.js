var endtask;
(function (endtask) {
    class BoeserFisch extends endtask.Ufo {
        constructor() {
            super();
            this.x = 200;
            this.y = 200;
            this.dx = 2;
            this.dy = 7;
            this.typ = 9;
            this.groesse = 10000;
        }
        draw() {
            let flosse = new Path2D();
            flosse.moveTo(this.x + 20, this.y + 5);
            flosse.quadraticCurveTo(this.x + 60, this.y + 30, this.x + 10, this.y + 35);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let flosse2 = new Path2D();
            flosse2.moveTo(this.x - 20, this.y + 5);
            flosse2.quadraticCurveTo(this.x - 70, this.y + 30, this.x - 10, this.y + 20);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(flosse2);
            endtask.crc.stroke(flosse2);
            let kreis = new Path2D();
            kreis.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            endtask.crc.strokeStyle = "white";
            endtask.crc.fillStyle = "yellow";
            endtask.crc.fill(kreis);
            endtask.crc.stroke(kreis);
            let auge1 = new Path2D();
            auge1.arc(this.x - 10, this.y - 10, 10, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge1);
            endtask.crc.stroke(auge1);
            let auge2 = new Path2D();
            auge2.arc(this.x + 5, this.y - 10, 7, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge2);
            endtask.crc.stroke(auge2);
            let pupille = new Path2D();
            pupille.arc(this.x - 10, this.y - 10, 3, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(pupille);
            endtask.crc.stroke(pupille);
            let pupille2 = new Path2D();
            pupille2.arc(this.x + 5, this.y - 10, 3, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(pupille2);
            endtask.crc.stroke(pupille2);
            let mund = new Path2D();
            mund.moveTo(this.x - 20, this.y + 10);
            mund.lineTo(this.x + 15, this.y + 15);
            endtask.crc.strokeStyle = "black";
            endtask.crc.stroke(mund);
            let brauen = new Path2D();
            brauen.moveTo(this.x - 20, this.y - 20);
            brauen.lineTo(this.x, this.y - 10);
            brauen.lineTo(this.x + 10, this.y - 20);
            brauen.lineTo(this.x + 5, this.y - 25);
            brauen.lineTo(this.x, this.y - 12);
            brauen.lineTo(this.x - 12, this.y - 30);
            brauen.lineTo(this.x - 20, this.y - 20);
            endtask.crc.fillStyle = "bLack";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(brauen);
            endtask.crc.stroke(brauen);
        }
        move() {
            super.move();
            if (this.y > 590) {
                this.dy = -7;
            }
            if (this.y < 10) {
                this.dy = +7;
            }
        }
    }
    endtask.BoeserFisch = BoeserFisch;
})(endtask || (endtask = {}));
//# sourceMappingURL=BoeserFisch.js.map