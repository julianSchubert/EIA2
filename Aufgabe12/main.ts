namespace task12 {
        
    export function füttern(_event: MouseEvent): void {
        console.log("Hallo");
        let positionx: number =  _event.clientX;
        let positiony: number =  _event.clientY;
        for (let i: number = 0; i < 5; i++) {
            let futter: Futter = new Futter(positionx, positiony);
            allesInBewegungArray.push(futter);
        }
    }
}