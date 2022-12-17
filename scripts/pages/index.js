import dataFactory from "../factory/DataFactory.js"
import userFactory from "../factory/UserFactory.js"

const dataDFactory = new dataFactory()
const app = document.querySelector("#app")

const url = "https://jsonplaceholder.typicode.com/users"
dataDFactory.gringData(url).then((res) => {
	console.log(res)
	res.forEach((user) => {
		const rightUser = new userFactory(user)
		app.appendChild(rightUser.article())
	})
})

/*

new promise ?

*/
