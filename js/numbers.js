const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('span[data-min-value]');
const outputE2 = document.querySelector('span[data-max-value]');
const outputE3 = document.querySelector('span[data-min-position]');
const outputE4 = document.querySelector('span[data-max-position]');

const numbers = [];
let min;
let max;

btnAdd.addEventListener('click', function () {
  const value = Number(valueInput.value);
  numbers.push(value);
  min = Math.min.apply(null, numbers);
  max = Math.max.apply(null, numbers);
  outputEl.textContent = min;
  outputE2.textContent = max;
  valueInput.value = '';

  for (const number of numbers) {
    outputE3.textContent = numbers.indexOf(min) + 1;
    outputE4.textContent = numbers.indexOf(max) + 1;
  }
});

resetBtn.addEventListener('click', function () {
  numbers.length = 0;
  min = '';
  max = '';
  outputEl.textContent = 0;
  outputE2.textContent = 0;
  outputE3.textContent = 0;
  outputE4.textContent = 0;
});
