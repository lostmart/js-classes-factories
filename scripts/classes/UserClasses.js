export default class User {
	constructor({ id, name, username, email, phone, website }) {
		this.name = name
		this.id = id
		this.username = username
		this.email = email
		this.phone = phone
		this.website = website
	}

	giveName() {
		const title = document.createElement("h2")
		title.textContent = `My name is ${this.name}`
		return title
	}
}
