const data_product = [
  {
    image: "../assets/mobil-alphard.svg",
    alt: "Toyota Alphard",
    title: "ALPHARD",
    desc: "MPV | 2500 cc",
  },
  {
    image: "../assets/mobil-fortuner.svg",
    alt: "Toyota Fortuner",
    title: "FORTUNER",
    desc: "SUV | 2700 cc",
  },
  {
    image: "../assets/mobil-innova-zenix.svg",
    alt: "Toyota Innova Zenix",
    title: "INNOVA ZENIX",
    desc: "MPV | 1987 cc",
  },
  {
    image: "../assets/mobil-innova.svg",
    alt: "Toyota Innova",
    title: "INNOVA",
    desc: "MPV | 2000 cc",
  },
  {
    image: "../assets/mobil-rush.svg",
    alt: "Toyota Rush",
    title: "RUSH",
    desc: "SUV | 1496 cc",
  },
  {
    image: "../assets/mobil-yaris-cross.svg",
    alt: "Toyota Yaris Cross",
    title: "YARIS CROSS",
    desc: "Hatchback | 1500 cc",
  },
  {
    image: "../assets/mobil-yaris.svg",
    alt: "Toyota Yaris",
    title: "YARIS",
    desc: "Hatchback | 1946 cc",
  },
  {
    image: "../assets/mobil-agya.svg",
    alt: "Toyota Agya",
    title: "AGYA",
    desc: "Hatchback | 1200 cc",
  },
  {
    image: "../assets/mobil-veloz.svg",
    alt: "Toyota Veloz",
    title: "VELOZ",
    desc: "MPV | 1500 cc",
  },
  {
    image: "../assets/mobil-avanza.svg",
    alt: "Toyota Avanza",
    title: "AVANZA",
    desc: "MPV | 1500 cc",
  },
  {
    image: "../assets/mobil-raize.svg",
    alt: "Toyota Raize",
    title: "RAIZE",
    desc: "SUV | 1200 cc",
  },
  {
    image: "../assets/mobil-calya.svg",
    alt: "Toyota Calya",
    title: "CALYA",
    desc: "MPV | 1197 cc",
  },
  
];

const productContainer = document.getElementById("productCar");

const fillProduct = data_product.map(
  (data) => `
    <div class="card-product-car" >
        <img src="${data.image}"
            alt="${data.alt}"
            class="img-car"
          />
          <p class="text-type-car">${data.title}</p>
          <div class="title-type-car">
            <iconify-icon icon="mdi:car-outline" class="icon" width="24px"></iconify-icon>
            <p>${data.desc}</p>
        </div>
    </div>
  `
);

productContainer.innerHTML = fillProduct.join("");
