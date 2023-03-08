const barOne = document.getElementById('bar1')
const barTwo = document.getElementById('bar2')
const barThree = document.getElementById('bar3')
const barFour = document.getElementById('bar4')
const barFive = document.getElementById('bar5')
const barSix = document.getElementById('bar6')
const barSev = document.getElementById('bar7')
const showAmount1 = document.getElementById('show-amount1')
const showAmount2 = document.getElementById('show-amount2')
const showAmount3 = document.getElementById('show-amount3')
const showAmount4 = document.getElementById('show-amount4')
const showAmount5 = document.getElementById('show-amount5')
const showAmount6 = document.getElementById('show-amount6')
const showAmount7 = document.getElementById('show-amount7')
const total = document.getElementById('total')

const maxValue = 100;
const getData = () => {
    fetch('data.json')
        .then(res => res.json())
        .then(data => displayData(data))
}