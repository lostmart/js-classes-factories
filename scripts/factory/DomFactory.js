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
	const item = document.createElement("li")
	item.classList.add("white-text")
	item.classList.add("collection-item")
	item.classList.add("pink")
	item.classList.add("lighten-1")

	const span = document.createElement("span")
	span.classList.add("material-icons")
	span.textContent = iconName

	const nameSpan = document.createElement("span")
	nameSpan.textContent = itemValue

	item.appendChild(span)
	item.appendChild(nameSpan)

	return item
}
