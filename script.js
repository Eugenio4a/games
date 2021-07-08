// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


var swiperNew = new Swiper(".new-swiper", {
    effect: 'coverflow',
    centeredSlides: true,
    coverflowEffect: {
        rotate: 230,
        depth: 500,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 230,
                depth: 500,


            },
        },
        768: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 230,
                depth: 300,


            },
        },
        1024: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 230,
                depth: 500,


            },
        },
    }
});
var swiperr = new Swiper(".mySwiper", {});

// let hiddenMenuGame = document.querySelector('.hidden_menu');
// let gamesBtn = document.querySelector('.games');
// let consolesBtn = document.querySelector('.consoles');
// let gamesMenu = document.querySelector('.game_menu');
// let consolesMenu = document.querySelector('.consoles_menu');



// function showMenu(btn, menu) {
//     btn.addEventListener('mouseover', () => {
//         menu.classList.toggle('hide');
//     })

// }
// showMenu(gamesBtn, gamesMenu)
// showMenu(consolesBtn, consolesMenu)