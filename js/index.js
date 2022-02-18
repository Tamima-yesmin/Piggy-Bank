
// function for income
function getIncomeInput() {
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;

    if (incomeAmount == "") {

        document.getElementById('income-notify').style.display = 'block';
        document.getElementById('income-notify2').style.display = 'none';
        return;
    }
    else if (incomeAmount < 0) {

        document.getElementById('income-notify2').style.display = 'block';
        document.getElementById('income-notify').style.display = 'none';
        return;
    }
    else {
        document.getElementById('income-notify2').style.display = 'none';
        document.getElementById('income-notify').style.display = 'none';
    }


    return incomeAmount;

}

// function for notification
function getNotification(Id, isTrue) {
    if (isTrue == true) {
        document.getElementById(Id).style.display = 'block'
    }
    else {
        document.getElementById(Id).style.display = 'none'
    }

}

// for calculation
document.getElementById('calculate-btn').addEventListener
    ('click', function () {

        // get income amount
        const newIncomeAmount = getIncomeInput();


        // get expenses input
        const foodInput = document.getElementById('food-input');
        const foodCost = foodInput.value;
        const rentInput = document.getElementById('rent-input');
        const rentCost = rentInput.value;
        const clothesInput = document.getElementById('clothes-input');
        const clothesCost = clothesInput.value;


        if (foodCost == "" || rentCost == "" || clothesCost == "") {


            document.getElementById('expense-notify').style.display = 'block'
            document.getElementById('expense-notify2').style.display = 'none'
            return;
        }
        else if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {


            document.getElementById('expense-notify2').style.display = 'block'
            document.getElementById('expense-notify').style.display = 'none'

        }
        else {
            document.getElementById('expense-notify').style.display = 'none';
            document.getElementById('expense-notify2').style.display = 'none';
        }

        //get total cost
        const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);


        if (newIncomeAmount < totalCost) {

            getNotification('expense-total-notify', true);


            return;
        }
        else {

            getNotification('expense-total-notify', false);


        }

        //    get expense-total
        const expenseTotal = document.getElementById('expense-total');
        expenseTotal.innerText = totalCost;


        // get Balance
        const balanceTotal = document.getElementById('balance-total');
        balanceTotal.innerText = newIncomeAmount;
        const balanceTotalText = balanceTotal.innerText;

        const prevBalanceTotal = parseFloat(balanceTotalText);

        newBalanceTotal = prevBalanceTotal - totalCost;
        balanceTotal.innerText = newBalanceTotal

    })



//for savings

document.getElementById('save-btn').addEventListener
    ('click', function () {

        const saveInput = document.getElementById('save-input');
        saveAmount = parseFloat(saveInput.value);

        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = parseFloat(balanceTotal.innerText);

        // get income amount
        const newIncomeAmount = getIncomeInput();




        const save = (newIncomeAmount * saveAmount) / 100;

        const remaininBalance = balanceTotalText - save;


        if (save > balanceTotalText) {

            getNotification('save-notify', true);
            return;
        }
        else {

            getNotification('save-notify', false);

        }

        //get saveing amount
        const saveTotal = document.getElementById('save-total');
        saveTotal.innerText = save;

        // get remaining balance
        const remainingTotal = document.getElementById('remaining-total');
        remainingTotal.innerText = remaininBalance;


    })