const incomeTable = document.querySelector('.income-table')
const inputTarget = document.querySelector('#target')
const inputMoney = document.querySelector('#money')
const addIncomeButton = document.querySelector('.addIncome')
const incomeForm = document.querySelector('#income-form')
const serverIpAddress = 'http://localhost:2000/income'

async function addData (data) {
	let post = await request('POST', data)
	return post
}

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

incomeForm.addEventListener('submit', (event) => {
	event.preventDefault()
	
	incomeRender(array)
	
	addData({type: inputTarget.value, cost: inputMoney.value})
	
	incomeForm.reset()
})

incomeRender(array)

let num = 0

async function incomeRender (array) {
	incomeTable.textContent = ""
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
		
		incomeTable.appendChild(tableRow)
	}
}

