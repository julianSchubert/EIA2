namespace Aufgabe5 {


	export interface WasEinEisBraucht {     //heterogen
		value: string;
		preis: number;
		type: string;
		name: string;
		id: string;
		min: string;
		max: string;
		step: string;
	}

	export interface Zuweisung {            //homogen
		[key: string]: WasEinEisBraucht[];  	//key typ string
		//key von typ Was ein Eis braucht
	}

	export let data: Zuweisung      //homogen //alles
		= {
		"Sorten 1€": [
			{ value: "Vanille", preis: 1, type: "number" , name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: "Schokolade", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: "Nuss", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: "Erdbeer", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"}
		],
		"Zusaetze 0.5€": [
			{ value: "Sahne", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"},
			{ value: "Soße", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"},
			{ value: "Streusel", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"}
		],
		"Behältnis": [
			{ value: "Becher", preis: 0.0, type: "radio", name: "be", id : "", min: "0", max: "0", step: "0" },
			{ value: "Waffel", preis: 0.0, type: "radio", name: "be", id : "", min: "0", max: "0", step: "0"}
		],
		"Lieferart (Lieferung 2€)": [
			{ value: "Abholung", preis: 0.0, type: "radio", name: "li", id : "abholen1", min: "0", max: "0", step: "0"},
			{ value: "Lieferung", preis: 2.0, type: "radio", name: "li", id : "abholen2", min: "0", max: "0", step: "0"}
		]
	};




}