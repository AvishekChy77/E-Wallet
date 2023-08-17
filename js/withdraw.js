document.getElementById('btn-wd').addEventListener('click', function (){
    const newWithdraw = getValueById('wd');

    if(isNaN(newWithdraw)){
        alert('please enter an amount');
        return
    }
    if(newWithdraw <= 0){
        alert('please enter a valid amount');
        return
    }

    const previousBalanceTotal = getElementById('balance-total');
    
    if (newWithdraw > previousBalanceTotal ){
        alert('You do not have enough money, please try again!');
        return
    }

    const previousWithdrawTotal = getElementById('withdraw-total');
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;
    updateValue('withdraw-total', currentWithdrawTotal)

    const currentBalanceTotal = previousBalanceTotal - newWithdraw;
    updateValue('balance-total', currentBalanceTotal)
})