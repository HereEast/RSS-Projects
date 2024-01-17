// GET CURRENT SLIDE

export function getCurrent() {
    const currentSlide = document.querySelector(".slide--current");
    return currentSlide;
}

// TOGGLE SLIDE--CURRENT

export function changeCurrent(currentSlide, sibling) {
    if (sibling) {
        sibling.classList.toggle("slide--current");
        currentSlide.classList.toggle("slide--current");
    }
}

// GET ALL SLIDES

export function getSlides() {
    const slides = document.querySelectorAll(".cards__container");
    return slides;
}

// GET TRANSFORM X

export function getTransformX(el) {
    const transformX = parseInt(el.style.transform.split("(").at(-1));
    return transformX;
}
