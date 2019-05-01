"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //es wird mit Node gearbeitet
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //schreibt Starting Server in die Konsole
    let port = Number(process.env.PORT); //erstellt Variable typ nummer Zuweisung //Alles zur Nummer umwandeln, was in der umgebungsvariable Port steht
    if (!port) //wenn port keine Nummer ist
        port = 8100; //dann setze port auf 8100 (unser Pc)
    let server = Http.createServer(); //neue Variable server vom typ Http.Server mit einem ertellten Server als Zuweisung
    server.addListener("request", handleRequest); //Event Listener namens "request"der auf eine Anfrage/einkommende Nachricht an den Server hört und dann handleRequest aufruft
    server.addListener("listening", handleListen); //Event Listener namens "listening" auf den Server handleListen wird ausgeführt
    server.listen(port); //die Serverinstanz hört auf den gegebenen  port in diesem Fall namens port
    function handleListen() {
        console.log("Listening"); //Ausgabe von Listening in der Konsole
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //ausgabe von I hear voices in der Konsole
        _response.setHeader("content-type", "text/html; charset=utf-8"); //ein header wird zu_response(response stream) hinzugefügt (des response stream ist unsere Antwort vom Servers auf unsere Anfrage)
        _response.setHeader("Access-Control-Allow-Origin", "*"); //der server _request kann auch von einer anderen Quelle als der Hauptseite aus aufgerufen werden
        _response.write(_request.url); //_request url  wird in _response reingeschrieben
        _response.end(); //_response wird geschlossen und an den client geschickt 
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map