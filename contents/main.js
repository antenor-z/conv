function convert(e, factor, inputA, inputB) {
	const target = e.target

	// On invalid value, don't do anything
	if (isNaN(target.value)) {
		return
	} 

	const toBeConverted = parseFloat(target.value)

	if (target === inputA) {
		const converted = toBeConverted * factor
		inputB.value = Number(converted.toFixed(4))
	}
	else if (target === inputB) {
		const converted = toBeConverted / factor
		inputA.value = Number(converted.toFixed(4))
	}
}

function convertTemp(e, inputA, inputB) {
	const target = e.target

	// On invalid value, don't do anything
	if (isNaN(target.value)) {
		return
	} 

	const toBeConverted = parseFloat(target.value)

	if (target === inputA) {
		const converted = 5 * (toBeConverted - 32) / 9
		inputB.value = Number(converted.toFixed(4))
	}
	else if (target === inputB) {
		const converted = 9 * toBeConverted / 5 + 32
		inputA.value = Number(converted.toFixed(4))
	}
}

const FACTORS = [0.3048, 2.54, 1.852, 33.8639, 1.609344]

inputPes.addEventListener("input", (e) => 
	convert(e, FACTORS[0], inputPes, inputMetros))
inputMetros.addEventListener("input", (e) => 
	convert(e, FACTORS[0], inputPes, inputMetros))

inputPol.addEventListener("input", (e) => 
	convert(e, FACTORS[1], inputPol, inputCm))
inputCm.addEventListener("input", (e) => 
	convert(e, FACTORS[1], inputPol, inputCm))

inputKmh.addEventListener("input", (e) => 
	convert(e, FACTORS[2], inputKts, inputKmh))
inputKts.addEventListener("input", (e) => 
	convert(e, FACTORS[2], inputKts, inputKmh))

inputinHg.addEventListener("input", (e) => 
	convert(e, FACTORS[3], inputinHg, inputhPa))
inputhPa.addEventListener("input", (e) => 
	convert(e, FACTORS[3], inputinHg, inputhPa))

inputMi.addEventListener("input", (e) => 
	convert(e, FACTORS[4], inputMi, inputKm))
inputKm.addEventListener("input", (e) => 
	convert(e, FACTORS[4], inputMi, inputKm))

inputC.addEventListener("input", (e) => 
	convertTemp(e, inputF, inputC))
inputF.addEventListener("input", (e) => 
	convertTemp(e, inputF, inputC))
