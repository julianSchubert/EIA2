var task12;
(function (task12) {
    class Blubb {
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            task12.crc.fillStyle = "cyan";
            task12.crc.strokeStyle = "blue";
            task12.crc.fill(blase);
            task12.crc.stroke(blase);
        }
    }
    task12.Blubb = Blubb;
})(task12 || (task12 = {}));
//# sourceMappingURL=blasen.js.map