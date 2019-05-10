var Aufgabe7;
(function (Aufgabe7) {
    function sendRequestWithCustomData(_adresse) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", _adresse, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        console.log(_adresse);
    }
    Aufgabe7.sendRequestWithCustomData = sendRequestWithCustomData;
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            let neues;
            document.getElementById("Reinpacken").innerHTML = "";
            neues = document.getElementById("Reinpacken");
            neues.innerHTML += xhr.response;
            //document.getElementById("sorten").value = response (HTML)
            // let neues:  JSON;
            // JSON.parse("neues");
            // JSON.data
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=SendData.js.map