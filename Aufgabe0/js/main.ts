
function Ausführen():void{
    var Name:string = prompt("Bitte Name eingeben", "Darth Vader");
   


    if(Name != null){
        
        document.getElementById("Einfügen").innerHTML =
  "Hi " + Name + "!Schöne Website,oder?";
    }
    console.log("Hi " + Name + "!Schöne Website,oder?")
}


Ausführen();