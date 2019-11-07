var intro      			   	= document.getElementById('intro'),
		colours							= document.getElementById('colours'),
		coloursLow					= document.getElementById('colours-low'),
		coloursMedium				= document.getElementById('colours-medium'),
		coloursHigh					= document.getElementById('colours-high'),

		typography					= document.getElementById('typography'),
		typographyLow				= document.getElementById('typography-low'),
		typographyMedium		= document.getElementById('typography-medium'),
		typographyHigh			= document.getElementById('typography-high'),

		logo								= document.getElementById('logo'),
		logoLow							= document.getElementById('logo-low'),
		logoMedium					= document.getElementById('logo-medium'),
		logoHigh						= document.getElementById('logo-high'),

		visuals							= document.getElementById('visuals'),
		visualsLow					= document.getElementById('visuals-low'),
		visualsMedium				= document.getElementById('visuals-medium'),
		visualsHigh					= document.getElementById('visuals-high');

function showStep(step) {
	var clickedElement = event.target;

	step.classList.toggle("open");

	clickedElement.classList.toggle("clicked");

	if (clickedElement.classList.contains("choice")) {
		var parent = clickedElement.closest(".building-block__cost-levels"),
				siblings = clickedElement.parentNode.children;

		// Display down arrow
		parent.classList.toggle("arrow-down");
		parent.scrollIntoView({behavior: "smooth"});

		// Hide other choices
		for (var i = 0; i < siblings.length; i++) {
			if (siblings[i] !== clickedElement) {
				siblings[i].classList.toggle("hide");
			}
		}
	} else {
		var container = step.closest(".building-block");
		container.scrollIntoView({behavior: "smooth"});
	}

}
