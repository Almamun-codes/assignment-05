// get memory cost
function getMemoryCost(button){
    const memoryCost = document.getElementById('memory-cost');
    if(button == 'first-memory-btn'){
        memoryCost.innerText = 0;    
    }

    else if(button == 'second-memory-btn'){
            memoryCost.innerText = 180;
    }
}


// get storage cost
function getStorageCost(button){
    const memoryCost = document.getElementById('storage-cost');
    if(button == 'ssd-256'){
        memoryCost.innerText = 0;    
    }

    else if(button == 'ssd-512'){
            memoryCost.innerText = 100;
    }

    else if(button == 'ssd-1tb'){
            memoryCost.innerText = 180;
    }
}


// get delivery cost
function getDeliveryCost(button){
    const memoryCost = document.getElementById('delivery-cost');
    if(button == 'normal-delivery'){
        memoryCost.innerText = 0;    
    }

    else if(button == 'fast-delivery'){
            memoryCost.innerText = 20;
    }
}
 

// calculate total
function calculateTotal(){
    // get all costs
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    // add all costs
    const totalCost =  memoryCost + storageCost + deliveryCost + 1299;


     // update total field
    const total = document.getElementById('total-cost');
    total.innerText = totalCost;

    // update grand total field
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
}


// calculate memory cost
document.getElementById('first-memory-btn').addEventListener('click', function(){
    getMemoryCost('first-memory-btn');
    calculateTotal()
})

document.getElementById('second-memory-btn').addEventListener('click', function(){
    getMemoryCost('second-memory-btn');
    calculateTotal()

})


// calculate storage cost
document.getElementById('ssd-256').addEventListener('click', function(){
    getStorageCost('ssd-256')
    calculateTotal()
})

document.getElementById('ssd-512').addEventListener('click', function(){
    getStorageCost('ssd-512')
    calculateTotal()
})

document.getElementById('ssd-1tb').addEventListener('click', function(){
    getStorageCost('ssd-1tb')
    calculateTotal()
})


// calculate delivery charge
document.getElementById('normal-delivery').addEventListener('click', function(){
    getDeliveryCost('normal-delivery')
    calculateTotal()
})

document.getElementById('fast-delivery').addEventListener('click', function(){
    getDeliveryCost('fast-delivery')
    calculateTotal()
})


// use promo code
document.getElementById('apply-btn').addEventListener('click', function(){
    // get promo code
    const promoCodeField = document.getElementById('promo-code');
    const promoCode = promoCodeField.value;

    // promo code check
    if (promoCode == 'stevekaku'){
        const grandTotalField = document.getElementById('grand-total');
        const grandTotal =  parseFloat(grandTotalField.innerText);

        // update grand total
        const newGrandTotal = grandTotal - (grandTotal / 20);
        grandTotalField.innerText = newGrandTotal;
    }
    else{
    promoCodeField.value = '';}    
})