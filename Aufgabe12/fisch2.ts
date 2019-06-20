namespace task12 {

    export class OrangerFisch {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x, this.y + 20);
            flosse.lineTo(this.x + 20, this.y + 15);
            flosse.closePath();
            crc.fillStyle = "darkorange";
            crc.strokeStyle = "orangered";
            crc.fill(flosse);
            crc.stroke(flosse);
            let hinten: Path2D = new Path2D();
            hinten.moveTo(this.x + 15, this.y + 15);
            hinten.lineTo(this.x + 45, this.y - 5);
            hinten.lineTo(this.x + 45, this.y + 35);
            hinten.closePath();
            crc.fillStyle = "darkorange";
            crc.strokeStyle = "orangered";
            crc.fill(hinten);
            crc.stroke(hinten);
            let kopf: Path2D = new Path2D();
            kopf.moveTo(this.x + 45, this.y - 5);
            kopf.bezierCurveTo(this.x + 20, this.y + 50, this.x + 200, this.y, this.x + 40, this.y + 35);
            crc.fillStyle = "darkorange";
            crc.strokeStyle = "orangered";
            crc.fill(kopf);
            crc.stroke(kopf);
            let auge: Path2D = new Path2D();
            auge.arc(this.x + 40, this.y + 5, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge);
            crc.stroke(auge);
            let iris: Path2D = new Path2D();
            iris.arc(this.x + 36, this.y + 5, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);
            crc.stroke(iris);
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x < 0) {
                this.x = 800;
            }
            if (this.y < 0) {
                this.y = 600;
            }
        }
    } 
}