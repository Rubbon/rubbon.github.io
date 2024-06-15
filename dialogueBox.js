class DialogueBox extends HTMLElement {
	static observedAttributes = ["text"];

	constructor() {
		super();
	}

    connectedCallback() {
		//set starting text
		dspan.innerText = "Welcome to Robin Field's portfolio, traveller!\n\nHow may I help you?";
    }

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed.`);

		dspan.innerText = newValue;
	}

}

customElements.define('jsc-dialogue-box', DialogueBox);


var _element = document.getElementById("dialogue");
if (_element != null) _element.className = "d_animate";


/*
document.getElementById("dialogue").className = "d_animate";


function StartAnimation(){
	document.getElementById("dialogue").className = "d_animate";
}


function DialogueUpdate(_d_txt) {
	//dspan.innerText = "bopppo!";
	//var dtext = window.getComputedStyle(document.documentElement).getPropertyValue('--d_txt');
	dspan.innerText = _d_txt;
	document.getElementById("dialogue").className = "";
	setTimeout(StartAnimation, 1);
}

function ChangeImgSrc(_id, _img){
	_id.src = _img;
}
*/