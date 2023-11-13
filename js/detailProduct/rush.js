const detail = [
  {
    image: "../assets/detailproduct/detail-rush/white.jpg",
    color: "White",
    alt: "Toyota Rush - White",
  },
  {
    image: "../assets/detailproduct/detail-rush/silverMicaMetallic.jpg",
    color: "Silver Mica Metallic",
    alt: "Toyota Rush - Silver Mica Metallic",
  },
  {
    image:
      "../assets/detailproduct/detail-rush/bronzeMicaMetallic(SpotOrder).jpg",
    color: "Bronze Mica Metallic (Spot Order)",
    alt: "Toyota Rush - Bronze Mica Metallic (Spot Order)",
  },
  {
    image:
      "../assets/detailproduct/detail-rush/darkRedMicaMetallic(SpotOrder).jpg",
    color: "Dark Red Mica Metallic (SpotOrder)",
    alt: "Toyota Rush - Dark Red Mica Metallic (SpotOrder)",
  },
  {
    image: "../assets/detailproduct/detail-rush/deepMaroonMica.jpg",
    color: "Deep Maroon Mica",
    alt: "Toyota Rush - Deep Maroon Mica",
  },
  {
    image: "../assets/detailproduct/detail-rush/blackMica.jpg",
    color: "Black Mica",
    alt: "Toyota Rush - Black Mica",
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
    image: "../assets/interior/interior-rush/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-rush/interior9.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorAgya = interior.map(
  (data) => `
              <div class="img">
                  <img src="${data.image}" alt="interior agya" />
              </div>
          `
);

conInterior.innerHTML = interiorAgya.join("");

//

const price = [
  {
    name: "G 1500 cc",
    price_mt: "Rp298.000.000",
    price_at: "Rp310.000.000",
  },
  {
    name: "1500 cc GR",
    price_mt: "Rp310.000.000",
    price_at: "Rp321.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceYaris = price.map(
  (data) => `
          <tr>
              <td>${data.name}</td>
              <td>${data.price_mt}</td>
              <td>${data.price_at}</td>
          </tr>
      `
);

tablePrice.innerHTML = priceYaris.join("");

// end Agya
