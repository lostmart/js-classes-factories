import User from "../classes/UserClasses.js"

export default function userFactory(newUser) {
	function giveName() {
		const title = document.createElement("h2")
		title.textContent = newUser.name
		return title
	}
	function textContainer(item, text) {
		const cont = document.createElement(item)
		cont.textContent = text
		return cont
	}
	function article() {
		const article = document.createElement("article")
		article.appendChild(textContainer("h2", newUser.name))
		article.appendChild(textContainer("p", `UserName: ${newUser.username}`))
		article.appendChild(textContainer("p", `Email: ${newUser.email}`))
		article.appendChild(textContainer("p", `Phone: ${newUser.phone}`))
		return article
	}
	return { newUser, article }
}
