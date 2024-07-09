function changeBackground(imageUrl) {
    let landing = document.querySelector('.landing-page')
    landing.style.backgroundImage = `url('${imageUrl}')`;
}



window.addEventListener('scroll', function() {
    let head = document.querySelector('.head');
    let title = document.querySelector('.h1');
    let circle = document.querySelector('.img');
    let planet = document.querySelectorAll('.planet');
    let boxes = document.querySelectorAll('.box');
    if (window.scrollY > 150) {
        planet.forEach((e) => {
            e.classList.add('translate');
        })
        boxes.forEach((e) => {
            e.classList.add('translate');
        })
    }
    if (window.scrollY > 70) {
        boxes.forEach((e) => {
            e.classList.add('translate');
        })
    }
    if (window.scrollY > 10) {
        head.classList.add('translate');
        title.classList.add('translate');
        circle.classList.add('rotate');
        planet.forEach((e) => {
            e.classList.add('translate2');
        })
    }
});
