namespace endtask {
    export class Ufo extends SpaceFisch {

        constructor() {
            super();
            this.x = 200;
            this.y = 200;
            this.dx = 1 ;
            this.dy = 10;
            this.typ = 8;
            this.groesse = 50;
        }

        draw(): void {
            let dach: Path2D = new Path2D();
            dach.moveTo(this.x, this.y);
            dach.moveTo(this.x - 2 * this.groesse, this.y);
            dach.quadraticCurveTo(this.x, this.y - 2 * this.groesse, this.x + 2 * this.groesse, this.y);
            dach.lineTo(this.x - 2 * this.groesse, this.y);
            crc.fillStyle = "lightskyblue";
            crc.strokeStyle = "black";
            crc.fill(dach);
            crc.stroke(dach);
            let mitte: Path2D = new Path2D();
            mitte.moveTo(this.x - 2 * this.groesse, this. y);
            mitte.quadraticCurveTo(this.x - 2.5 * this.groesse, this.y + 0.8 * this.groesse, this.x - 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.lineTo(this.x + 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.moveTo(this.x + 2 * this.groesse, this.y + 1 * this.groesse);
            mitte.quadraticCurveTo(this.x + 2.5 * this.groesse, this. y + 0.8 * this.groesse, this.x + 2 * this.groesse, this.y);
            mitte.lineTo(this.x - 2 * this.groesse, this.y);
            crc.fillStyle = "rebeccapurple";
            crc.strokeStyle = "black";
            crc.fill(mitte);
            crc.stroke(mitte);
            let unten: Path2D = new Path2D();
            unten.moveTo(this.x - 2 * this.groesse, this.y + this.groesse);
            unten.quadraticCurveTo(this.x, this. y + 2 * this.groesse, this.x + 2 * this.groesse, this.y + this.groesse);
            crc.fillStyle = "purple";
            crc.strokeStyle = "black";
            crc.fill(unten);
            crc.stroke(unten);
        }

        move(): void {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y > 590) {
                this.dy = -10;
            }
            if (this.y < 10) {
                this.dy = + 10;
            }
        }

    }
}