const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const display = document.querySelector(".display");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter valid height";
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.5) {
      display.innerHTML = `<h3>Underweight</h3>`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      display.innerHTML = `<h3>Normal Weight</h3>`;
    }
    if (bmi >=  25 && bmi <= 29.9) {
      display.innerHTML = `<h3>Overweight</h3>`;
    }
    if (bmi > 29.9) {
      display.innerHTML = `<h3>Obese</h3>`;
    }
  }
});
