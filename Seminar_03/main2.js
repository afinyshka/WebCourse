// добавить в body div и input:
// <input type="text"></input>
// <div></div>

const inputEl = document.querySelector('input');
const divEl = document.querySelector('div');
 
inputEl.addEventListener('input', () => {
  const price = getPrice(inputEl.value);
  if (price === null) {
    divEl.textContent = 'Неизвестный фрукт';
  } else {
    divEl.textContent = `Цена ${inputEl.value} равна ${price}`;
  }
});
 
function getPrice(name) {
  switch (name) {
    case 'Бананы':
      return 60;
    case 'Манго':
      return 200;
    case 'Мандарины':
      return 80;
  }
  return null;
}