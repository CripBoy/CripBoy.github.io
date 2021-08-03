export const $ = (selector) => {
	let el = document.querySelectorAll(selector);
	el = el.length > 1 ? el : el[0]; // prevent multiple element selection

	// register some event
	el.event = (eventType, callback) => {

		// add event for multiple elements
		if(el.length > 1) {
			for(let i = 0; i < el.length; i++) {
				el[i].addEventListener(eventType, callback);
			}

		// single element event
		} else {
			el.addEventListener(eventType, callback);
		}
	};

	return el;
};

export const getImageFromComputer = () => {
	return new Promise((resolve, reject) => {

		// create a fake input to oepn browser files API 
		const input = document.createElement("input");

		input.type = "file";
		input.accept = "image/*";

		// on file attached event
		input.onchange = () => {

			// create a reader to get the data URL
			const reader = new FileReader();

			// when the reader has been done
			reader.onload = (event) => {

				// create an image
				const img = new Image();
				img.src = event.target.result;

				// return the image
				resolve(img);
			};

			reader.readAsDataURL(input.files[0]);
		};

		input.click();
	});
};

export const e = (tag, props, ...inside) => {
	const el = document.createElement(tag);

	// set dymaic all props
	for(const propName in props) {
		el[propName] = props[propName];
	}

	// if have something inside, append it
	if(inside) {
		for(let i = 0; i < inside.length; i++) {
			el.appendChild(inside[i]);			
		}
	}

	return el;
};