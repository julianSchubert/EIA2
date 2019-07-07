
namespace endtask {
    export class SpielerFisch extends AllesInBewegung {
        groesse: number;
        constructor(_event: KeyboardEvent) {
            super(Math.random());
            this.x = 400;
            this.y = 300;
            this.dx = 5;
            this.dy = 5;
        }
        
        draw(): void {
            let r: number = 20; //Radius der Kreise
            let hintereflosse: Path2D = new Path2D();
            hintereflosse.arc(this.x, this.y + 2 * r, r , 1.5 * Math.PI, Math.PI, true);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y + 3 * r);
            hintereflosse.lineTo(this.x, this.y + 2 * r);
            hintereflosse.arc(this.x + r, this.y + 2 * r, r, Math.PI, 1.5 * Math.PI);
            hintereflosse.arc(this.x + r, this.y, r, 0.5 * Math.PI, Math.PI);
            hintereflosse.lineTo(this.x - 0.5 * r, this.y  - r);
            hintereflosse.lineTo(this.x - r, this.y);
            hintereflosse.arc(this.x, this.y, r, Math.PI, 0.5 * Math.PI, true);
            hintereflosse.closePath();
            crc.fillStyle = "lime";
            crc.strokeStyle = "lime";
            crc.fill(hintereflosse);
            crc.stroke(hintereflosse);
            let rumpf: Path2D = new Path2D();
            rumpf.moveTo(this.x + r, this.y + r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, Math.PI, 1.5 * Math.PI);
            rumpf.lineTo(this.x + 3 * r, this.y + 0.25 * r); 
            rumpf.arc(this.x + 3.5 * r, this.y + 0.6 * r, 0.5 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.arc(this.x + 3.5 * r, this.y + 1.5 * r, 0.25 * r, 1.5 * Math.PI, 0.5 * Math.PI);
            rumpf.lineTo(this.x + 2 * r, this.y + 2 * r);
            rumpf.arc(this.x + 2 * r, this.y + r, r, 0.5 * Math.PI, Math.PI);
            crc.fillStyle = "lime";
            crc.strokeStyle = "olive";
            crc.fill(rumpf);
            crc.stroke(rumpf);
            //Muss noch gemacht werden
            let auge: Path2D = new Path2D();
            auge.arc(this.x + 2 * r, this.y + 0.5 * r, 0.25 * r, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge);
            crc.stroke(auge);
            let iris: Path2D = new Path2D();
            iris.arc(this.x + 2.1 * r, this.y + 0.5 * r, 0.1 * r, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(iris);
            crc.stroke(iris);
         }
         move(): void {
             //
         }
         update(): void {
            this.movespecial();
         }
         movespecial(_event: KeyboardEvent): void {
            let taste: number = _event.keyCode;
            if (taste == 87) {
                this.y -= this.dy;
                console.log("HAllo");
            }
         }
    }
}