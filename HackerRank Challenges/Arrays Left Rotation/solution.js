function rotLeft(a, d) {
	const arr = [...a];

	while (d > 0) {
		const num = arr.shift();
		arr.push(num);
		d--;
	}

	return arr;
}
