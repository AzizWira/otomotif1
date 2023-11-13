const detail = [
  {
    image: "../assets/detailproduct/detail-veloz/blackMetallic.jpg",
    color: "Black Metallic",
    alt: "Toyota Veloz - Black Metallic",
  },
  {
    image: "../assets/detailproduct/detail-veloz/silverMicaMetallic.jpg",
    color: "Silver Mica Metallic",
    alt: "Toyota Veloz - Silver Mica Metallic",
  },
  {
    image: "../assets/detailproduct/detail-veloz/platinumWhitePearl.jpg",
    color: "Platinum White Pearl",
    alt: "Toyota Veloz - Platinum White Pearl",
  },
  {
    image:
      "../assets/detailproduct/detail-veloz/darkRedMicaMetallic(SpotOrder).jpg",
    color: "Dark Red Mica Metallic (SpotOrder)",
    alt: "Toyota Veloz - Dark Red Mica Metallic (SpotOrder)",
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
    image: "../assets/interior/interior-veloz/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior9.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior10.jpg",
  },
  {
    image: "../assets/interior/interior-veloz/interior11.jpg",
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
    name: "Veloz 1.5 (Non Premium Color)",
    price_mt: "Rp299.000.000",
    price_at: "Rp314.000.000",
  },
  {
    name: "Veloz 1.5 (Premium Color)",
    price_mt: "Rp301.000.000",
    price_at: "Rp316.000.000",
  },
  {
    name: "Veloz 1.5 Q (Non Premium Color)",
    price_mt: "-",
    price_at: "Rp323.000.000",
  },
  {
    name: "Veloz 1.5 Q (Premium Color)",
    price_mt: "-",
    price_at: "Rp325.000.000",
  },
  {
    name: "Veloz 1.5 Q TSS (Non Premium Color)",
    price_mt: "-",
    price_at: "Rp346.000.000",
  },
  {
    name: "Veloz 1.5 Q TSS (Premium Color)",
    price_mt: "-",
    price_at: "Rp348.000.000",
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
