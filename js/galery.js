const data_image = [
    {
        image: '../assets/galeri/galery-alphard.jpg',
        alt: 'Toyota Alphard'
    },
    {
        image: '../assets/galeri/galery-fortuner.jpg',
        alt: 'Toyota Fortuner'
    },
    {
        image: '../assets/galeri/galery-yaris-cross.jpg',
        alt: 'Toyota Yaris Cross'
    },
    {
        image: '../assets/galeri/galery-calya.jpg',
        alt: 'Toyota Calya'
    },
    {
        image: '../assets/galeri/galery-agya.jpg',
        alt: 'Toyota Agya'
    },
    {
        image: '../assets/galeri/galery-yaris.jpg',
        alt: 'Toyota Yaris'
    },
    {
        image: '../assets/galeri/galery-avanza.jpg',
        alt: 'Toyota Avanza'
    },
    {
        image: '../assets/galeri/galery-veloz.jpg',
        alt: 'Toyota Veloz'
    },
    {
        image: '../assets/galeri/galery-rush.jpg',
        alt: 'Toyota Rush '
    },
    {
        image: '../assets/galeri/galery-innova-zenix.jpg',
        alt: 'Toyota Innova Zenix'
    },
    {
        image: '../assets/galeri/galery-innova.jpg',
        alt: 'Toyota Innova'
    },
    {
        image: '../assets/galeri/galery-raize.jpg',
        alt: 'Toyota Raize'
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
