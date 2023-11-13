const detail = [
  {
    image: "../assets/detailproduct/detail-raize/black.jpg",
    color: "Black",
    alt: "Toyota Raize - Black",
  },
  {
    image: "../assets/detailproduct/detail-raize/blackRed.jpg",
    color: "Black Red",
    alt: "Toyota Raize - Black Red",
  },
  {
    image: "../assets/detailproduct/detail-raize/blackSilverMetallic.jpg",
    color: "Black Silver Metallic",
    alt: "Toyota Raize - Black Silver Metallic",
  },
  {
    image: "../assets/detailproduct/detail-raize/blackturquoiseMM.jpg",
    color: "Black Turquoise MM",
    alt: "Toyota Raize - Black Turquoise MM",
  },
  {
    image: "../assets/detailproduct/detail-raize/blackWhite.jpg",
    color: "Black White",
    alt: "Toyota Raize - Black White",
  },
  {
    image: "../assets/detailproduct/detail-raize/blackYellowSE.jpg",
    color: "Black Yellow SE",
    alt: "Toyota Raize - Black Yellow SE",
  },
  {
    image: "../assets/detailproduct/detail-raize/greyMetallic.jpg",
    color: "Grey Metallic",
    alt: "Toyota Raize - Grey Metallic",
  },
  {
    image: "../assets/detailproduct/detail-raize/silverMetallic.jpg",
    color: "Silver Metallic",
    alt: "Toyota Raize - Silver Metallic",
  },
  {
    image: "../assets/detailproduct/detail-raize/red.jpg",
    color: "Red",
    alt: "Toyota Raize - Red",
  },
  {
    image: "../assets/detailproduct/detail-raize/torquiseMM.jpg",
    color: "Turquoise MM",
    alt: "Toyota Raize - Turquoise MM",
  },
  {
    image: "../assets/detailproduct/detail-raize/yellowSE(SpotOrder).jpg",
    color: "Yellow SE SpotOrder",
    alt: "Toyota Raize - Yellow SE SpotOrder",
  },
  {
    image: "../assets/detailproduct/detail-raize/white.jpg",
    color: "White",
    alt: "Toyota Raize - White",
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
    image: "../assets/interior/interior-raize/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-raize/interior9.jpg",
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
        name: "1.2 G CVT (1 Tone)",
        price_mt: "Rp241.000.000",
        price_at: "Rp256.000.000",
      },
      {
        name: "1.0 T G",
        price_mt: "Rp261.000.000",
        price_at: "Rp276.000.000",
      },
      {
        name: "1.0 T G CVT (1 Tone)",
        price_mt: "-",
        price_at: "Rp276.000.000",
      },
      {
        name: "1.0 T G CVT (2 Tone)",
        price_mt: "-",
        price_at: "Rp279.000.000",
      },
      {
        name: "1.0 T GR SPORT CVT (1 Tone)",
        price_mt: "-",
        price_at: "Rp290.000.000",
      },
      {
        name: "1.0 T GR SPORT CVT (2 Tone)",
        price_mt: "-",
        price_at: "Rp293.000.000",
      },
      {
        name: "1.0 T GR SPORT CVT TSS (1 Tone)",
        price_mt: "-",
        price_at: "Rp312.000.000",
      },
      {
        name: "1.0 T GR SPORT CVT TSS (2 Tone)",
        price_mt: "-",
        price_at: "Rp315.000.000",
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
