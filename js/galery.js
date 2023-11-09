const data_image = [
    {
        image: '../assets/galeri/toyota-alphard.jpg',
        alt: 'Toyota Alphard'
    },
    {
        image: '../assets/galeri/toyota-agya.jpg',
        alt: 'Toyota Agya'
    },
    {
        image: '../assets/galeri/toyota-cayla.jpg',
        alt: 'Toyota Cayla'
    },
    {
        image: '../assets/galeri/toyota-sienta.jpg',
        alt: 'Toyota Sienta'
    },
    {
        image: '../assets/galeri/toyota-fortuner.jpg',
        alt: 'Toyota Fortuner'
    },
    {
        image: '../assets/galeri/toyota-fortuner-gr.jpg',
        alt: 'Toyota Fortuner GR'
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
