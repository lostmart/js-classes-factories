export default class User {
	constructor({ id, name, username, email, phone, website, address }) {
		this.name = name ?? null
		this.id = id ?? null
		this.username = username ?? null
		this.email = email ?? null
		this.phone = phone ?? null
		this.website = website ?? null
		this.address = address ?? null
	}
}
