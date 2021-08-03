import {$} from "/scripts/util.js";
import addItem from "/scripts/item.js";

const registerEvents = () => {
	$("#add-item .add-option").event("click", addItem);
};

registerEvents();