namespace Aufgabe7 {


	export interface WasEinEisBraucht {     //heterogen
		value: number;
		preis: number;
		type: string;
		name: string;
		id: string;
		min: string;
		max: string;
		step: string;
		text: string;
	}

	export interface Zuweisung {            //homogen
		[key: string]: WasEinEisBraucht[];  	//key typ string
		//key von typ Was ein Eis braucht
	}

	export let data: Zuweisung      //homogen //alles
		= {
		"Sorten": [
			{ value: 0, text: "Vanille", preis: 1, type: "number", name: "Vanille", id: "", min: "0", max: "10", step: "1" },
			{ value: 0, text: "Schokolade", preis: 1, type: "number", name: "Schokolade", id: "", min: "0", max: "10", step: "1" },
			{ value: 0, text: "Nuss", preis: 1, type: "number", name: "Nuss", id: "", min: "0", max: "10", step: "1" },
			{ value: 0, text: "Erdbeer", preis: 1, type: "number", name: "Erdbeer", id: "", min: "0", max: "10", step: "1" }
		],
		"Zusaetze": [
			{ value: 0, text: "Sahne", preis: 0.5, type: "checkbox", name: "Sahne", id: "", min: "0", max: "0", step: "0" },
			{ value: 0, text: "Sosse", preis: 0.5, type: "checkbox", name: "Soße", id: "", min: "0", max: "0", step: "0" },
			{ value: 0, text: "Streusel", preis: 0.5, type: "checkbox", name: "Streusel", id: "", min: "0", max: "0", step: "0" }
		],
		"Behältnis": [
			{ value: 0, text: "Becher", preis: 0.0, type: "radio", name: "verpackung", id: "verpackung1", min: "0", max: "0", step: "0" },
			{ value: 0, text: "Waffel", preis: 0.0, type: "radio", name: "verpackung", id: "verpackung2", min: "0", max: "0", step: "0" }
		],
		"Lieferart": [
			{ value: 0, text: "Abholung", preis: 0.0, type: "radio", name: "lieferart", id: "abholen1", min: "0", max: "0", step: "0" },
			{ value: 0, text: "Lieferung", preis: 2.0, type: "radio", name: "lieferart", id: "abholen2", min: "0", max: "0", step: "0" }
		]
	};


	
}