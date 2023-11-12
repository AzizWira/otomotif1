const detail = [
  {
    image: "../assets/detailproduct/detail-avanza/white.png",
    color: "Putih",
    alt: "Toyota Avanza - Putih",
  },
  {
    image: "../assets/detailproduct/detail-avanza/blackMetallic.png",
    color: "Hitam Metalic",
    alt: "Toyota Avanza - Hitam Metalic",
  },
  {
    image: "../assets/detailproduct/detail-avanza/grayMetallic.png",
    color: "Abu-abu Metalic",
    alt: "Toyota Avanza - Abu-abu Metalic",
  },
  {
    image: "../assets/detailproduct/detail-avanza/purplishSilver.png",
    color: "Silver Metalic",
    alt: "Toyota Avanza - Silver Metalic",
  },
  {
    image: "../assets/detailproduct/detail-avanza/silverMicaMetallic.png",
    color: "Silver Mica Metalic",
    alt: "Toyota Avanza - Silver Mica Metalic",
  },
];

const conOption = document.getElementById("optionColor");
const previewImage = document.getElementById("previewImage");
const previewDesc = document.getElementById("previewDesc");
const updatePreview = (index) => {
  const selectedOption = detail[index];
  previewImage.src = selectedOption.image;
  previewImage.alt = selectedOption.alt;
  previewDesc.textContent = selectedOption.color;
};

const option = detail.map(
  (data, index) => `
      <div class="img" onclick="updatePreview(${index})">
        <img src="${data.image}" alt="${data.alt}" />
      </div>
    `
);

conOption.innerHTML = option.join("");

//

const interior = [
  {
    image: "../assets/interior/interior-avanza/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-avanza/interior8.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorAvanza = interior.map(
  (data) => `
            <div class="img">
                <img src="${data.image}" alt="interior avanza" />
            </div>
        `
);

conInterior.innerHTML = interiorAvanza.join("");

//

const price = [
  {
    name: "Avanza E 1300 cc",
    price_mt: "Rp245.000.000",
    price_at: "Rp260.000.000",
  },
  {
    name: "Avanza G 1500 cc",
    price_mt: "Rp268.000.000",
    price_at: "Rp282.000.000",
  },
  {
    name: "Avanza G TSS 1500 cc",
    price_mt: "-",
    price_at: "Rp309.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceAvanza = price.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePrice.innerHTML = priceAvanza.join("");

// end avanza
