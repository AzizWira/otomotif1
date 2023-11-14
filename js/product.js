const data_product = [
  {
    type: "alphard",
    image: "../assets/mobil-alphard.jpg",
    alt: "Toyota Alphard",
    title: "ALPHARD",
    desc: "MPV | 2500 cc",
    price: "1.382 Miliar",
  },
  {
    type: "fortuner",
    image: "../assets/mobil-fortuner.jpg",
    alt: "Toyota Fortuner",
    title: "FORTUNER",
    desc: "SUV | 2700 cc",
    price: "570 Juta",
  },
  {
    type: "innovaZenix",
    image: "../assets/mobil-innova-zenix.jpg",
    alt: "Toyota Innova Zenix",
    title: "INNOVA ZENIX",
    desc: "MPV | 1987 cc",
    price: "433 Juta",
  },
  {
    type: "innova",
    image: "../assets/mobil-innova.jpg",
    alt: "Toyota Innova",
    title: "INNOVA",
    desc: "MPV | 2000 cc",
    price: "385 Juta",
  },
  {
    type: "rush",
    image: "../assets/mobil-rush.jpg",
    alt: "Toyota Rush",
    title: "RUSH",
    desc: "SUV | 1496 cc",
    price: "298 Juta",
  },
  {
    type: "yarisCross",
    image: "../assets/mobil-yaris-cross.jpg",
    alt: "Toyota Yaris Cross",
    title: "YARIS CROSS",
    desc: "SUV | 1500 cc",
    price: "353 Juta",
  },
  {
    type: "yaris",
    image: "../assets/mobil-yaris.jpg",
    alt: "Toyota Yaris",
    title: "YARIS",
    desc: "Hatchback | 1946 cc",
    price: "349 Juta",
  },
  {
    type: "agya",
    image: "../assets/mobil-agya.jpg",
    alt: "Toyota Agya",
    title: "AGYA",
    desc: "Hatchback | 1200 cc",
    price: "171 Juta",
  },
  {
    type: "veloz",
    image: "../assets/mobil-veloz.jpg",
    alt: "Toyota Veloz",
    title: "VELOZ",
    desc: "MPV | 1500 cc",
    price: "299 Juta",
  },
  {
    type: "avanza",
    image: "../assets/mobil-avanza.jpg",
    alt: "Toyota Avanza",
    title: "AVANZA",
    desc: "MPV | 1500 cc",
    price: "245 Juta",
  },
  {
    type: "raize",
    image: "../assets/mobil-raize.jpg",
    alt: "Toyota Raize",
    title: "RAIZE",
    desc: "SUV | 1200 cc",
    price: "241 Juta",
  },
  {
    type: "calya",
    image: "../assets/mobil-calya.jpg",
    alt: "Toyota Calya",
    title: "CALYA",
    desc: "MPV | 1197 cc",
    price: "171 Juta",
  },
];

const filterSelect = document.getElementById("filter-produk");
const productContainer = document.getElementById("productCar");

filterSelect.addEventListener("change", function () {
  const selectedProduct = filterSelect.value;
  filterProducts(selectedProduct);
});

function filterProducts(selectedProduct) {
  const filteredProducts = data_product.filter((product) => {
    return selectedProduct === "all" || product.type === selectedProduct;
  });

  const fillProduct = filteredProducts.map(
    (data) => `
        <div class="card-product-car" onclick="window.location.href = '/detail-${data.type}';">
          <img src="${data.image}" alt="${data.alt}" class="img-car" />
          <p class="text-type-car">${data.title}</p>
          <p class="car-price">Mulai : ${data.price}</p>
          <div class="title-type-car">
            <iconify-icon icon="mdi:car-outline" class="icon" width="24px"></iconify-icon>
            <p>${data.desc}</p>
          </div>
        </div>
      `
  );

  productContainer.innerHTML = fillProduct.join("");
}

// Inisialisasi dengan menampilkan semua produk saat halaman dimuat.
filterProducts("all");
