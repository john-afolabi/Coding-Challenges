function hourglassSum(arr) {
	let maxNum = null;
	for (let i = 1; i < arr.length - 1; i++) {
		for (
			let j = 1;
			j <
			arr.length -
				1;
			j++
		) {
			const num =
				arr[
					i
				][
					j
				] +
				arr[
					i -
						1
				][
					j
				] +
				arr[
					i -
						1
				][
					j -
						1
				] +
				arr[
					i -
						1
				][
					j +
						1
				] +
				arr[
					i +
						1
				][
					j
				] +
				arr[
					i +
						1
				][
					j -
						1
				] +
				arr[
					i +
						1
				][
					j +
						1
				];
			if (
				num >
				maxNum
			) {
				maxNum = num;
			}
			if (
				maxNum ===
				null
			) {
				maxNum = num;
			}
		}
	}

	return maxNum;
}

f;
