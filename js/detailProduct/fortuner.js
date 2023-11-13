const detail = [
  {
    image: "../assets/detailproduct/detail-fortuner/superWhite.png",
    color: "Super White",
    alt: "Toyota Alphard - Super White",
  },
  {
    image: "../assets/detailproduct/detail-fortuner/attitudeBlack.png",
    color: "Black Attitude",
    alt: "Toyota Alphard - Hitam Attitude",
  },
  {
    image: "../assets/detailproduct/detail-fortuner/darkGrey.png",
    color: "Dark Grey Mica Metallic",
    alt: "Toyota Alphard - Dark Grey Mica Metallic",
  },
  {
    image: "../assets/detailproduct/detail-fortuner/platinumWhitePearl.png",
    color: "Platinum White Pearl Attitude Black",
    alt: "Toyota Alphard - Platinum White Pearl",
  },
  {
    image: "../assets/detailproduct/detail-fortuner/silverMetalic.png",
    color: "Silver Metalic",
    alt: "Toyota Alphard - Silver Metalic",
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
    image: "../assets/interior/interior-fortuner/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-fortuner/interior9.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorFortuner = interior.map(
  (data) => `
            <div class="img">
                <img src="${data.image}" alt="Interior Fortuner" />
            </div>
        `
);

conInterior.innerHTML = interiorFortuner.join("");

//

const price = [
  {
    name: "Fortuner 2.4 G 4x2",
    price_mt: "Rp570.000.000",
    price_at: "Rp589.000.000",
  },
  {
    name: "Fortuner 2.7 SRZ GR SPORT 4x2 (New Suffix)",
    price_mt: "-",
    price_at: "Rp611.000.000",
  },
  {
    name: "Fortuner 2.8 VRZ 4x2 A/T",
    price_mt: "-",
    price_at: "Rp628.000.000",
  },
  {
    name: "Fortuner 2.8 VRZ 4x2 A/T GR SPORT",
    price_mt: "-",
    price_at: "Rp647.000.000",
  },
];

const tablePrice = document.getElementById("price");

const priceFortuner = price.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePrice.innerHTML = priceFortuner.join("");

// end Fortuner
