const detail = [
  {
    image: "../assets/detailproduct/detail-yaris/attitudeBlackMica.jpg",
    color: "Attitude Black Mica",
    alt: "Toyota Yaris - Attitude Black Mica",
  },
  {
    image: "../assets/detailproduct/detail-yaris/blackCltrusMiicaMetallic.jpg",
    color: "Black + Cltrus Mica Metallic",
    alt: "Toyota Yaris - Black + Cltrus Mica Metallic",
  },
  {
    image: "../assets/detailproduct/detail-yaris/blackRedMicaMetallic.jpg",
    color: "Black + Red Mica Metallic",
    alt: "Toyota Yaris - Black + Red Mica Metallic",
  },
  {
    image: "../assets/detailproduct/detail-yaris/blackSuperWhite.jpg",
    color: "Black + Super White",
    alt: "Toyota Yaris - Black + Super White",
  },
  {
    image: "../assets/detailproduct/detail-yaris/greyMitalic.jpg",
    color: "Grey Metallic",
    alt: "Toyota Yaris - Grey Metallic",
  },
  {
    image: "../assets/detailproduct/detail-yaris/superWhite.jpg",
    color: "Super White",
    alt: "Toyota Yaris - Super White",
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
    image: "../assets/interior/interior-yaris/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-yaris/interior9.jpg",
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
    name: "S 1500 cc GR SPORT 3 Airb (1 Tone) New",
    price_mt: "-",
    price_at: "Rp349.000.000",
  },
  {
    name: "S 1500 cc GR SPORT 3 Airb (2 Tone) New",
    price_mt: "-",
    price_at: "Rp353.000.000",
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
