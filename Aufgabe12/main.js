var task12;
(function (task12) {
    function füttern(_event) {
        console.log("Hallo");
        let positionx = _event.clientX;
        let positiony = _event.clientY;
        for (let i = 0; i < 5; i++) {
            let futter = new task12.Futter(positionx, positiony);
            task12.allesInBewegungArray.push(futter);
        }
    }
    task12.füttern = füttern;
})(task12 || (task12 = {}));
//# sourceMappingURL=main.js.map