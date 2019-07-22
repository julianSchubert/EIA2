namespace endtask {

    export function füttern(_event: MouseEvent): void {
        console.log("Hallo");
        let positionx: number = _event.clientX;
        let positiony: number = _event.clientY;
        for (let i: number = 0; i < 5; i++) {
            let futter: Futter = new Futter(positionx, positiony);
            allesInBewegungArray.push(futter);
        }
    }
    let anfrage: boolean = true;
    let spielerfisch: SpielerFisch = new SpielerFisch();
    allesInBewegungArray.push(spielerfisch);
    //Der Fisch wird von den anderen Fischen verdeckt, wann
    //die Instanz erstellt wurde ist relevant

    //Die Geschwindigkeit muss evt.noch angepasst werden
    //Kann der Fisch rückwärts schwimmen oder lasse ich a weg?

    export function fischbewegen(_event: KeyboardEvent): void {
        console.log("Check");
        let taste: number = _event.keyCode;
        if (taste == 87) {
            spielerfisch.dy = -5;
        }
        else if (taste == 83) {
            spielerfisch.dy = 5;
        }
        else if (taste == 65) {
            spielerfisch.dx = -5;
        }
        else if (taste == 68) {
            spielerfisch.dx = 5;
        }
    }

    export function fischstoppen(_event: KeyboardEvent): void {
        let taste: number = _event.keyCode;
        if (taste == 87) {
            spielerfisch.dy = 0;
        }
        else if (taste == 83) {
            spielerfisch.dy = 0;
        }
        else if (taste == 65) {
            spielerfisch.dx = 0;
        }
        else if (taste == 68) {
            spielerfisch.dx = 0;
        }
    }

    export function fressen(): number {
        
        for (let i: number = 0; i < allesInBewegungArray.length; i++) {
            let k: AllesInBewegung = allesInBewegungArray[i];
            
            if (spielerfisch.x + 30 > k.x && spielerfisch.x - 10 - 0.25 * spielerfisch.groesse < k.x && spielerfisch.y - 15 - 0.25 * spielerfisch.groesse < k.y && spielerfisch.y + 15 + 0.25 * spielerfisch.groesse  > k.y && allesInBewegungArray[i] != spielerfisch ) { 
            
                //geht sicher eleganter aber läuft 
                // läuft mit spielerfisch spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y 
                //spielerfisch.x + 2 * spielerfisch.groesse <= k.x && spielerfisch.x + 2 * spielerfisch.groesse + spielerfisch.groesse >= k.x && spielerfisch.y + 2 * spielerfisch.groesse <= k.y && spielerfisch.y + 2 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y 
                console.log(spielerfisch.x);
                //|| spielerfisch.x + 3.5 * spielerfisch.groesse <= k.x + 5 && spielerfisch.x + 3.5 * spielerfisch.groesse + spielerfisch.groesse >= k.x + 5 && spielerfisch.y + 0.35 * spielerfisch.groesse <= k.y + 5  && spielerfisch.y + 0.35 * spielerfisch.groesse + 1.5 * spielerfisch.groesse >= k.y + 5) {
                if (spielerfisch.groesse >= k.groesse) {
                    console.log("Erfolg");
                    if (k.typ == 1) {
                        allesInBewegungArray.splice(i, 1);
                        let fisch: Fisch = new PinkerFisch();
                        allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 0.1;
                        punktzahl += 1;
                        return punktzahl;
                    }
                    else if (k.typ == 2) {
                        allesInBewegungArray.splice(i, 1);
                        let fisch: OrangerFisch = new OrangerFisch();
                        allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 1;
                        punktzahl += 10;
                        return punktzahl;
                    }
                    else if (k.typ == 3) {
                        allesInBewegungArray.splice(i, 1);
                        let fisch: Fisch = new Fisch();
                        allesInBewegungArray.push(fisch);
                        spielerfisch.groesse += 1.5;
                        punktzahl += 15;
                        return punktzahl;
                    }
                    else if (k.typ == 4) {
                        allesInBewegungArray.splice(i, 1);
                        let blase: AllesInBewegung = new AllesInBewegung(Math.random());
                        allesInBewegungArray.push(blase);
                        spielerfisch.groesse += 0.5;
                        punktzahl += 5;
                        return punktzahl;
                    }
                }
                else if (spielerfisch.groesse < k.groesse) {
                    beenden();
                    duBistEinLoser();
                    return punktzahl;
                }
                return punktzahl;
            }
        }
        return punktzahl;
    }

    export function punktzahlEintragen(_punktzahl: number): void {
        let element: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        if (element.getContext) {
            let crc: CanvasRenderingContext2D = element.getContext("2d");
            let aktuellePunktzahl: string = "Punktzahl: " + String(_punktzahl);

            crc.clearRect(0, 0, element.width - 800, element.height - 600);
            crc.fillStyle = "white";
            crc.strokeStyle = "white";
            crc.lineWidth = 1;
            crc.font = "15px Arial";
            crc.textAlign = "center";
            crc.textBaseline = "middle";
            crc.fillText(aktuellePunktzahl, element.width - 400, element.height - 590);
            crc.strokeText(aktuellePunktzahl, element.width - 400, element.height - 590);
        }
    }

    function duBistEinLoser(): void {
        if (anfrage == true) {
            beenden();
            let punkte: string = String(punktzahl);
            spielername = prompt("Punktzahl:" + punkte, "Wie ist dein Name Kadett");
            insert();
            anfrage = false;
        }
        
    }

}
