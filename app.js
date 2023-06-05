const email = document.getElementById('email');
const formC = document.getElementById('form-control');
const btn = document.getElementById('btn');
const front = document.getElementById('front');
const back = document.getElementById('back');
const reset = document.getElementById('reset');

btn.addEventListener('click', () => {
    if(email.value > '' && email.value.includes('@')){
        console.log('it works');
        formC.classList.remove('error');
        email.classList.remove('error');
        displayConfirmation();
    } else{
        console.log('it does not work');
        email.classList.add('error');
        formC.classList.add('error');
    }
})

reset.addEventListener('click', () => {
    removeConfirmation();
})


function displayConfirmation(){
    front.classList.add('active');
    back.classList.add('active')
}

function removeConfirmation(){
    front.classList.remove('active');
    back.classList.remove('active')
    email.value = '';
}
