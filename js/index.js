const menuBtn = document.querySelector('.header .header__menu i')
const navbar = document.querySelector('.header__navbar')
const foodContainer = document.querySelector('.food__container-preview')
const foodSliders = document.querySelectorAll('.food-slider .slide-item')
const cardPreview = document.querySelectorAll('.food__container-preview .food__card-preview')
const closeCardBtn = document.querySelector('.food__container-preview .food__icon-close')
const galleryCards = document.querySelectorAll('.gallery__container .gallery__card')
const galleryMainImg = document.querySelector('.gallery .gallery-main img')
const galleryMain = document.querySelector('.gallery .gallery-main')
const galleryCloseBtn = document.querySelector('.gallery .gallery-main .gallery__btn-close')
const galleryPrevBtn = document.querySelector('.gallery .gallery-main .gallery__btn-prev')
const galleryNextBtn = document.querySelector('.gallery .gallery-main .gallery__btn-next')

let currentIndex
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.onload = () => {
    foodSliders.forEach((slide) => {
        slide.addEventListener('click', () => {
            cardPreview.forEach(card => {
                if (slide.dataset.name === card.dataset.target) {
                    foodContainer.style.display = 'flex'
                    card.classList.add('active')
                }
            })
        })
    })

    galleryCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index
            galleryMainImg.src = card.querySelector('img').src
            galleryMain.classList.add('d-flex')
        })
    })

    galleryCloseBtn.addEventListener('click', () => {
        galleryMain.classList.remove('d-flex')
    })

    galleryPrevBtn.addEventListener('click', () => {
        if (currentIndex === 0) return
        currentIndex--
        galleryMainImg.src = galleryCards[currentIndex].querySelector('img').src
    })
    galleryNextBtn.addEventListener('click', () => {
        if (currentIndex >= galleryCards.length - 1) return
        currentIndex++
        galleryMainImg.src = galleryCards[currentIndex].querySelector('img').src
    })
}


closeCardBtn.addEventListener('click', () => {
    foodContainer.style.display = 'none'
    const card = document.querySelector('.food__container-preview .food__card-preview.active')
    if (card) {
        card.classList.remove('active')
    }
})

var swiper = new Swiper('.home-slider', {
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});



var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 1,
        },
    },
});

var swiper = new Swiper(".blog-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

