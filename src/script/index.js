
document.querySelector(".header__btn").onclick = (e) => {
    e.target.classList.toggle('active');
    document.querySelector('.hookah__nav').classList.toggle('active');
    document.querySelector('.wrapper').classList.toggle('active');
 }

const btn = document.querySelectorAll('.wrapper__btn');
const content = document.querySelectorAll('.content');
    function f1(e){
        e.preventDefault();
        for(let i=0;i<btn.length;i++){
            btn[i].classList.add('active');
            content[i].classList.add('active');
            if(btn[i] !== e.target){
                btn[i].classList.remove('active')
                content[i].classList.remove('active')
            }
        }
    }
    btn.forEach(e=>e.addEventListener('mouseover', f1));


document.querySelectorAll('.wrapper__btn').onclick = (e) => {
    e.preventDefault();
    document.querySelector('.wrapper__form').classList.add('active');
}
document.querySelector('.form__close').onclick = (e) => {
    e.preventDefault();
    document.querySelector('.wrapper__form').classList.remove('active');
}




let main = document.querySelectorAll('.wrapper__btn');
let betta = document.querySelectorAll('.wrapper__form');

function f2(e) {
    e.preventDefault();
    for (let i = 0; i < main.length; i++) {
        betta[i].classList.remove('active');
        if (e.target === main[i]) {
            betta[i].classList.add('active');
        }
    }
}

main.forEach(e => e.addEventListener('click', f2));
