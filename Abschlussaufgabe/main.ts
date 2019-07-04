namespace endtask {
        
    export function füttern(_event: MouseEvent): void {
        console.log("Hallo");
        let positionx: number =  _event.clientX;
        let positiony: number =  _event.clientY;
        for (let i: number = 0; i < 5; i++) {
            let futter: Futter = new Futter(positionx, positiony);
            allesInBewegungArray.push(futter);
        }
    }

    //Punktzahlberechnung und Eintragung

    export function punktzahlBerechnen(_typ: number): number {
        let punktzahl: number = 0;
        let fischtyp: number = _typ;
        //Hier die if abfrage nach dem Typ
        if (fischtyp == 1) {
        punktzahl += 15;
        }
        else if (fischtyp == 2) {
            punktzahl += 30;
        }
        else if (fischtyp == 3) {
         punktzahl += 4;
        }
        console.log(punktzahl);
        return punktzahl;

    }

    export function punktzahlEintragen(_punktzahl: number): void {
        console.log("Geht es?");
        let element: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        if (element.getContext) {
          let crc: CanvasRenderingContext2D = element.getContext("2d");
          let aktuellePunktzahl: string = "Punktzahl: " + String(_punktzahl);
     
          crc.clearRect(0, 0, element.width - 800, element.height - 600);
          crc.fillStyle = "black";
          crc.strokeStyle = "black";
          crc.lineWidth = 2;
          crc.font = "15px Arial";
          crc.textAlign = "center";
          crc.textBaseline = "middle";
          crc.fillText(aktuellePunktzahl, element.width - 400  , element.height - 590);
          //crc.strokeText(aktuellePunktzahl, element.width - 400, element.height - 590);
        }
    }
}