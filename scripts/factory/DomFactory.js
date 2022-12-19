/*   
accepts item:String element, and then its containeing text
maybe it className
*/
export default function textContainer(item, text, className) {
	const cont = document.createElement(item)
	cont.textContent = text
	cont.classList.add(className)
	return cont
}

export function listItem(iconName, itemValue) {
	const item = document.createElement('li')
	item.classList.add('white-text')
	item.classList.add('collection-item')
	item.classList.add('pink')
	item.classList.add('lighten-1')

	const span = document.createElement('span')
	span.classList.add('material-icons')
	span.textContent = iconName

	const nameSpan = document.createElement('span')
	nameSpan.textContent = itemValue

	item.appendChild(span)
	item.appendChild(nameSpan)

	return item
}

export function addressContainer(address) {
	const { suite, street, city, zipcode } = address
	const addressCont = document.createElement('div')
	addressCont.classList.add('addressCont')

	const address_one = `${suite} ${street}`
	addressCont.appendChild(spanItem(address_one))
	addressCont.appendChild(spanItem(city))
	addressCont.appendChild(spanItem(zipcode))

	//addressCont.innerHTML = `<span class="addressCont__span">${address_one}</span>`
	//addressCont.innerHTML += `<span class="addressCont__span">${city}</span>`
	//addressCont.innerHTML += `<span class="addressCont__span">${zipcode}</span>`

	function spanItem(content) {
		const span = document.createElement('span')
		span.classList.add('addressCont__span')
		span.textContent = content
		return span
	}

	return addressCont
}
