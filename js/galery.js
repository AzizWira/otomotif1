const data_image = [
    {
        image: '../assets/galeri/mobil-toyota-alphard.svg',
        alt: 'Toyota Alphard'
    },
    {
        image: '../assets/galeri/galery-fortuner.svg',
        alt: 'Toyota Fortuner'
    },
    {
        image: '../assets/galeri/galery-yaris-cross.svg',
        alt: 'Toyota Yaris Cross'
    },
    {
        image: '../assets/galeri/galery-calya.svg',
        alt: 'Toyota Calya'
    },
    {
        image: '../assets/galeri/galery-agya.svg',
        alt: 'Toyota Agya'
    },
    {
        image: '../assets/galeri/galery-yaris.svg',
        alt: 'Toyota Yaris'
    },
    {
        image: '../assets/galeri/galery-innova-zenix.svg',
        alt: 'Toyota Innova Zenix'
    },
    {
        image: '../assets/galeri/galery-innova.svg',
        alt: 'Toyota Innova '
    }
];

const imageContainer = document.getElementById("contentGalery");

const fillGalery = data_image.map(
    (data) => `
    <div class="img">
        <img src="${data.image}" alt="${data.alt}">
    </div>
  `
);

imageContainer.innerHTML = fillGalery.join("");
