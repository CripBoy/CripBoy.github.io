import {$} from "./util.js";
import addItem from "./item.js";

const registerEvents = () => {
	$("#add-item .add-option").event("click", addItem);
};

registerEvents();