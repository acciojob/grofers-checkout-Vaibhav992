const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Select correct class name
    const prices = document.querySelectorAll(".price");

    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    const table = document.querySelector("table");

    // Prevent multiple total rows
    const existingTotal = document.getElementById("total-row");
    if (existingTotal) existingTotal.remove();

    const newRow = document.createElement("tr");
    newRow.id = "total-row";

    const newCell = document.createElement("td");
    newCell.textContent = total;
    newCell.colSpan = 2;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);