var endtask;
(function (endtask) {
    class SpaceFisch extends endtask.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x = 400;
            this.y = 300;
            this.dx = 0;
            this.dy = 0;
            this.groesse = 1;
        }
        draw() {
            let r = this.groesse; //Radius der Kreise
            let obereflosse = new Path2D();
            obereflosse.moveTo(this.x - 19 * r, this.y - 10 * r);
            obereflosse.lineTo(this.x - 25 * r, this.y - 25 * r);
            obereflosse.lineTo(this.x - 50 * r, this.y - 20 * r);
            obereflosse.lineTo(this.x - 40 * r, this.y - 15 * r);
            endtask.crc.fill(obereflosse);
            endtask.crc.stroke(obereflosse);
            let hinten = new Path2D();
            hinten.moveTo(this.x - 60 * r, this.y - 10 * r);
            hinten.lineTo(this.x - 75 * r, this.y - 20 * r);
            hinten.lineTo(this.x - 100 * r, this.y - 5 * r);
            hinten.lineTo(this.x - 80 * r, this.y - 10 * r);
            hinten.lineTo(this.x - 70 * r, this.y - 5 * r);
            hinten.lineTo(this.x - 70 * r, this.y + 10 * r);
            hinten.lineTo(this.x - 80 * r, this.y + 15 * r);
            hinten.lineTo(this.x - 100 * r, this.y + 5 * r);
            hinten.lineTo(this.x - 75 * r, this.y + 25 * r);
            hinten.lineTo(this.x - 55 * r, this.y + 13 * r);
            hinten.closePath();
            endtask.crc.fill(hinten);
            endtask.crc.stroke(hinten);
            let koerper = new Path2D();
            koerper.moveTo(this.x, this.y);
            koerper.quadraticCurveTo(this.x - 30 * r, this.y - 30 * r, this.x - 70 * r, this.y - 5 * r);
            koerper.lineTo(this.x - 70 * r, this.y + 10 * r);
            koerper.quadraticCurveTo(this.x - 30 * r, this.y + 25 * r, this.x, this.y);
            koerper.closePath();
            endtask.crc.fillStyle = "lime";
            endtask.crc.strokeStyle = "lime";
            endtask.crc.fill(koerper);
            endtask.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 30 * r, this.y + 5 * r);
            flosse.lineTo(this.x - 40 * r, this.y + 15 * r);
            flosse.lineTo(this.x - 50 * r, this.y + 25 * r);
            flosse.lineTo(this.x - 45 * r, this.y + 15 * r);
            flosse.lineTo(this.x - 40 * r, this.y + 5 * r);
            flosse.lineTo(this.x - 30 * r, this.y + 5 * r);
            flosse.closePath();
            endtask.crc.fillStyle = "#0534f4";
            endtask.crc.strokeStyle = "#0534f4";
            endtask.crc.fill(flosse);
            endtask.crc.stroke(flosse);
            let auge = new Path2D;
            auge.arc(this.x - 20 * r, this.y - 4 * r, 6 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.strokeStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let pupille = new Path2D;
            pupille.arc(this.x - 15 * r, this.y - 4 * r, 1.5 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.strokeStyle = "black";
            endtask.crc.fill(pupille);
            endtask.crc.stroke(pupille);
        }
    }
    endtask.SpaceFisch = SpaceFisch;
})(endtask || (endtask = {}));
//# sourceMappingURL=SpaceFisch.js.map