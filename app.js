const input = document.getElementById('input');
const formC = document.getElementById('form-control');
const btn = document.getElementById('btn');
const front = document.getElementById('front');
const back = document.getElementById('back');
const reset = document.getElementById('reset');

btn.addEventListener('click', () => {
    if(input.value > '' && input.value.includes('@')){
        console.log('it works');
        formC.classList.remove('error');
        input.classList.remove('error');
        displayConfirmation();
    } else{
        console.log('it does not work');
        input.classList.add('error');
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
    input.value = '';
}


