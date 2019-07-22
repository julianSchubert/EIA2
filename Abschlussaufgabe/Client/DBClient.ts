namespace endtask {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-julian.herokuapp.com/";



    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + spielername;
        query += "&punktzahl=" + punktzahl;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }



    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    export let alleSpielerArray: Name[];
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alleSpielerArray = JSON.parse(xhr.response);
            for (let i: number = 0; i < alleSpielerArray.length; i++) {
                alleSpielerArray.sort(sortiereHighscore);
            } 
            console.log(alleSpielerArray);
        }

    }
    function sortiereHighscore(a: Name, b: Name): number {
        let punktzahlA: number = a.punktzahl;
        let punktzahlB: number = b.punktzahl;
        if (punktzahlA < punktzahlB) {
            return 1;
        }
        if (punktzahlA > punktzahlB) {
            return -1;
        }
        return 0;
    }
}
