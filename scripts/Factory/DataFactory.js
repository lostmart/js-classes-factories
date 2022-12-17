import serverData from "./DataClass.js"
const url = "https://jsonplaceholder.typicode.com/users"

const newDataServer = new serverData(url)
newDataServer.bringData().then((res) => {
	console.log(res)
})
