console.log("Slider");

const pets = ["jennifer", "sophia", "woody", "scarlett", "katrine", "timmy", "freddie", "charly"];

import { getTransformX, getSlides, getCurrent, changeCurrent } from "./slider-utils.js";

const slider = document.querySelector(".slider");
const slideContainer = document.querySelector(".slide");
const nextButton = document.querySelector(".button__right");
const prevButton = document.querySelector(".button__left");

let sliderWidth;
let cardsCount = 3;

let currentPets;
let restPets;

//

window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);
nextButton.addEventListener("click", handleNext);
prevButton.addEventListener("click", handlePrev);

//

// LOAD
function handleLoad() {
    sliderWidth = slider.offsetWidth;
    slideContainer.style.transform = "translate(0%)";

    setCurrentPets();
    setRestPets(currentPets);

    createCurrentSlide(currentPets);
}

// RESIZE
function handleResize() {
    sliderWidth = slider.offsetWidth;

    const slides = [...getSlides()];
    slides.forEach((slide) => (slide.style.width = sliderWidth + "px"));
}

// CLICK ON NEXT
function handleNext() {
    const currentSlide = getCurrent();

    createNextSlide(restPets);

    moveNextSlide();
    updatePetsArrays();

    setTimeout(() => currentSlide.remove(), 1000);
}

// CLICK ON PREV
function handlePrev() {
    const currentSlide = getCurrent();

    createPrevSlide(restPets);

    movePrevSlide();
    updatePetsArrays();

    setTimeout(() => currentSlide.remove(), 1000);
}


// MOVE NEXT
function moveNextSlide() {
    const currentSlide = getCurrent();
    const nextSibling = currentSlide.nextElementSibling;

    setTimeout(() => {
        const slides = getSlides();
        slides.forEach((slide) => {
            const currentX = getTransformX(slide);
            slide.style.transform = `translateX(${currentX - sliderWidth}px)`;
        });
    }, 0);

    changeCurrent(currentSlide, nextSibling);
}

// MOVE PREV
function movePrevSlide() {
    const currentSlide = getCurrent();
    const prevSibling = currentSlide.previousElementSibling;

    setTimeout(() => {
        const slides = getSlides();
        slides.forEach((slide) => {
            const currentX = getTransformX(slide);
            slide.style.transform = `translateX(${currentX + sliderWidth}px)`;
        });
    }, 0);

    changeCurrent(currentSlide, prevSibling);
}

// CREATE NEXT SLIDE
function createNextSlide(arr) {
    const lastSlide = [...getSlides()].at(-1);
    const lastSlideX = getTransformX(lastSlide);

    const slide = createSlide(arr);
    slide.style.transform = `translateX(${lastSlideX + sliderWidth}px)`;

    slideContainer.append(slide);
}

// CREATE PREV SLIDE
function createPrevSlide(arr) {
    const firstSlide = [...getSlides()][0];
    const firstSlideX = getTransformX(firstSlide);

    const slide = createSlide(arr);
    slide.style.transform = `translateX(${firstSlideX - sliderWidth}px)`;

    slideContainer.prepend(slide);
}

// CREATE CURRENT SLIDE
function createCurrentSlide(arr) {
    const slide = createSlide(arr);

    slide.classList.add("slide--current");
    slide.style.transform = "translateX(0%)";

    slideContainer.append(slide);
}

//
// SLIDE [ 1 2 3 ]

function createSlide(arr) {
    const container = document.createElement("div");
    container.classList.add("cards__container");
    container.style.width = sliderWidth + "px";

    createCards(arr, container);

    return container;
}

function createCards(arr, container) {
    fetch("./src/data/pets.json")
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < cardsCount; i++) {
                const currentPet = arr[i];

                const newPet = data.find((pet) => pet.name.toLowerCase() === currentPet);
                const card = createCardElement(newPet);

                container.insertAdjacentHTML("beforeend", card);
            }
        });
}

function createCardElement(pet) {
    const cardElement = `
        <div class="card" data-pet-name=${pet.name.toLowerCase()}>
            <div class="card__image">
                <img src=${pet.img} alt=${pet.type} ${pet.name}>
            </div>

            <h4 class="pet__name">${pet.name}</h4>
            <button class="button button__secondary">Learn more</button>
        </div>
    `;

    return cardElement;
}

/////////

// CURRENT ARRAY
function setCurrentPets() {
    const shuffledArr = pets.sort(() => Math.random() - 0.5);
    const currentPetsArr = shuffledArr.slice(0, cardsCount);

    currentPets = currentPetsArr;
}

// REST ARRAY
function setRestPets(currentPetsArr) {
    const shuffledArr = pets.sort(() => Math.random() - 0.5);
    const restPetsArr = shuffledArr.filter((pet) => !currentPetsArr.includes(pet));

    restPets = restPetsArr.slice(0, cardsCount);
}


// UPDATE ARRAYS
function updatePetsArrays() {
    setTimeout(() => {
        const currentSlide = getCurrent();

        const cards = currentSlide.querySelectorAll(".card");
        const pets = [...cards].map((card) => card.dataset.petName);

        currentPets = pets;
        setRestPets(currentPets);
    }, 500);
}