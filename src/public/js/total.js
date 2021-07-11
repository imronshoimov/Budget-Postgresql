const totalCost = document.querySelector('.total__cost')
const incomeCost = document.querySelector('.income__cost')
const expanceCost = document.querySelector('.expance__cost')
const serverIpAddress = 'http://localhost:2000'

async function request (endPoint, method, bodyData) {
    let response = await fetch(serverIpAddress + endPoint, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    
    return await response.json();
}

let incomeData = request('/income', 'GET')
let expanceData = request('/expance', 'GET')

let incomeArr = []
let expanceArr = []


async function changeIncomeData (arr1, arr2) {
    let data = await arr1
    let data2 = await arr2

    data.forEach(inc => {
        for(let exp of data2) {
            let income = inc.cost.split('$')[1] - 0
            let expance = exp.cost.split('$')[1] - 0

            incomeArr.push(income)
            let incomeResult = incomeArr.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            });

            expanceArr.push(expance)
            let expanceResult = expanceArr.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
            });

            incomeCost.textContent = '$' + incomeResult
            expanceCost.textContent = '$' + expanceResult
            totalCost.textContent = '$' + (incomeResult + expanceResult)
        }
    });
}

changeIncomeData(incomeData, expanceData)