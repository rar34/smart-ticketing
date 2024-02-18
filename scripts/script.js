const couponButton = document.getElementById('btn-coupon');
couponButton.setAttribute('disabled', true);
const nextButton = document.getElementById('btn-next');
nextButton.setAttribute('disabled', true);
const seats = document.getElementsByClassName('seat');
const perSeatPrice = 550;
// total seat count
const totalNumberSeat = document.getElementById('available-seat').innerText;
let availableSeat = parseInt(totalNumberSeat);
// console.log(availableSeat);

let count = 0;
let totalPrice = 0;
let grandTotal = 0;
for (const seat of seats) {
    seat.addEventListener('click', function (event) {
        count++;

        seat.style.backgroundColor = 'green';
        seat.setAttribute('disabled', true);
        availableSeat = availableSeat - 1;
        console.log(availableSeat)
        const seatName = event.target.innerText;

        totalPrice = perSeatPrice * count;
        // const grandTotalText = document.getElementById('grand-total').innerText;
        // let grandTotal = parseInt(grandTotalText);
        grandTotal = grandTotal + perSeatPrice;
        // get coupon
        

        if(count === 4){
            couponButton.removeAttribute('disabled');
        }
        

        if (count > 4) {
            seat.style.backgroundColor = '#F7F8F8';
            return alert('You can not buy more than 4 ticket');
        }
        else {
            const tBody = document.getElementById('tbody');
            const tr = document.createElement('tr');
            const th1 = document.createElement('th');
            th1.innerText = seatName;
            const th2 = document.createElement('th');
            th2.innerText = 'Economy';
            const th3 = document.createElement('th');
            th3.innerText = perSeatPrice;
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tBody.appendChild(tr);
            tr.classList.add('flex', 'justify-between')
        }



        setValueById('total-price', totalPrice);
        setValueById('grand-total', grandTotal);
        setValueById('available-seat', availableSeat)
    })
}



// setValueById

function setValueById(id, value) {
    document.getElementById(id).innerText = value;
}


couponButton.addEventListener('click', function(){
    const couponCode = document.getElementById('coupon-field').value;
    if(couponCode === 'NEW15'){
        const discount = grandTotal * 15/100;
        console.log(discount)
        const discountField = document.getElementById('discount-field');
        const p = document.createElement('p');
        p.classList.add('text-xl', 'font-bold')
        p.innerText = `Discount: ${discount}`;
        discountField.appendChild(p);
        grandTotal = grandTotal - discount;
        setValueById('grand-total', grandTotal);
        couponButton.setAttribute('disabled', true);
    }
    document.getElementById('coupon-field').value = '';
});