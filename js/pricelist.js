const list_item = [
    {
        "model" : "Calya",
        "name" : "Calya 1.2 E Std (Non ABS) Low",
        "price-mt" : "Rp171.000.000",
        "price-at" : "-",
    },
    {
        "model" : "Calya",
        "name" : "Calya 1.2 E Std (Non ABS)",
        "price-mt" : "Rp173.000.000",
        "price-at" : "-",
    },
    {
        "model" : "Calya",
        "name" : "Calya 1.2 E",
        "price-mt" : "Rp177.000.000",
        "price-at" : "-",
    },
    {
        "model" : "Calya",
        "name" : "Calya 1.2 G",
        "price-mt" : "Rp182.000.000",
        "price-at" : "Rp196.000.000",
    },
    {
        "model" : "Agya",
        "name" : "1.2 E",
        "price-mt" : "Rp171.000.000",
        "price-at" : "-",
    },
    {
        "model" : "Agya",
        "name" : "1.2 G",
        "price-mt" : "Rp179.000.000",
        "price-at" : "Rp195.000.000",
    },
    {
        "model" : "Agya",
        "name" : "1.2 GR Single Tone",
        "price-mt" : "Rp241.000.000",
        "price-at" : "Rp257.000.000",
    },
    {
        "model" : "Agya",
        "name" : "1.2 GR Two Tone",
        "price-mt" : "Rp243.000.000",
        "price-at" : "Rp259.000.000",
    }
];

const tableContainer = document.getElementById("table-container");

let currentModel = null;
let currentTable = null;
for (const item of list_item) {
    if (item.model !== currentModel) {
        // Create a new table for each model category
        currentModel = item.model;
        currentTable = document.createElement("table");

        // Create the table headers
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const modelHeader = document.createElement("th");
        modelHeader.textContent = currentModel;
        headerRow.appendChild(modelHeader);

        const mtHeader = document.createElement("th");
        mtHeader.textContent = "Harga Manual (M/T)";
        headerRow.appendChild(mtHeader);

        const atHeader = document.createElement("th");
        atHeader.textContent = "Harga Otomatis (A/T)";
        headerRow.appendChild(atHeader);

        thead.appendChild(headerRow);
        currentTable.appendChild(thead);

        // Create the table body
        const tbody = document.createElement("tbody");
        currentTable.appendChild(tbody);

        tableContainer.appendChild(currentTable);
    }

    // Create a row for each data item
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    const priceMTCell = document.createElement("td");
    priceMTCell.textContent = item["price-mt"];
    const priceATCell = document.createElement("td");
    priceATCell.textContent = item["price-at"];

    row.appendChild(nameCell);
    row.appendChild(priceMTCell);
    row.appendChild(priceATCell);

    // Append the row to the current table
    currentTable.querySelector("tbody").appendChild(row);
}