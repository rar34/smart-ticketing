const seats = document.getElementsByClassName('seat');
for(const seat of seats){
    seat.addEventListener('click',function(){
        console.log('clicked')
        seat.style.backgroundColor = 'green';
        seat.setAttribute('disabled', true)
    })
}