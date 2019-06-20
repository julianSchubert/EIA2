namespace task12 {
	export class IceConeTwoScoops extends DingeUnterWasser {
		color2: string;

		// constructor(_color: string) {
		// 	//super(_color);
		// 	this.color2 = "blue";
		// }

		draw(): void {
			let ice2: Path2D = new Path2D();
			ice2.arc(this.x, this.y - 160, 50, 0, 2 * Math.PI);
			crc.fillStyle = this.color2;
			crc.fill(ice2);
			//super.draw();
		}

		move(): void {
			//;
		}
	}
}