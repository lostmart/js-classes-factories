import User from '../classes/UserClasses.js'
import textContainer from './DomFactory.js'
import photos from '../../photos.js'

export default function userFactory(newUser) {
	// user from class model
	const newUserModel = new User(newUser)
	// console.log(newUserModel)

	function article(indx) {
		const article = document.createElement('article')
		article.classList.add('cardCont')

		const card = textContainer('div', '', 'card')
		card.classList.add('pink')
		card.classList.add('pink')
		card.classList.add('lighten-1')

		const cardImage = textContainer('div', '', 'card-image')
		cardImage.classList.add('waves-effect')
		cardImage.classList.add('waves-block')
		cardImage.classList.add('waves-light')

		const image = document.createElement('img')
		image.classList.add('activator')
		image.src = photos[indx]

		const cardContent = textContainer('div', '', 'card-content')

		const cardSpan = cardContent.appendChild(
			textContainer('span', newUserModel.name, 'card-title')
		)
		cardSpan.classList.add('activator')
		cardSpan.classList.add('white-text')

		const icon = textContainer('i', 'more_vert', 'material-icons')
		icon.classList.add('right')
		cardSpan.appendChild(icon)

		cardImage.appendChild(image)
		card.appendChild(cardImage)
		card.appendChild(cardContent)
		article.appendChild(card)
		return article
	}

	function giveName() {
		const title = document.createElement('h2')
		title.textContent = newUser.name
		return title
	}

	return { article }
}
