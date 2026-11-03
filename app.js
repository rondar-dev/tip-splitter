const form = document.querySelector("#bill");
const result = document.querySelector("#result");

function update() {
  const total = Number(document.querySelector("#total").value);
  const tip = Number(document.querySelector("#tip").value);
  const people = Number(document.querySelector("#people").value);
  const each = (total * (1 + tip / 100)) / people;
  result.textContent = `Each person pays ${each.toFixed(2)}`;
}

form.addEventListener("input", update);
update();
