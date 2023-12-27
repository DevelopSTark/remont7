function update() {
  let inp = document.getElementById("ageInputId");
  let out = document.getElementById("ageOutputId");
  out.textContent = inp.value;
  out.style.left = (inp.value - inp.min) / (inp.max - inp.min) * 100 + "%";
}

document.getElementById("ageInputId").addEventListener('input', update);
update();