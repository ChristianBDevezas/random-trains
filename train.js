const showBtn = document.querySelector(".train-gallery__btn");
const galleryImg = document.querySelector(".train-gallery__image");
const trainImage = document.querySelector(".train-gallery__image__item");
const trainCountry = document.querySelector(".train-gallery__image__country");
const trainName = document.querySelector(".train-gallery__image__name");
const trainNumber = document.querySelector(".train-gallery__image__number");
const images = [
    {
        img: 'img/deutsche-bahn-ice.jpg',
        country: 'Germany',
        name: 'Deutsche Bahn - Max Speed: 300km/h'
    },
    {   
        img: 'img/deutsche-bahn-ice2.jpg',
        country: 'Germany',
        name: 'Deutsche Bahn - Max Speed: 300km/h'
    },
    {
        img: 'img/eurostar-e320.jpg',
        country: 'United Kingdom',
        name: 'Eurostar - Max Speed: 300km/h'
    },
    {
        img: 'img/eurostar2-e320.jpg',
        country: 'United Kingdom',
        name: 'Eurostar - Max Speed: 300km/h'
    },
    {
        img: 'img/frecciarossa.jpg',
        country: 'Italy',
        name: 'Frecciarossa - Max Speed: 394km/h'
    },
    {
        img: 'img/frecciarossa2.jpg',
        country: 'Italy',
        name: 'Frecciarossa - Max Speed: 394km/h'
    },
    {
        img: 'img/fuxing-hao.jpg',
        country: 'China',
        name: 'Fuxing Hao - Max Speed: 420km/h'
    },
    {
        img: 'img/haramain-western.jpg',
        country: 'Saudi Arabia',
        name: 'Haramain - Max Speed: 300km/h'
    },
    {
        img: 'img/haramain-western2.jpg',
        country: 'Saudi Arabia',
        name: 'Haramain - Max Speed: 300km/h'
    },
    {
        img: 'img/italo.jpg',
        country: 'Italy',
        name: 'Italo - Max Speed: 360km/h'
    },
    {
        img: 'img/italo2.jpg',
        country: 'Italy',
        name: 'Italo - Max Speed: 360km/h'
    },
    {
        img: 'img/korail-ktx.jpg',
        country: 'South Korea',
        name: 'Korail Ktx - Max Speed: 305km/h'
    },
    {
        img: 'img/korail-ktx2.jpg',
        country: 'South Korea',
        name: 'Korail Ktx - Max Speed: 305km/h'
    },
    {
        img: 'img/maglev.jpg',
        country: 'China',
        name: 'Shangai Maglev - Max Speed: 600km/h'
    },
    {
        img: 'img/maglev2.jpg',
        country: 'Japan',
        name: 'SCMaglev - Max Speed: 600km/h'
    },
    {
        img: 'img/renfe-ave.jpg',
        country: 'Spain',
        name: 'Renfe Ave - Max Speed: 310km/h'
    },
    {
        img: 'img/renfe-ave2.jpg',
        country: 'Spain',
        name: 'Renfe Ave - Max Speed: 310km/h'
    },
    {
        img: 'img/shinkansen-h5.jpg',
        country: 'Japan',
        name: 'Shinkansen H5 - Max Speed: 443km/h'
    },
    {
        img: 'img/thalys.jpg',
        country: 'Belgium',
        name: 'Thalys - Max Speed: 320km/h'
    },
    {
        img: 'img/thalys2.jpg',
        country: 'Belgium',
        name: 'Thalys - Max Speed: 320km/h'
    }
];

function showImageInfo(randomImages) {
    let currentImage = images[randomImages].img;
    trainImage.src = currentImage;

    let currentName = images[randomImages].name;
    trainName.innerHTML = currentName;

    let currentCountry = images[randomImages].country;
    trainCountry.innerHTML = currentCountry;

    trainNumber.textContent = `${randomImages + 1} / ${images.length}`;
}

showBtn.addEventListener("click", () => {
    let randomImages = Math.floor(Math.random() * images.length);

    const galleryItems = [galleryImg, trainImage, trainName, trainCountry, trainNumber];    
    galleryItems.forEach((item) => item.classList.add("change"));
    setTimeout(() => galleryItems.forEach((item) => item.classList.remove("change")), 700);

    trainName.classList.add("overlay");
    setTimeout(() => trainName.classList.remove("overlay"), 700);

    setTimeout(() => showImageInfo(randomImages), 210);
});