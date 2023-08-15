document.getElementById('btn-wd').addEventListener('click', function (){
    const withdrawField = document.getElementById('wd');
    const newWithdraw = withdrawField.value;

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdraw);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    withdrawField.value = ''

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = previousBalanceTotal - parseFloat(newWithdraw);
    balanceTotalElement.innerText = currentBalanceTotal;

})