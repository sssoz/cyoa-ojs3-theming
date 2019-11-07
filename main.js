var intro      			  	 	= document.getElementById('intro'),
		colours								= document.getElementById('colours'),
		coloursLow						= document.getElementById('colours-low'),
		coloursMedium					= document.getElementById('colours-medium'),
		coloursHigh						= document.getElementById('colours-high'),

		typography						= document.getElementById('typography'),
		typographyLow					= document.getElementById('typography-low'),
		typographyMedium			= document.getElementById('typography-medium'),
		typographyMediumMore	= document.getElementById('typography-medium-more'),
		typographyHigh				= document.getElementById('typography-high'),
		typographyHighMore		= document.getElementById('typography-high-more'),

		logo									= document.getElementById('logo'),
		logoLow								= document.getElementById('logo-low'),
		logoMedium						= document.getElementById('logo-medium'),
		logoMediumMore				= document.getElementById('logo-medium-more'),
		logoHigh							= document.getElementById('logo-high'),
		logoHighMore					= document.getElementById('logo-high-more'),

		visuals								= document.getElementById('visuals'),
		visualsLow						= document.getElementById('visuals-low'),
		visualsMedium					= document.getElementById('visuals-medium'),
		visualsMediumMore			= document.getElementById('visuals-medium-more');

function showStep(step) {
	var clickedElement = event.target;

	step.classList.toggle("open");

	clickedElement.classList.toggle("clicked");

	if (clickedElement.classList.contains("choice")) {
		var parent = clickedElement.closest(".building-block__cost-levels, .choices"),
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
