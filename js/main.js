//income inputs
const inputIncome = document.getElementById('inputIncome'),
      inputFreelance = document.getElementById('inputFreelance'),
      additionalIncome = document.getElementById('additionalIncome'),
      additionalIncomeSecond = document.getElementById('additionalIncomeSecond');

//costs inputs
const flatSpend = document.getElementById('flatSpend'),
      petrolSpend = document.getElementById('petrolSpend'),
      hacsSpend = document.getElementById('hacsSpend'),
      foodSpend = document.getElementById('foodSpend');

//total inpunts
const totalMonthNum = document.querySelector('.totalMonth'),
      totalDayNum = document.querySelector('.totalDay'),
      totalYearNum = document.querySelector('.totalYear');

let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationMoney = document.getElementById('accumulation'),
      spend = document.getElementById('spend');
      totalPrecentsEl = document.getElementById('total-precents');




let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('input')
for(input of inputs) {
    input.addEventListener('input', () => {
        countingAvailableMoney();
    })
}

const strToNum = (str) => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(inputIncome) + strToNum(inputFreelance) + strToNum(additionalIncome) + strToNum(additionalIncomeSecond);
    const totalCosts = strToNum(flatSpend) + strToNum(petrolSpend) + strToNum(hacsSpend) + strToNum(foodSpend);
    totalMonth = totalPerMonth - totalCosts;
    totalMonthNum.innerHTML = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    totalPrecents = e.target.value;
    totalPrecentsEl.innerHTML = totalPrecents;
    calculationPrecents();
})

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationMoney.innerHTML = accumulation;
    totalDay = ((totalMonth - accumulation)/30).toFixed();
    totalDayNum.innerHTML = totalDay;
    totalYear = (accumulation * 12).toFixed();
    totalYearNum.innerHTML = totalYear;
    spend.innerHTML = totalMonth - accumulation;

}
