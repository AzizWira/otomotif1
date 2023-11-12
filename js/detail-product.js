const detail_alphard = [
  {
    image: "../assets/detail-alphard/image 67.png",
    color: "Putih",
    alt: "Toyota Alphard - Putih",
  },
  {
    image: "../assets/detail-alphard/image 68.png",
    color: "Hitam",
    alt: "Toyota Alphard - Hitam",
  },
];

const conOptionAlphard = document.getElementById("optionColorAlphard");
const previewImageAlphard = document.getElementById("previewImageAlphard");
const previewDescAlphard = document.getElementById("previewDescAlphard");
const updatePreview = (index) => {
  const selectedOption = detail_alphard[index];
  previewImageAlphard.src = selectedOption.image;
  previewImageAlphard.alt = selectedOption.alt;
  previewDescAlphard.textContent = selectedOption.color;
};

const optionAlphard = detail_alphard.map(
  (data, index) => `
      <div class="img" onclick="updatePreview(${index})">
        <img src="${data.image}" alt="${data.alt}" />
      </div>
    `
);

conOptionAlphard.innerHTML = optionAlphard.join("");

//

const interior_alphard = [
  {
    image: "../assets/interior-alphard/interior1.jpg",
  },
  {
    image: "../assets/interior-alphard/interior2.jpg",
  },
  {
    image: "../assets/interior-alphard/interior3.jpg",
  },
  {
    image: "../assets/interior-alphard/interior4.jpg",
  },
  {
    image: "../assets/interior-alphard/interior5.jpg",
  },
  {
    image: "../assets/interior-alphard/interior6.jpg",
  },
];

const conInteriorAlphard = document.getElementById("interiorAlphard");
const interiorAlphard = interior_alphard.map(
  (data) => `
            <div class="img">
                <img src="${data.image}" alt="interior alphard" />
            </div>
        `
);

conInteriorAlphard.innerHTML = interiorAlphard.join("");

//

const price_alphard = [
  {
    name: "2.5 X A/T",
    price_mt: "-",
    price_at: "Rp1.382.000.000",
  },
];

const tablePriceAlphard = document.getElementById("priceAlphard");

const priceAlphard = price_alphard.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePriceAlphard.innerHTML = priceAlphard.join("");

// end alphard


