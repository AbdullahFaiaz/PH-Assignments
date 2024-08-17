
// buy ticket button
document.getElementById('buy-tickets-btn').addEventListener('click',function(){
    document.getElementById("buy-tickets-section").scrollIntoView({behavior: 'smooth'});
})


// seats
const buttons = document.getElementsByClassName('but');

let keyCollect = [];
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', function (event) {
        const key = event.target.innerText;


        const press = event.target.style.backgroundColor;
        
        adrem(key);
        if (press === 'rgb(247, 248, 248)' || press === '') {
            addColor(key);
            increase('seatBooked',1);
            increase('totalPrice',550);
            increase('grandTotal',550);
            decrease('seatLeft',1);
            keyCollect.push(key);

            
            
        } else {
            removeColor(key);
            
            decrease('seatBooked',1);
            decrease('totalPrice',550);
            decrease('grandTotal',550);
            increase('seatLeft',1);
            keyCollect.pop();
            
            document.getElementById('warn').setAttribute('hidden',true);

        }
        let count = document.getElementById('seatBooked').innerText;
        console.log(typeof(count))
        if(count === '4'){
            for(const btn of buttons){
                if(btn.style.backgroundColor !== 'rgb(29, 209, 0)')
                btn.disabled = true;
            }
            document.getElementById('warn').removeAttribute('hidden');
            document.getElementById('apply').removeAttribute('disabled');
            document.getElementById('apply').style.backgroundColor = '#1dd100';
            
        }
        else{
            for(const btn of buttons){
                btn.disabled = false;
            }
            document.getElementById('apply').setAttribute('disabled', true);
            document.getElementById('apply').style.backgroundColor = '#a8b4a6';
            }
        
    });
}
const nam = document.getElementById('inputName');
const number = document.getElementById('inputNumber');
const nextButton = document.getElementById('nextBtn');



for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', function () {
        nam.addEventListener('input', next);
        number.addEventListener('input', next);
        function next() {
            const gett = document.getElementById('seatBooked').innerText
            if (number.value.length > 0 && gett !== '0') {
                if(!isNaN(number.value)){
                    nextButton.removeAttribute('disabled');
                    nextButton.style.color = 'white';
                    nextButton.style.backgroundColor = '#1dd100';
                }

            } else {
                disableNextButton()
            }
        }

    })}
    // coupon
    const coupon = document.getElementById('coupon');
    const apply = document.getElementById('apply');
function couponCheck(){
    if(coupon.value === 'NEW15'){
        document.getElementById('coupon').remove();
        document.getElementById('apply').remove();
        const pastGrand = document.getElementById('grandTotal').innerText;
        const past = parseInt(pastGrand);
        result = (past * 15) / 100;
        document.getElementById('grandTotal').innerText = past - result;
        document.getElementById('discountPrice').innerText= result;
        const discount = document.getElementById('discount');
        discount.classList.remove('hidden');
    }
    else if(coupon.value === 'Couple 20'){
            document.getElementById('coupon').remove();
            document.getElementById('apply').remove();
            const pastGrand = document.getElementById('grandTotal').innerText;
            const past = parseInt(pastGrand);
            result = (past * 20) / 100;
            document.getElementById('grandTotal').innerText = past- result;
            document.getElementById('discountPrice').innerText= result;
            const discount = document.getElementById('discount');
            discount.classList.remove('hidden');
    }
    else{
        window.alert('wrong coupon');
    }
}


apply.addEventListener('click', couponCheck)



// continue btn

document.getElementById('continueBtn').addEventListener('click',disableNextButton);
