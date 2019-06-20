var task12;
(function (task12) {
    class IceConeTwoScoops extends task12.DingeUnterWasser {
        // constructor(_color: string) {
        // 	//super(_color);
        // 	this.color2 = "blue";
        // }
        draw() {
            let ice2 = new Path2D();
            ice2.arc(this.x, this.y - 160, 50, 0, 2 * Math.PI);
            task12.crc.fillStyle = this.color2;
            task12.crc.fill(ice2);
            //super.draw();
        }
        move() {
            //;
        }
    }
    task12.IceConeTwoScoops = IceConeTwoScoops;
})(task12 || (task12 = {}));
//# sourceMappingURL=IceConeTwoScoops.js.map