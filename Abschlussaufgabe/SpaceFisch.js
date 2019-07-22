var endtask;
(function (endtask) {
    class SpaceFisch extends endtask.AllesInBewegung {
        constructor() {
            super(Math.random());
            this.x = 200;
            this.y = 200;
            this.dx = 0;
            this.dy = 0;
            this.groesse = 19;
        }
        draw() {
            let r = this.groesse; //Radius der Kreise
            let hintereflosse = new Path2D();
            hintereflosse.arc(this.x, this.y + 2 * r, r, 1.5 * Math.PI, Math.PI, true);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y + 3 * r);
            hintereflosse.lineTo(this.x, this.y + 2 * r);
            hintereflosse.arc(this.x + r, this.y + 2 * r, r, Math.PI, 1.5 * Math.PI);
            hintereflosse.arc(this.x + r, this.y, r, 0.5 * Math.PI, Math.PI);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y - r);
            hintereflosse.lineTo(this.x - r, this.y);
            hintereflosse.arc(this.x, this.y, r, Math.PI, 0.5 * Math.PI, true);
            hintereflosse.closePath();
            endtask.crc.fillStyle = "dodgerblue";
            endtask.crc.strokeStyle = "mediumpurple";
            endtask.crc.fill(hintereflosse);
            endtask.crc.stroke(hintereflosse);
            let rumpf = new Path2D();
            rumpf.moveTo(this.x + r, this.y + r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, Math.PI, 1.5 * Math.PI);
            rumpf.lineTo(this.x + 3 * r, this.y + 0.25 * r);
            rumpf.arc(this.x + 3.5 * r, this.y + 0.6 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.arc(this.x + 3.5 * r, this.y + 1.5 * r, 0.25 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.lineTo(this.x + 2 * r, this.y + 2 * r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, 0.5 * Math.PI, Math.PI);
            endtask.crc.fillStyle = "dodgerblue";
            endtask.crc.strokeStyle = "orange";
            endtask.crc.fill(rumpf);
            endtask.crc.stroke(rumpf);
            let auge = new Path2D();
            auge.arc(this.x + 2 * r, this.y + 0.5 * r, 0.25 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "white";
            endtask.crc.fill(auge);
            endtask.crc.stroke(auge);
            let iris = new Path2D();
            iris.arc(this.x + 2.1 * r, this.y + 0.5 * r, 0.1 * r, 0, 2 * Math.PI);
            endtask.crc.fillStyle = "black";
            endtask.crc.fill(iris);
            endtask.crc.stroke(iris);
            let fressfeld = new Path2D();
            fressfeld.rect(this.x + 3.5 * r, this.y + 0.35 * r, r, 1.5 * r);
            endtask.crc.strokeStyle = "black";
            endtask.crc.stroke(fressfeld);
        }
        move() {
            //
        }
    }
    endtask.SpaceFisch = SpaceFisch;
})(endtask || (endtask = {}));
// draw(): void {
//     let r: number = this.groesse; //Radius der Kreise
//     let hintereflosse: Path2D = new Path2D();
//     hintereflosse.arc(this.x, this.y + 2 * r, r, 1.5 * Math.PI, Math.PI, true);
//     hintereflosse.lineTo(this.x - 0.5 * r, this.y + 3 * r);
//     hintereflosse.lineTo(this.x, this.y + 2 * r);
//     hintereflosse.arc(this.x + r, this.y + 2 * r, r, Math.PI, 1.5 * Math.PI);
//     hintereflosse.arc(this.x + r, this.y, r, 0.5 * Math.PI, Math.PI);
//     hintereflosse.lineTo(this.x - 0.5 * r, this.y - r);
//     hintereflosse.lineTo(this.x - r, this.y);
//     hintereflosse.arc(this.x, this.y, r, Math.PI, 0.5 * Math.PI, true);
//     hintereflosse.closePath();
//     crc.fillStyle = "dodgerblue";
//     crc.strokeStyle = "mediumpurple";
//     crc.fill(hintereflosse);
//     crc.stroke(hintereflosse);
//     let rumpf: Path2D = new Path2D();
//     rumpf.moveTo(this.x + r, this.y + r);
//     rumpf.arc(this.x + 2 * r, this.y + r, r, Math.PI, 1.5 * Math.PI);
//     rumpf.lineTo(this.x + 3 * r, this.y + 0.25 * r);
//     rumpf.arc(this.x + 3.5 * r, this.y + 0.6 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI);
//     rumpf.arc(this.x + 3.5 * r, this.y + 1.5 * r, 0.25 * r, 1.5 * Math.PI, 0.5 * Math.PI);
//     rumpf.lineTo(this.x + 2 * r, this.y + 2 * r);
//     rumpf.arc(this.x + 2 * r, this.y + r, r, 0.5 * Math.PI, Math.PI);
//     crc.fillStyle = "dodgerblue";
//     crc.strokeStyle = "orange";
//     crc.fill(rumpf);
//     crc.stroke(rumpf);
//     let auge: Path2D = new Path2D();
//     auge.arc(this.x + 2 * r, this.y + 0.5 * r, 0.25 * r, 0, 2 * Math.PI);
//     crc.fillStyle = "white";
//     crc.fill(auge);
//     crc.stroke(auge);
//     let iris: Path2D = new Path2D();
//     iris.arc(this.x + 2.1 * r, this.y + 0.5 * r, 0.1 * r, 0, 2 * Math.PI);
//     crc.fillStyle = "black";
//     crc.fill(iris);
//     crc.stroke(iris);
//     let fressfeld: Path2D = new Path2D();
//     fressfeld.rect(this.x + 3.5 * r, this.y + 0.35 * r, r, 1.5 * r);
//     crc.strokeStyle = "black";
//     crc.stroke(fressfeld);
// }
//# sourceMappingURL=SpaceFisch.js.map