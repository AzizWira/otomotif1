const detail = [
  {
    image: "../assets/detailproduct/detail-alphard/white.png",
    color: "Putih",
    alt: "Toyota Alphard - Putih",
  },
  {
    image: "../assets/detailproduct/detail-alphard/black.png",
    color: "Hitam",
    alt: "Toyota Alphard - Hitam",
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
    image: "../assets/interior/interior-alphard/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-alphard/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-alphard/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-alphard/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-alphard/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-alphard/interior6.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorAlphard = interior.map(
  (data) => `
            <div class="img">
                <img src="${data.image}" alt="interior alphard" />
            </div>
        `
);

conInterior.innerHTML = interiorAlphard.join("");

//

const price = [
  {
    name: "2.5 X A/T",
    price_mt: "-",
    price_at: "Rp1.382.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceAlphard = price.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePrice.innerHTML = priceAlphard.join("");

// end alphard
