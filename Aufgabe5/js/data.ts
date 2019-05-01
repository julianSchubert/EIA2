namespace Aufgabe5 {


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
			{ value: 0, text: "Vanille", preis: 1, type: "number" , name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: 0, text: "Schokolade", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: 0, text: "Nuss", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"},
			{ value: 0, text: "Erdbeer", preis: 1, type: "number", name: "", id : "", min: "0", max: "10", step: "1"}
		],
		"Zusaetze": [
			{ value: 0, text: "Sahne", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"},
			{ value: 0, text: "Soße", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"},
			{ value: 0, text: "Streusel", preis: 0.5, type: "checkbox", name: "", id : "", min: "0", max: "0", step: "0"}
		],
		"Behältnis": [
			{ value: 0, text: "Becher", preis: 0.0, type: "radio", name: "be", id : "", min: "0", max: "0", step: "0" },
			{ value: 0, text: "Waffel", preis: 0.0, type: "radio", name: "be", id : "", min: "0", max: "0", step: "0"}
		],
		"Lieferart" : [
			{ value: 0, text: "Abholung", preis: 0.0, type: "radio", name: "li", id : "abholen1", min: "0", max: "0", step: "0"},
			{ value: 0, text: "Lieferung", preis: 2.0, type: "radio", name: "li", id : "abholen2", min: "0", max: "0", step: "0"}
		]
	};




}