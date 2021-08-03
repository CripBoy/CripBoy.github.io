import {e} from "./util.js";

// TODO: make it better
// replace a part of a string with another string
const replaceByIndex = (toReplace, toPut, start, end) => {
	return toReplace.slice(0, start) + toPut + toReplace.slice(start + end, toReplace.length);
};

const createTokenSpawn = (tokenName, type) => {
	return `<span class="hl-${type}"">${tokenName}</span>`;
};

const createCodeEditor = () => {
	const editor = e("pre", {
		contentEditable: true,
		spellcheck: false,
		textContent: `console.log("hello")`
	});

	const highLightText = () => {
		let code = editor.innerHTML;
		const tokens = Array.from(code.matchAll(/(\w+|.)/g));

		// evaluate each token
		for(const group of tokens) {
			const token = group["0"];
			const index = group.index;

			// if(systemWords.indexOf(token) != -1) {
				// code = replaceByIndex(code, createTokenSpawn(token, "system"), index, index + token.length);
			// }
		}

		editor.innerHTML = code;
	};

	highLightText();
	return editor;
};

export default createCodeEditor;