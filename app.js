// Generate a random four-digit ID for the food
function generateId() {
    return Math.floor(1000 + Math.random() * 9000);
  }
  
  // Calculate the price based on the food name
  function calculatePrice(foodName) {
    let price = 0;
    switch (foodName.toLowerCase()) {
      case "pizza":
        price = 8.35;
        break;
      case "burger":
        price = 4.25;
        break;
      case "apple":
        price = 0.63;
        break;
    }
    return price;
  }
  
  function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
  }
  
  Food.prototype.render = function() {
    const foodTable = document.getElementById("foodTable");
    const newRow = document.createElement("tr");
  
    const idCell = document.createElement("td");
    idCell.textContent = this.id;
    newRow.appendChild(idCell);
  
    const nameCell = document.createElement("td");
    nameCell.textContent = this.name;
    newRow.appendChild(nameCell);
  
    const typeCell = document.createElement("td");
    typeCell.textContent = this.type;
    newRow.appendChild(typeCell);
  
    const priceCell = document.createElement("td");
    priceCell.textContent = this.price.toFixed(2);
    newRow.appendChild(priceCell);
  
    foodTable.querySelector("tbody").appendChild(newRow);
  };
  
  function handleSubmit(e) {
    e.preventDefault();
  
    const foodName = document.getElementById("foodName").value;
    const foodType = document.getElementById("foodType").value;
    const foodPrice = calculatePrice(foodName);
  
    const food = new Food(generateId(), foodName, foodType, foodPrice);
    food.render();
  
    document.getElementById("foodForm").reset();
  }
  
  document.getElementById("foodForm").addEventListener("submit", handleSubmit);
  