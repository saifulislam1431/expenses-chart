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
const displayData = allData => {
    const changeHeight = (id) => {
        const minValue = allData[id].amount;
        const totalHeight = minValue / maxValue * 200;
        // console.log(totalHeight);
        return totalHeight;
    };
    const calculateTotal = (id) => {
        const value = allData[id].amount;
        return value
    }
    const totalOfMonth = () => {
            const totalValue = parseFloat(calculateTotal(0)) + parseFloat(calculateTotal(1)) + parseFloat(calculateTotal(2)) + parseFloat(calculateTotal(3)) + parseFloat(calculateTotal(4)) + parseFloat(calculateTotal(5)) + parseFloat(calculateTotal(6))
            return totalValue;
        }
        // Show PopUp
    barOne.addEventListener('mouseenter', () => {
        showAmount1.innerText = `${calculateTotal(0)}`
        showAmount1.style.display = 'block'
    })
    barOne.addEventListener('mouseout', () => {
        showAmount1.style.display = 'none'
    })

    barTwo.addEventListener('mouseenter', () => {
        showAmount2.innerText = `${calculateTotal(1)}`
        showAmount2.style.display = 'block'
    })
    barTwo.addEventListener('mouseout', () => {
        showAmount2.style.display = 'none'
    })

    barThree.addEventListener('mouseenter', () => {
        showAmount3.innerText = `${calculateTotal(2)}`
        showAmount3.style.display = 'block'
    })
    barThree.addEventListener('mouseout', () => {
        showAmount3.style.display = 'none'
    })

    barFour.addEventListener('mouseenter', () => {
        showAmount4.innerText = `${calculateTotal(3)}`
        showAmount4.style.display = 'block'
    })
    barFour.addEventListener('mouseout', () => {
        showAmount4.style.display = 'none'
    })

    barFive.addEventListener('mouseenter', () => {
        showAmount5.innerText = `${calculateTotal(4)}`
        showAmount5.style.display = 'block'
    })
    barFive.addEventListener('mouseout', () => {
        showAmount5.style.display = 'none'
    })

    barSix.addEventListener('mouseenter', () => {
        showAmount6.innerText = `${calculateTotal(5)}`
        showAmount6.style.display = 'block'
    })
    barSix.addEventListener('mouseout', () => {
        showAmount6.style.display = 'none'
    })

    barSev.addEventListener('mouseenter', () => {
        showAmount7.innerText = `${calculateTotal(6)}`
        showAmount7.style.display = 'block'
    })
    barSev.addEventListener('mouseout', () => {
        showAmount7.style.display = 'none'
    })


    barOne.style.height = `${changeHeight(0)}px`;
    barTwo.style.height = `${changeHeight(1)}px`;
    barThree.style.height = `${changeHeight(2)}px`;
    barFour.style.height = `${changeHeight(3)}px`;
    barFive.style.height = `${changeHeight(4)}px`;
    barSix.style.height = `${changeHeight(5)}px`;
    barSev.style.height = `${changeHeight(6)}px`;
    total.innerText = `${totalOfMonth()}`



}
getData()