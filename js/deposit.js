document.getElementById('btn-depo').addEventListener('click', function (){
    const depositField = document.getElementById('depo');
    const newdeposit = parseFloat(depositField.value);
    
    depositField.value = ''

    if(isNaN(newdeposit)){
        alert('please enter an amount');
        return
    }

    const depositTotalElement =document.getElementById('deposit-total');
    const previousdepositTotal = depositTotalElement.innerText;
    const currentdepositTotal = parseFloat(previousdepositTotal) + newdeposit;
    depositTotalElement.innerText = currentdepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentBalanceTotal = newdeposit + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})