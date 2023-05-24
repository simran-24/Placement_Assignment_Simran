function debounce(func, delay) {
	let timeoutId;

	return function (...args) {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}

function search() {
	console.log("Searching...");
}

const debouncedSearch = debounce(search, 300);
