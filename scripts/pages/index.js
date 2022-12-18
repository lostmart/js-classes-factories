/* imports data factory */
import dataFactoryFn from "../factory/DataFactory.js"
/* imports user factory */
import userFactory from "../factory/UserFactory.js"

/* function from dataFactory  */
const dataFactory = new dataFactoryFn()
const app = document.querySelector("#app")

const url = "https://jsonplaceholder.typicode.com/users"

dataFactory.gringData(url).then((res) => {
	console.log(res)
	res.forEach((user, indx) => {
		const factoryUsr = new userFactory(user)
		app.appendChild(factoryUsr.article(indx))
		console.log(factoryUsr.article(indx))
	})
})
