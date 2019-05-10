namespace Aufgabe7 {

    export function sendRequestWithCustomData(_adresse: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", _adresse , true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        console.log(_adresse);
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);

            let neues: HTMLElement;
            document.getElementById("Reinpacken").innerHTML = "";
            neues = document.getElementById("Reinpacken");
            neues.innerHTML += xhr.response;
            
            //document.getElementById("sorten").value = response (HTML)
            // let neues:  JSON;
            // JSON.parse("neues");
            // JSON.data
        }

        
    }
} 