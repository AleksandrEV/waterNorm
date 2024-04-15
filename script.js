let text = document.querySelector('.remains');
let inp = document.getElementById('input');
let btn = document.getElementById('calcul');

btn.addEventListener('click', fun);

function fun () {

    let summ = inp.value;
    text.textContent = text.textContent - summ;
    inp.value = null;
   
}