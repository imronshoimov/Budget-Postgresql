const expanceTable = document.querySelector('.expance-table')
const inputTarget = document.querySelector('#target')
const inputMoney = document.querySelector('#money')
const addExpanceButton = document.querySelector('.addExpance')
const expanceForm = document.querySelector('#expance-form')
const serverIpAddress = 'http://localhost:2000/expance'


async function request (method, bodyData) {
	let response = await fetch(serverIpAddress, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(bodyData)
	})
	
	return await response.json();
}

let array = request('GET')

let number = 0

async function addData (data) {
	let post = await request('POST', data)
	return post
}
expanceForm.addEventListener('submit', (event) => {
	event.preventDefault()
	
	addData({type: inputTarget.value, cost: inputMoney.value})
	
	expanceRender(array)
	
	expanceForm.reset()
})

let num = 0

async function expanceRender (array) {
	expanceTable.textContent = ""
	for(let item of await array) {
		let tableRow = document.createElement('tr')
		let thId = document.createElement('th')
		let thTarget = document.createElement('th')
		let thMoney = document.createElement('th')
		let thDate = document.createElement('th')
		
		thId.textContent = num += 1
		thTarget.textContent = item.type
		thMoney.textContent = item.cost
		thDate.textContent = item.date
		
		tableRow.appendChild(thId)
		tableRow.appendChild(thTarget)
		tableRow.appendChild(thMoney)
		tableRow.appendChild(thDate)
		
		expanceTable.appendChild(tableRow)
	}
}

expanceRender(array)