namespace endtask {
    export class SpaceFisch extends AllesInBewegung {
        groesse: number;
        constructor() {
            super(Math.random());
            this.x = Math.random() * 600;
            this.y = 100;
            this.dx = 4;
            this.dy = 3;
            this.typ = 5;
            this.groesse = 40;
        }



        draw(): void {
            let r: number = this.groesse; //Radius der Kreise
            let rumpf: Path2D = new Path2D();
            rumpf.moveTo(this.x, this.y);
            rumpf.arc(this.x - 0.1 * r, this.y - 0.75 * r, 0.75 * r,  0.5 * Math.PI, 2 * Math.PI);
            rumpf.lineTo(this.x + 1.7 * r, this.y - 1.75 * r);
            rumpf.arc(this.x + 1.7 * r, this.y - 0.3 * r, 1.5 * r, 1.5 * Math.PI, 2 * Math.PI);
            rumpf.arc(this.x + 2.2 * r, this.y - 0.1 * r, r, 0, 0.5 * Math.PI);
            rumpf.arc(this.x, this.y + 0.6 * r, 0.5 * r, 0 , 1.25 * Math.PI);
            rumpf.moveTo(this.x, this.y + 1.1 * r);
            crc.fillStyle = "gold";
            crc.strokeStyle = "mediumturquoise";
            crc.fill(rumpf);
            crc.stroke(rumpf);
            let auge: Path2D = new Path2D();
            auge.arc(this.x  + 2 * r, this.y - 0.7 * r, 0.25 * r, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.fillStyle = "white";
            crc.fill(auge);
            crc.stroke(auge);
            let iris: Path2D = new Path2D();
            iris.arc(this.x + 1.9 * r, this.y - 0.7 * r, 0.1 * r, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);
            crc.stroke(iris);
        }
        move(): void {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y > 600) {
                this.y = 0;
            }
        }

    }
}