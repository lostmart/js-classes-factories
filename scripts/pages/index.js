/* imports data factory */
import dataFactoryFn from '../factory/DataFactory.js'
/* imports user factory */
import userFactory from '../factory/UserFactory.js'

import textContainer from '../factory/DomFactory.js'

/* function from dataFactory  */
const dataFactory = new dataFactoryFn()
const app = document.querySelector('#app')

const url = 'https://jsonplaceholder.typicode.com/users'

dataFactory.gringData(url).then((res) => {
	const section = textContainer('section', '', 'cardCont')
	app.appendChild(textContainer('h2', 'Group Members', 'group__title'))
	res.forEach((user, indx) => {
		const factoryUsr = new userFactory(user)
		section.appendChild(factoryUsr.article(indx))
		// console.log(factoryUsr.article(indx))
	})
	app.appendChild(section)
})
