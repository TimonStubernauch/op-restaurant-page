const toppings = ['Salami', 'Ham', 'Peppers', 'Mushrooms', 'Onion', 'Pepperoni', 'Cheddar', 'Mozzarella', 'Tomato'];
const sides = ['French Fries', 'Cuntry Fries', 'Pizza Roles'];
const dessert = ["Pappa's Ice", 'Strawberry Milkshake', 'Vanilla Milkshake', 'Choco Milkshake'];

let sidesNum = 0;
let dessertNum = 0;

function createFoodItem(type, list) {
  dessertNum = 0;
  sidesNum = 0;
  switch (type) {
    case 'pizza':
      createItem(type, Math.floor(Math.random() * 10)).map(item => {
        list.appendChild(item);
      });
      break;
    case 'sides':
      createItem(type, sides.length).map(item => {
        list.appendChild(item);
      });
      break;
    case 'dessert':
      createItem(type, dessert.length).map(item => {
        list.appendChild(item);
      });
      break;

    default:
      break;
  }
}
function createItem(type, numOf) {
  const items = [];
  for (let index = 0; index < numOf; index++) {
    const item = document.createElement('li');
    item.setAttribute('class', 'foodItem');
    item.setAttribute('id', type + 'Item' + index);

    const ingredients = getIngrediens(type, Math.floor(Math.random() * 4) + 1);

    const foodContainer = document.createElement('div');
    item.appendChild(foodContainer);
    foodContainer.setAttribute('class', 'foodContainer');

    const foodImg = document.createElement('img');
    foodContainer.appendChild(foodImg);
    foodImg.setAttribute('class', 'foodImg');
    foodImg.setAttribute('src', '../../dist/' + type + '.jpg');

    const foodInfo = document.createElement('div');
    foodContainer.appendChild(foodInfo);
    foodInfo.setAttribute('class', 'foodInfo');

    const foodHeader = document.createElement('p');
    foodInfo.appendChild(foodHeader);
    foodHeader.setAttribute('class', 'foodHeader');

    const foodDetails = document.createElement('p');
    foodInfo.appendChild(foodDetails);
    foodDetails.setAttribute('class', 'foodDetails');

    const foodPriceContainer = document.createElement('div');
    foodContainer.appendChild(foodPriceContainer);
    foodPriceContainer.setAttribute('class', 'foodPriceContainer');

    const foodPrize = document.createElement('p');
    foodPriceContainer.appendChild(foodPrize);
    foodPrize.setAttribute('class', 'foodPrize');
    let price = 0;

    switch (type) {
      case 'pizza':
        price = 4.5;
        price += ingredients.length * 1.2;
        foodHeader.innerHTML = ingredients[0] + ' Pizza';
        let foodDetailsText = 'This ' + type + ' includes: ';
        ingredients.map(x => {
          foodDetailsText += x + ', ';
        });
        foodDetails.innerHTML = foodDetailsText;
        break;
      case 'sides':
        foodHeader.innerHTML = ingredients;
        foodDetails.innerHTML = 'A delicious Side';
        price = 2;
        break;
      case 'dessert':
        foodHeader.innerHTML = ingredients;
        foodDetails.innerHTML = 'A delicious Dessert';
        price = 4;
        break;

      default:
        break;
    }
    foodPrize.innerHTML = price + ' $';

    items.push(item);
  }
  return items;
}

function getIngrediens(type, numOf) {
  let chosen = [];

  switch (type) {
    case 'pizza':
      for (let index = 0; index < numOf; index++) {
        let rnd = '';
        let t = '';
        rnd = Math.floor(Math.random() * toppings.length);
        t = toppings[rnd];
        if (!chosen.includes(t)) {
          chosen.push(t);
        } else {
          index--;
        }
      }
      break;
    case 'sides':
      chosen = sides[sidesNum];
      sidesNum++;
      break;
    case 'dessert':
      chosen = dessert[dessertNum];
      dessertNum++;
      break;

    default:
      break;
  }

  return chosen;
}
export { createFoodItem };
