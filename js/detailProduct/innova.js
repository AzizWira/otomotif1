const detail = [
    {
      image: "../assets/detailproduct/detail-innova/silverMetalic.jpg",
      color: "Silver Metalic",
      alt: "Toyota Innova - Silver Metalic",
    },
    {
      image: "../assets/detailproduct/detail-innova/darkGreyMicaMetalic.jpg",
      color: "Black + Cltrus Mica Metallic",
      alt: "Toyota Innova - Black + Cltrus Mica Metallic",
    },
    {
      image: "../assets/detailproduct/detail-innova/attitudeBlack.jpg",
      color: "Attitude Black",
      alt: "Toyota Innova - Attitude Black",
    },
    {
      image: "../assets/detailproduct/detail-innova/superWhite2.jpg",
      color: "Super White 2",
      alt: "Toyota Innova - Super White 2",
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
      image: "../assets/interior/interior-innova/interior1.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior2.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior3.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior4.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior5.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior6.jpg",
    },
    {
      image: "../assets/interior/interior-innova/interior7.jpg",
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
        name: "Innova G 2000 cc",
        price_mt: "Rp385.000.000",
        price_at: "-",
    },
    {
        name: "Innova G 2400 cc",
        price_mt: "Rp420.000.000",
        price_at: "Rp438.000.000",
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
  