var endtask;
(function (endtask) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-julian.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + endtask.spielername;
        query += "&punktzahl" + endtask.punktzahl;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    endtask.insert = insert;
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function suche(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=search";
        query += "&suche=" + inputs[3].value;
        sendRequest(query, handleFindResponse);
    }
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
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(endtask || (endtask = {}));
//# sourceMappingURL=DBClient.js.map