document.getElementById('btn-depo').addEventListener('click', function (){
    const newdeposit = getValueById('depo');

    if(isNaN(newdeposit)){
        alert('please enter an amount');
        return
    }
    if(newdeposit <= 0){
        alert('please enter a valid amount');
        return
    }

    const previousdepositTotal = getElementById('deposit-total');
    const currentdepositTotal = newdeposit + previousdepositTotal;

    updateValue('deposit-total', currentdepositTotal)

    const previousBalanceTotal = getElementById('balance-total');
    const currentBalanceTotal = newdeposit + previousBalanceTotal;

    updateValue('balance-total', currentBalanceTotal);
})