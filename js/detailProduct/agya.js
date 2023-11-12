const detail = [
  {
    image: "../assets/detailproduct/detail-agya/white.png",
    color: "Putih",
    alt: "Toyota Agya - Putih",
  },
  {
    image: "../assets/detailproduct/detail-agya/blackWhite.png",
    color: "Hitam Putih",
    alt: "Toyota Agya - Hitam Putih",
  },
  {
    image: "../assets/detailproduct/detail-agya/black.png",
    color: "Hitam",
    alt: "Toyota Agya - Hitam",
  },
  {
    image: "../assets/detailproduct/detail-agya/red.png",
    color: "Merah",
    alt: "Toyota Agya - Merah",
  },
  {
    image: "../assets/detailproduct/detail-agya/blackRed.png",
    color: "Hitam Merah",
    alt: "Toyota Agya - Hitam Merah",
  },
  {
    image: "../assets/detailproduct/detail-agya/yellow.png",
    color: "Kuning",
    alt: "Toyota Agya - Kuning",
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
    image: "../assets/interior/interior-agya/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-agya/interior8.jpg",
  }
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
    name: "Agya 1.2 E",
    price_mt: "Rp171.000.000",
    price_at: "-",
  },
  {
    name: "Agya 1.2 G",
    price_mt: "Rp179.000.000",
    price_at: "Rp195.000.000",
  },
  {
    name: "Agya 1.2 GR Single Tone",
    price_mt: "Rp241.000.000",
    price_at: "Rp257.000.000",
  },
  {
    name: "Agya 1.2 GR Two Tone",
    price_mt: "Rp243.000.000",
    price_at: "Rp259.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceAgya = price.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePrice.innerHTML = priceAgya.join("");

// end Agya
