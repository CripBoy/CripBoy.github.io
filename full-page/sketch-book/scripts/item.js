import {$, e, getImageFromComputer} from "/scripts/util.js";
import createEditor from "/scripts/editor.js";

const createItemContainer = () => {
	const item = e("div", {className: "item"},

		// item menu
		e("div", {className: "item-menu"},

			// delete item button
			e("div", {className: "action-option"},
				e("img", {src: "/content/delete.png"})
			),

			// drag item button
			e("div", {className: "action-option"},
				e("img", {src: "/content/move.png"})
			),
		),
	);

	return item;
};

const addItem = (event) => {
	const itemType = event.currentTarget.getAttribute("data-opt");
	const stackContainer = $("#items-stack");
	const itemContainer = createItemContainer();

	switch(itemType) {

		// adding a code editor
		case "code": {
			itemContainer.append(createEditor());
		} break;

		// adding a image to the item stack
		case "image": {
			getImageFromComputer().then(image => {
				itemContainer.append(e("center", {}, image));
			});
		} break;

		case "paragraph": {
			itemContainer.append(e("p", {
				contentEditable: true,
				spellcheck: false,
				textContent: "Paragraph"
			}));
		} break;

		case "header": {
			itemContainer.append(e("h1", {
				contentEditable: true,
				spellcheck: false,
				textContent: "Header"
			}));
		} break;
	}

	stackContainer.append(itemContainer);
};

export default addItem;