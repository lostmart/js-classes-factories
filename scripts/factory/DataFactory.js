export default function dataFactory() {
	async function gringData(url) {
		try {
			const res = await fetch(url)
			const data = res.json()
			return data
		} catch (err) {
			console.log(err)
		}
	}

	return { gringData }
}
