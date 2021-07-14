import './styles/index.scss';

const inputEl = document.getElementById("email");
const buttonEl = document.getElementById("submit");
const validEl = document.getElementById("valid");
const invalidEl = document.getElementById("invalid")
let formEl = document.querySelector("form");
let input = "";


function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
buttonEl.addEventListener("click", function(){
    input = inputEl.value;
    if (validateEmail(input)) {
        formEl.classList.add('close');
        validEl.classList.add('show');
        invalidEl.classList.remove('show');
    } else if(!input) {
        formEl.classList.remove('close');
        validEl.classList.remove('show');
        invalidEl.classList.remove('show');
    } else {
        formEl.classList.remove('close');
        validEl.classList.remove('show');
        invalidEl.classList.add('show');
    }
    
})
