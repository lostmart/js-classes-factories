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
