"strict mode";

const btnAdvice = document.querySelector('.btn-advice');
const txtAdvice = document.querySelector('.txt-advice');
const numAdvice = document.querySelector('.title');
const loader = document.querySelector('.loader');

document.addEventListener("DOMContentLoaded", getAdvice);
btnAdvice.addEventListener('click', getAdvice);

function getAdvice(){ 
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(res => {
            changeDisplays();
            txtAdvice.innerHTML = `"${res['slip']['advice']}"`;
            numAdvice.innerHTML = `Advice #${res['slip']['id']}`;
        });
}

function changeDisplays(){
    loader.style.display = 'none';
    numAdvice.style.display = 'flex';
    txtAdvice.style.display = 'flex';
}


    
