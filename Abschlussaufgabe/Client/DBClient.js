var endtask;
(function (endtask) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-julian.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endtask.spielername;
        query += "&punktzahl=" + endtask.punktzahl;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    endtask.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    endtask.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            endtask.alleSpielerArray = JSON.parse(xhr.response);
            for (let i = 0; i < endtask.alleSpielerArray.length; i++) {
                endtask.alleSpielerArray.sort(sortiereHighscore);
            }
            writeHTML();
            console.log(endtask.alleSpielerArray);
        }
    }
    function sortiereHighscore(a, b) {
        let punktzahlA = a.punktzahl;
        let punktzahlB = b.punktzahl;
        if (punktzahlA < punktzahlB) {
            return 1;
        }
        if (punktzahlA > punktzahlB) {
            return -1;
        }
        return 0;
    }
    function writeHTML() {
        for (let i = 0; i < 5; i++) {
            console.log("HowYouDoin");
            let highscoreElement = document.createElement('div');
            let highscoreliste = `<p>${endtask.alleSpielerArray[i].name}:${endtask.alleSpielerArray[i].punktzahl}</p>`;
            highscoreElement.innerHTML = highscoreliste;
            document.getElementById("anhängen").appendChild(highscoreElement);
        }
    }
})(endtask || (endtask = {}));
//# sourceMappingURL=DBClient.js.map