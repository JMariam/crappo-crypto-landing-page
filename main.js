// navbar


const navBar = document.querySelector('#navbar');
const openBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');

openBtn.addEventListener('click', () => {
				navBar.style.left = '0';
				closeBtn.style.display = 'inline-block';
				openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    navBar.style.left = '100%';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
})



// card

function toggleClass(el) {
    const kids = document.querySelector('.cards').children;

    for (let i = 0; i < kids.length; i++) {
        kids[i].className = 'card'
        el.className = "card active"
        
    }
}




    // animation

    window.addEventListener('scroll', reveal)
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            else {
                reveals[i].classList.remove('active');
            }
        }
    }



    window.addEventListener('scroll', appear)
    function appear() {
        var appears = document.querySelectorAll('.appear');

        for(var i = 0; i < appears.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = appears[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                appears[i].classList.add('active');
            }
            else {
                appears[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', show)
    function show() {
        var shows = document.querySelectorAll('.show');

        for(var i = 0; i < shows.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = shows[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                shows[i].classList.add('active');
            }
            else {
                shows[i].classList.remove('active');
            }
        }
    }