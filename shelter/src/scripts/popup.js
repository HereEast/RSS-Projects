console.log("Popup");

const cards = document.querySelector(".cards");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".button__close-popup");

//
cards.addEventListener("click", openPopup);
popup.addEventListener("click", closePopup);

if (closeButton) closeButton.addEventListener("click", closePopup);


// OPEN POPUP
function openPopup(e) {
    const card = e.target.closest(".card");
    if(!card) return;

    let url;

    if(card.closest(".slide")) url = "./src/data/pets.json";
    else url = "../src/data/pets.json";

    fetchPetInfo(card, url);

    popup.classList.remove("popup--closed");
    document.body.classList.add("scroll--disabled");
}

// INFO TO POPUP
function fetchPetInfo(card, url) {
    const targetPetName = card.dataset.petName;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const petData = data.find((pet) => pet.name.toLowerCase() === targetPetName);
            createPopupCard(petData);
        })
}

// CLOSE POPUP
function closePopup(e) {
    const isCloseButton = e.target.closest("button");
    const isOverlay = e.target.classList.contains("popup");

    if(isCloseButton || isOverlay) {
        popup.classList.add("popup--closed");
        document.body.classList.remove("scroll--disabled");
        popup.innerHTML = "";
    }
}

// CREATE POPUP CARD
function createPopupCard(petData) {
    let imagePath = "";
    
    if(popup.classList.contains("popup--pets")) imagePath = "." + petData.img;
    else imagePath = petData.img;

    const cardElement = `
        <div class="popup__container">
            <button class="button button__close-popup">
                <span class="icon--close"></span>
            </button>
            
            <div class="popup__card">
                <div class="popup__image">
                    <img src=${imagePath}>
                </div>
                <div class="popup__text">
                    <h3 class="popup__title">${petData.name}</h3>
                    <h4 class="popup__subtitle">${petData.type} – ${petData.breed}</h4>
                    <h5 class="popup__description">${petData.description}</h5>

                    <ul class="popup__list">
                        <li class="popup__list-item">
                            <span class="popup__prop">Age:</span>
                            <span class="popup__value pet__age">${petData.age}</span>
                        </li>
                        <li class="popup__list-item">
                            <span class="popup__prop">Inoculations:</span>
                            <span class="popup__value pet__inoculations">${petData.inoculations.join(", ")}</span>
                        </li>
                        <li class="popup__list-item">
                            <span class="popup__prop">Diseases:</span>
                            <span class="popup__value pet__diseases">${petData.diseases.join(", ")}</span>
                        </li>
                        <li class="popup__list-item">
                            <span class="popup__prop">Parasites:</span>
                            <span class="popup__value pet__parasites">${petData.parasites.join(", ")}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    popup.insertAdjacentHTML("afterbegin", cardElement);
}
