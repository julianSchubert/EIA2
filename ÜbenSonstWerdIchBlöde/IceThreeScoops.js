var L11;
(function (L11) {
    class IceThreeScoops extends L11.IceConeTwoScoops {
        constructor(_color) {
            super(_color);
            this.color3 = "red";
        }
        draw() {
            let ice3 = new Path2D();
            ice3.arc(this.x, this.y - 200, 50, 0, 2 * Math.PI);
            L11.crc.fillStyle = this.color3;
            L11.crc.fill(ice3);
            super.draw();
        }
        move() {
            super.move();
        }
    }
    L11.IceThreeScoops = IceThreeScoops;
})(L11 || (L11 = {}));
//# sourceMappingURL=IceThreeScoops.js.map