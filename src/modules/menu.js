import { clearContent } from '../index';
import { createFoodItem } from '../creater/foodCreator';

export default function menu() {
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'myMenuContainer');

  const menuOptions = document.createElement('ul');
  menuContainer.appendChild(menuOptions);
  menuOptions.setAttribute('class', 'myNav');

  const menuContent = document.createElement('div');
  menuContainer.appendChild(menuContent);
  menuContent.setAttribute('class', 'menuContent');

  const items = ['Pizza', 'Sides', 'Dessert'];
  items.map(item => {
    const listItem = document.createElement('li');
    menuOptions.appendChild(listItem);
    listItem.setAttribute('class', 'myNavItem menuOptions');
    listItem.setAttribute('id', 'li' + item);
    // listItem.style.width = Math.floor(100 / items.length) - 1 + '%';
    // listItem.style.width = '50px';
    //Input
    const input = document.createElement('input');
    listItem.appendChild(input);
    input.setAttribute('class', 'myNavInput myOptionsInput');
    input.setAttribute('id', 'input' + item);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'options');
    input.setAttribute('value', item.toLowerCase());
    if (item === items[0]) {
      input.checked = true;
      changemenu(item.toLowerCase(), menuContent);
    } else {
      input.checked = false;
    }
    //Label
    const label = document.createElement('label');
    listItem.appendChild(label);
    label.setAttribute('class', 'myNavLabel myOptionsLable');
    label.setAttribute('for', 'input' + item);
    label.innerHTML = item;
    //Event
    input.addEventListener('change', e => {
      changemenu(e.target.value, menuContent);
    });
  });

  return menuContainer;
}

function changemenu(option, target) {
  clearContent(target);

  const menuList = document.createElement('ul');
  target.appendChild(menuList);
  menuList.setAttribute('class', 'menuList');

  switch (option) {
    case 'pizza':
      createFoodItem(option, menuList);
      break;
    case 'sides':
      createFoodItem(option, menuList);
      break;
    case 'dessert':
      createFoodItem(option, menuList);
      break;

    default:
      break;
  }
}
