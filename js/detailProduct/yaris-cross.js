const detail = [
    {
      image: "../assets/detailproduct/detail-yaris-cross/superWhite.jpg",
      color: "Super White",
      alt: "Toyota Yaris Cross - Super White",
    },
    {
        image: "../assets/detailproduct/detail-yaris-cross/superWhiteII(SpotOrder).jpg",
        color: "Super White II (Spot Order)",
        alt: "Toyota Yaris Cross - Super White II (Spot Order)",
      },
    {
      image: "../assets/detailproduct/detail-yaris-cross/attitudeBlackMica.jpg",
      color: "Attitude Black Mica",
      alt: "Toyota Yaris Cross - Black + Attitude Black Mica",
    },
    {
      image: "../assets/detailproduct/detail-yaris-cross/darkRedM.M(SpotOrder).jpg",
      color: "Dark Red M.M (Spot Order)",
      alt: "Toyota Yaris Cross - Dark Red M.M (Spot Order)",
    },
    {
      image: "../assets/detailproduct/detail-yaris-cross/greenishGreenmetalM.M(SpotOrder).jpg",
      color: "Greenish Greenmetal M.M (Spot Order)",
      alt: "Toyota Yaris Cross - Greenish Greenmetal M.M (Spot Order)",
    },
    {
      image: "../assets/detailproduct/detail-yaris-cross/silverMetalic.jpg",
      color: "Silver Metallic",
      alt: "Toyota Yaris Cross - Silver Metallic",
    },
    {
      image: "../assets/detailproduct/detail-yaris-cross/spicyScarlet.jpg",
      color: "Spicy Scarlet",
      alt: "Toyota Yaris Cross - Spicy Scarlet",
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
      image: "../assets/interior/interior-yaris-cross/interior1.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior2.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior3.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior4.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior5.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior6.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior7.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior8.jpg",
    },
    {
      image: "../assets/interior/interior-yaris-cross/interior9.jpg",
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
        name: "1.5 G",
        price_mt: "Rp353.500.000",
        price_at: "Rp366.500.000",
      },
      {
        name: "1.5 CVT TSS",
        price_mt: "-",
        price_at: "Rp410.000.000",
      },
      {
        name: "1.5 CVT TSS GR Package",
        price_mt: "-",
        price_at: "Rp419.000.000",
      },
      {
        name: "1.5 CVT TSS (Single Tone)",
        price_mt: "-",
        price_at: "Rp443.000.000",
      },
      {
        name: "1.5 CVT TSS GR TSS (Single Tone)",
        price_mt: "-",
        price_at: "Rp452.000.000",
      },
      {
        name: "1.5 CVT TSS GR TSS (Duel Tone)",
        price_mt: "-",
        price_at: "Rp456.000.000",
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
  