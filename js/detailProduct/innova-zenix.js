const detail = [
  {
    image: "../assets/detailproduct/detail-innova-zenix/platinumWhitePearl.png",
    color: "Platinum White Pearl",
    alt: "Toyota Innova Zenix - Platinum White Pearl",
  },
  {
    image: "../assets/detailproduct/detail-innova-zenix/attitudeBlack.png",
    color: "Attitude Black",
    alt: "Toyota Innova Zenix - Attitude Black",
  },
  // grayMetalic, silverMetalic
  {
    image: "../assets/detailproduct/detail-innova-zenix/greyMetalic.png",
    color: "Grey Metalic",
    alt: "Toyota Innova Zenix - Grey Metalic",
  },
  {
    image: "../assets/detailproduct/detail-innova-zenix/silverMetalic.png",
    color: "Silver Metalic",
    alt: "Toyota Innova Zenix - Silver Metalic",
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
    image: "../assets/interior/interior-innova-zenix/interior1.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior2.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior3.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior4.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior5.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior6.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior7.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior8.jpg",
  },
  {
    image: "../assets/interior/interior-innova-zenix/interior9.jpg",
  },
];

const conInterior = document.getElementById("interior");
const interiorInnovaZenix = interior.map(
  (data) => `
            <div class="img">
                <img src="${data.image}" alt="interior Innova Zenix" />
            </div>
        `
);

conInterior.innerHTML = interiorInnovaZenix.join("");

//

const price = [
  {
    name: "Innova Zenix 2.0 G CVT",
    price_mt: "-",
    price_at: "Rp433.000.000",
  },
  {
    name: "Innova Zenix 2.0 V CVT",
    price_mt: "-",
    price_at: "Rp480.000.000",
  },
  {
    name: "Innova Zenix 2.0 G HV CVT",
    price_mt: "-",
    price_at: "Rp480.000.000",
  },
  {
    name: "Innova Zenix 2.0 V HV CVT Modellista",
    price_mt: "-",
    price_at: "Rp555.000.000",
  },
  {
    name: "Innova Zenix 2.0 Q HV CVT Modellista",
    price_mt: "-",
    price_at: "Rp634.000.000",
  }
];

const tablePrice = document.getElementById("price");

const priceInnovaZenix = price.map(
  (data) => `
        <tr>
            <td>${data.name}</td>
            <td>${data.price_mt}</td>
            <td>${data.price_at}</td>
        </tr>
    `
);

tablePrice.innerHTML = priceInnovaZenix.join("");

// end Innova Zenix
