export default class serverData {
	constructor(url) {
		this.url = url
	}
	async bringData() {
		const res = await fetch(this.url)
		const data = await res.json()
		return data
	}
}
