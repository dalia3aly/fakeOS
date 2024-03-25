document.addEventListener("DOMContentLoaded", function () {
    // open the calculator modal
    document
      .getElementById("openCalcModal")
      .addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("calc-app").style.display = "block";
      });
  
    // closing the calculator modal
    document
      .querySelector(".close-calculator")
      .addEventListener("click", function () {
        document.getElementById("calc-app").style.display = "none";
      });
  
  
    // Handling number and operator button clicks
    document.querySelectorAll(".num-button, .op-button").forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.getAttribute("data-value") || button.innerText;
        handleInput(value);
      });
    });
  
    // Clear and Backspace functionalities (same function for both buttons for now)
    document
      .querySelector('[data-op="clear"]')
      .addEventListener("click", clearDisplay);
    document
      .querySelector('[data-op="backspace"]')
      .addEventListener("click", clearDisplay);
  });
  
  let currentInput = "";
  
  function handleInput(value) {
    if (value === "=") {
      calculate();
      return;
    }
  
    if (["+", "-", "*", "/", "2√", "^2"].includes(value)) {
      currentInput += ` ${value} `;
    } else {
      currentInput += value;
    }
    updateDisplay();
  }
  
  function clearDisplay() {
    currentInput = "";
    updateDisplay();
  }
  
  function updateDisplay() {
    document.getElementById("display").value = currentInput;
  }
  
  function calculate() {
    // Split the currentInput by spaces to separate numbers and operators into an array
    let parts = currentInput.trim().split(/\s+/);
    let result = 0;
  
    // critical unary operations first (square root, square)
    for (let i = 0; i < parts.length; i++) {
      switch (parts[i]) {
        case "√":
          // square root needs debugging
          parts[i + 1] = Math.sqrt(parseFloat(parts[i + 1])).toString();
          parts.splice(i, 1);
          i--;
          break;
        case "^2":
          // square the previous number and replace it
          parts[i - 1] = Math.pow(parseFloat(parts[i - 1]), 2).toString();
          parts.splice(i, 1);
          i--;
          break;
      }
    }
  
    // Reset result to handle the first number or the result of unary operations
    result = parseFloat(parts[0]);
  
    // Process binary operations
    for (let i = 1; i < parts.length; i += 2) {
      let operator = parts[i];
      let nextNumber = parseFloat(parts[i + 1]);
  
      switch (operator) {
        case "+":
          result += nextNumber;
          break;
        case "-":
          result -= nextNumber;
          break;
        case "*":
          result *= nextNumber;
          break;
        case "/":
          result /= nextNumber;
          break;
        default:
          console.error("Invalid operator:", operator);
          break;
      }
    }
  
    // convert the result to a string using isFinite
    if (Number.isFinite(result)) {
      currentInput = result.toString();
    } else {
      currentInput = "Error";
    }
    updateDisplay();
  }