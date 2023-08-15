document.getElementById('btn-wd').addEventListener('click', function (){
    const withdrawField = document.getElementById('wd');
    const newWithdraw = parseFloat(withdrawField.value);

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    
    withdrawField.value = ''

    if(isNaN(newWithdraw)){
        alert('please enter an amount');
        return
    }
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    
    if (parseFloat(newWithdraw) > previousBalanceTotal ){
        alert('You do not have enough money, please try again!');
        return
    }
    
    const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - newWithdraw;
    balanceTotalElement.innerText = currentBalanceTotal;

})