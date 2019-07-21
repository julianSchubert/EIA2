namespace endtask {
    export class Futter extends AllesInBewegung {
        constructor(_x: number, _y: number) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * 0.3;
            this.dy = Math.random() * 4;
            //this.typ = 3;
        }

        draw(): void {
            let futter: Path2D = new Path2D();
            futter.arc(this.x, this.y, 3, Math.PI, 2 * Math.PI);
            futter.lineTo(this.x + 3, this.y + 10);
            futter.arc(this.x, this.y + 10, 3, 0, Math.PI);
            futter.bezierCurveTo(this.x + 1, this.y + 5, this.x - 4, this.y + 5, this.x - 3, this.y);
            crc.fillStyle = "burlywood";
            crc.strokeStyle = "saddlebrown";
            crc.fill(futter);
            crc.stroke(futter);
        }
          
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }
    }
}