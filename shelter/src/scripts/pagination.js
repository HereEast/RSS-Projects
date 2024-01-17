console.log("Pagination");

const currentPageButton = document.querySelector(".button__page--current");
const nextPageButton = document.querySelector(".button__page--next");
const prevPageButton = document.querySelector(".button__page--prev");
const firstPageButton = document.querySelector(".button__page--first");
const lastPageButton = document.querySelector(".button__page--last");
const petsCards = document.querySelectorAll(".card");

const minPages = 6;
const midPages = 8;
const maxPages = 16;

let pages = minPages;
let currentPage = 1;
const maxCards = 48;

let globalArray = createGlobalArray();
let pagesData = setPagesData();

//

lastPageButton.addEventListener("click", lastPage);
firstPageButton.addEventListener("click", firstPage);
nextPageButton.addEventListener("click", nextPage);
prevPageButton.addEventListener("click", prevPage);


window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);

//

// LOAD
function handleLoad() {
    currentPageButton.textContent = currentPage;

    countPages();
    toggleDisabledButtons();
    toPage();
}

// RESIZE
function handleResize() {
    currentPageButton.textContent = currentPage;

    countPages();
    handlePagination();
    toggleDisabledButtons();
    toPage();
}


//
// TO PAGE
function toPage() {
    const currentPets = pagesData[currentPage - 1];
    const pageCards = [...petsCards].slice(0, maxCards / pages);

    pageCards.forEach((card, i) => {
        const image = card.querySelector(".card__image img");
        const title = card.querySelector(".pet__name");

        fetch("../src/data/pets.json")
            .then((res) => res.json())
            .then((data) => {
                const petData = data.find((pet) => pet.name.toLowerCase() === currentPets[i]);

                image.src = "." + petData.img;
                image.alt = `${petData.type} ${petData.name}`;
                title.textContent = petData.name;

                card.dataset.petName = `${petData.name.toLowerCase()}`;
            });
    });
}

// SET PAGE DATA
function setPagesData() {
    const pagesData = [];

    for (let i = 0; i < maxPages; i += 1) {
        const pageData = shuffleArray();
        pagesData.push(pageData);
    }

    return pagesData;
}

// NEXT PAGE
function nextPage() {
    if (this.disabled) return;

    currentPage += 1;
    currentPageButton.textContent = currentPage;

    toggleDisabledButtons();
    toPage();
}

// PREV PAGE
function prevPage() {
    if (this.disabled) return;

    currentPage -= 1;
    currentPageButton.textContent = currentPage;
    
    toggleDisabledButtons();
    toPage();
}

// FIRST PAGE
function firstPage() {
    if (this.disabled) return;

    currentPage = 1;
    currentPageButton.textContent = currentPage;

    toggleDisabledButtons();
    toPage();
}

// LAST PAGE
function lastPage() {
    if(this.disabled) return;

    currentPage = pages;
    currentPageButton.textContent = currentPage;

    toggleDisabledButtons();
    toPage();
}

// GLOBAL ARRAY
function createGlobalArray() {
    let arr = [];

    for(let i = 0; i < pages; i++) {
        const pageArray = shuffleArray();
        arr.push(...pageArray);
    }

    return arr;
}

// SHUFFLE ARR
function shuffleArray() {
    const arr = ["jennifer", "sophia", "woody", "scarlett", "katrine", "timmy", "freddie", "charly"];

    const shuffledPets = arr.sort(() => Math.random() - 0.5);
    return shuffledPets;
}

// PAGES COUNT
function countPages() {
    if (window.innerWidth > 830) pages = minPages;
    if (window.innerWidth <= 830) pages = midPages;
    if (window.innerWidth <= 540) pages = maxPages;
}

// PAGINATION
function handlePagination() {
    if (window.innerWidth > 540 && currentPage > pages) {
        currentPage = 1;
        toPage();
    }
}

// TOGGLE DISABLED BUTTONS
function toggleDisabledButtons() {
    if(currentPage === pages) {
        lastPageButton.disabled = true;
        nextPageButton.disabled = true;
        firstPageButton.disabled = false;
        prevPageButton.disabled = false;
    }

    if(currentPage === 1) {
        lastPageButton.disabled = false;
        nextPageButton.disabled = false;
        firstPageButton.disabled = true;
        prevPageButton.disabled = true;
    }

    if(currentPage > 1 && currentPage < pages) {
        lastPageButton.disabled = false;
        nextPageButton.disabled = false;
        firstPageButton.disabled = false;
        prevPageButton.disabled = false;
    }
}