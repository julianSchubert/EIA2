namespace L11 {
    export class IceThreeScoops extends IceConeTwoScoops {
        color3: string;
        constructor(_color: string) {
            super(_color);
            this.color3 = "red";
        }

        draw(): void {
            let ice3: Path2D = new Path2D();
            ice3.arc(this.x, this.y - 200, 50, 0, 2 * Math.PI);
            crc.fillStyle = this.color3;
            crc.fill(ice3);
            super.draw();
            
        }

        move(): void{
            super.move();
        }
    }
}