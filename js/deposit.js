document.getElementById('btn-depo').addEventListener('click', function (){
    const depositField = document.getElementById('depo');
    const newdeposit = depositField.value;

    const depositTotalElement =document.getElementById('deposit-total');
    const previousdepositTotal = depositTotalElement.innerText;
    const currentdepositTotal = parseFloat(previousdepositTotal) + parseFloat(newdeposit);
    depositTotalElement.innerText = currentdepositTotal;

    depositField.value = ''

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = parseFloat(newdeposit) + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})