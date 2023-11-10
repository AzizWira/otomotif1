let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 3000); 
}

// 

const data_show_product = [
  {
    image: "assets/mobil-alphard.svg",
    alt: "toyota alphard",
    name: "ALPHARD",
    tipe: "MPV",
    cc: "2500 cc",
    price: "Rp1.382 Milliar"
  },
  {
    image: "assets/mobil-fortuner.svg",
    alt: "toyota fortuner",
    name: "FORTUNER",
    tipe: "SUV",
    cc: "2700 cc",
    price: "Rp570 Juta"
  },
  {
    image: "assets/mobil-innova-zenix.svg",
    alt: "toyota innova zenix",
    name: "INNOVA ZENIX",
    tipe: "MPV",
    cc: "1987 cc",
    price: "Rp433 Juta"
  },
  {
    image: "assets/mobil-innova.svg",
    alt: "toyota innova",
    name: "INNOVA",
    tipe: "MPV",
    cc: "2000 cc",
    price: "Rp385 Juta"
  },
  {
    image: "assets/mobil-rush.svg",
    alt: "toyota rush",
    name: "RUSH",
    tipe: "SUV",
    cc: "1496 cc",
    price: "Rp298 Juta"
  },
  {
    image: "assets/mobil-yaris-cross.svg",
    alt: "toyota yaris cross",
    name: "YARIS CROSS",
    tipe: "Hatchback",
    cc: "1500 cc",
    price: "Rp353 Juta"
  },
  {
    image: "assets/mobil-yaris.svg",
    alt: "toyota yaris",
    name: "YARIS",
    tipe: "Hatchback",
    cc: "1496 cc",
    price: "Rp349 Juta"
  },
  {
    image: "assets/mobil-agya.svg",
    alt: "toyota agya",
    name: "AGYA",
    tipe: "Hatchback",
    cc: "1200 cc",
    price: "Rp171 Juta"
  },
];

const showProductContainer = document.getElementById("con-show-product");

const fillShowProduct = data_show_product.map(
  (data) => `
  <div class="card-show-product">
  <img
    src="${data.image}"
    alt="${data.alt}"
    class="img-car"
  />
  <p class="model-car">${data.name}</p>
  <p class="price-car">Mulai : ${data.price}</p>
  <div class="desc-car">
    <iconify-icon icon="mdi:car-outline" class="icon"></iconify-icon>
    <p>${data.tipe} | ${data.cc}</p>
    </div>
</div>
  `
);

showProductContainer.innerHTML = fillShowProduct.join("");
