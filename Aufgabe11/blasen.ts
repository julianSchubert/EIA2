namespace task11{

    export class Blubb {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let blase: Path2D = new Path2D();
            blase.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc.fillStyle = "cyan";
            crc.strokeStyle = "blue";
            crc.fill(blase);
            crc.stroke(blase);
        }
        update(): void {
            this.move();
            this.draw();
        }
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 800) {
                this.x = 570;
                this.y = 490;
            }
            if (this.y < 0) {
                this.y = 490;
                this.x = Math.random() * 90 + 560 ;
            }
        }
    }
}