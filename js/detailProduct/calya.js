const detail = [
  {
    image: "../assets/detailproduct/detail-calya/white.png",
    color: "Putih",
    alt: "Toyota Calya - Putih",
  },
  {
    image: "../assets/detailproduct/detail-calya/silverMetalic.png",
    color: "Silver Metalic",
    alt: "Toyota Calya - Silver Metalic",
  },

  {
    image: "../assets/detailproduct/detail-calya/black.png",
    color: "Hitam",
    alt: "Toyota Calya - Hitam",
  },
  {
    image: "../assets/detailproduct/detail-calya/grayMetalic.png",
    color: "Gray Metalic",
    alt: "Toyota Calya - Gray Metalic",
  },
  {
    image: "../assets/detailproduct/detail-calya/red.png",
    color: "Merah",
    alt: "Toyota Calya - Merah",
  },
  {
    image: "../assets/detailproduct/detail-calya/orangeMetalic.png",
    color: "Orange Metalic",
    alt: "Toyota Calya - Orange Metalic",
  },
  {
    image: "../assets/detailproduct/detail-calya/bronzeMicaMetalic.png",
    color: "Bronze Mica Metalic",
    alt: "Toyota Calya - Bronze Mica Metalic",
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
    image: "../assets/interior/interior-calya/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-calya/interior8.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorCalya = interior.map(
  (data) => `
              <div class="img">
                  <img src="${data.image}" alt="interior Calya" />
              </div>
          `
);

conInterior.innerHTML = interiorCalya.join("");

//

const price = [
  {
    name: "Calya 1.2 E Std (Non ABS) Low",
    price_mt: "Rp171.000.000",
    price_at: "-",
  },
  {
    name: "Calya 1.2 E Std (Non ABS)",
    price_mt: "Rp173.000.000",
    price_at: "-",
  },
  {
    name: "Calya 1.2 E",
    price_mt: "Rp177.000.000",
    price_at: "-",
  },
  {
    name: "Calya 1.2 G",
    price_mt: "Rp182.000.000",
    price_at: "Rp196.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceCalya = price.map(
  (data) => `
          <tr>
              <td>${data.name}</td>
              <td>${data.price_mt}</td>
              <td>${data.price_at}</td>
          </tr>
      `
);

tablePrice.innerHTML = priceCalya.join("");

// end calya
