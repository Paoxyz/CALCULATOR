 const display = document.getElementById("display");

    function append(value) {
      if (display.textContent === "0") display.textContent = "";
      display.textContent += value;
    }

    function clearDisplay() {
      display.textContent = "0";
    }

    function deleteLast() {
      display.textContent = display.textContent.slice(0, -1) || "0";
    }

    function calculate() {
      try {
        display.textContent = eval(display.textContent.replace(/÷/g, "/").replace(/×/g, "*"));
      } catch {
        display.textContent = "Error";
      }
    }