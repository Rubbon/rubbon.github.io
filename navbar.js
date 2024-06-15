
const dia_nav_home 		= "This will bring you right back to me if you get lost!";
const dia_nav_about 	= "Go here for the hard facts and information.";
const dia_nav_games 	= "An ocean of games await!";
const dia_nav_art 		= "This heads over to the art zone!";
const dia_nav_contact 	= "Want to get in touch?";

const dia_nav_unhover 	= "How may I help you?";

const arr_navid = [
	"nbo_home",
	"nbo_about",
	"nbo_games",
	"nbo_art",
	"nbo_contact",
];

class NavBar extends HTMLElement {
	static observedAttributes = ["activeIndex"];

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<head>
		</head>

		<header>
			<nav>
				<navbar-wrapper id = "navbar_wrapper">
					<navbar-opt id = "nbo_home"> <a href="index.html">
						<img onmouseover="DialogueUpdate(dia_nav_home, 'img/pointer_1_pleased.png')" onmouseout="DialogueUpdate(dia_nav_unhover, 'img/pointer_1_animated.gif')" src="img/navopt_front.png"></img>
					</a> </navbar-opt>
					<br>
					<navbar-opt id = "nbo_about"> <a href="about.html">
						<img onmouseover="DialogueUpdate(dia_nav_about, 'img/pointer_1_pleased.png')" onmouseout="DialogueUpdate(dia_nav_unhover, 'img/pointer_1_animated.gif')" src="img/navopt_about.png"></img>
					</a> </navbar-opt>
					<br>
					<navbar-opt id = "nbo_games"> <a href="games.html">
						<img onmouseover="DialogueUpdate(dia_nav_games, 'img/pointer_1_pleased.png')" onmouseout="DialogueUpdate(dia_nav_unhover, 'img/pointer_1_animated.gif')" src="img/navopt_games.png"></img>
					</a> </navbar-opt>
					<br>
					<navbar-opt id = "nbo_art"> <a href="art.html">
						<img onmouseover="DialogueUpdate(dia_nav_art, 'img/pointer_1_pleased.png')" onmouseout="DialogueUpdate(dia_nav_unhover, 'img/pointer_1_animated.gif')" src="img/navopt_art.png"></img>
					</a> </navbar-opt>
					<br>
					<navbar-opt id = "nbo_contact"> <a href="contact.html">
						<img onmouseover="DialogueUpdate(dia_nav_contact, 'img/pointer_1_love.gif')" onmouseout="DialogueUpdate(dia_nav_unhover, 'img/pointer_1_animated.gif')" src="img/navopt_contact.png"></img>
					</a> </navbar-opt>
					<br>
				</navbar-wrapper>
			</nav>
		</header>
		`;

		if (this.hasAttribute("activeIndex")) {
			var _index = this.getAttribute("activeIndex");

			//move all opts back a bit, if we're not on the landing
			if (_index > 0){
				var _element = document.getElementById("navbar_wrapper");
				if (_element != null) _element.className = "navbar_wrapper_nohome";
			}			

			//highlight selected opt
			var _element = document.getElementById(arr_navid[_index]);
			_element.className = "navopt_s";
		}
	  }

	  attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed.`);

		dspan.innerText = newValue;
	}
}
customElements.define('jsc-navbar', NavBar);


function StartDialogueAnim(){
	var _element = document.getElementById("dialogue");
	if (_element == null) return;
	_element.className = "d_animate";
}

function DialogueUpdate(d_txt, imgsrc) {
	//make dialogue box type-out
	var _element = document.getElementById("dialogue");
	if (_element == null) return;
	_element.className = "d_noanim";
	setTimeout(StartDialogueAnim, 0);

	//update dialogue text
	var _element = document.getElementById("dspan");
	if (_element == null) return;

	_element.innerText = d_txt;

	//update chat spr
	_element = document.getElementById("img_receptionist");
	if (_element == null) return;

	_element.src = imgsrc;
}