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

        seat.style.backgroundColor = '#1DD100';
        seat.setAttribute('disabled', true);
        availableSeat = availableSeat - 1;
        const seatName = event.target.innerText;


        // get coupon
        if (count === 4) {
            couponButton.removeAttribute('disabled');

        }

        if (count > 0) {
            nextButton.removeAttribute('disabled');
        }
        if (count > 4) {
            seat.style.backgroundColor = '#F7F8F8';
            // totalPrice = totalPrice - 550;

            return alert('You can not buy more than 4 ticket');
        }
        else {
            totalPrice = perSeatPrice * count;
            grandTotal = grandTotal + perSeatPrice;
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



        setValueById('selected-seat', count);
        setValueById('total-price', totalPrice);
        setValueById('grand-total', grandTotal);
        setValueById('available-seat', availableSeat)
    })
}



// setValueById

function setValueById(id, value) {
    document.getElementById(id).innerText = value;
}


couponButton.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-field').value;
    if (couponCode === 'NEW15') {
        const discount = totalPrice * 15 / 100;
        grandTotal = totalPrice - discount;
        const discountField = document.getElementById('discount-field');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        p.classList.add('text-lg', 'font-bold');
        p2.classList.add('text-lg', 'font-bold');
        p.innerText = 'Discount:';
        p2.innerText = discount;
        discountField.appendChild(p);
        discountField.appendChild(p2);
        // grandTotal = grandTotal - discount;
        setValueById('grand-total', grandTotal);
        couponButton.setAttribute('disabled', true);
        const couponContainer = document.getElementById('coupon-field-container');
        couponContainer.classList.add('hidden');
    }
    else if (couponCode === 'Couple 20') {
        const discount = totalPrice * 20 / 100;
        grandTotal = totalPrice - discount;
        const discountField = document.getElementById('discount-field');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        p.classList.add('text-lg', 'font-bold');
        p2.classList.add('text-lg', 'font-bold');
        p.innerText = 'Discount:';
        p2.innerText = discount;
        discountField.appendChild(p);
        discountField.appendChild(p2);

        setValueById('grand-total', grandTotal);
        couponButton.setAttribute('disabled', true);
        const couponContainer = document.getElementById('coupon-field-container');
        couponContainer.classList.add('hidden');
    }
    else {
        alert('Invalid coupon')
    }
    document.getElementById('coupon-field').value = '';
});

document.getElementById('btn-continue').addEventListener('click', function () {
    window.location.href = 'index.html';
});

nextButton.addEventListener('click', function () {
    //get user input data 
    const name = document.getElementById('user-name').value;

    const phone = document.getElementById('user-phone').value;
    const email = document.getElementById('user-email').value;
    console.log(name, phone, email)
    const modal = document.getElementById('my_modal_1');
    if (name === '' || phone === '' || email === '') {
        // modal.classList.add('hidden');
        return alert(' fill all field')
    }
    my_modal_1.showModal();
});