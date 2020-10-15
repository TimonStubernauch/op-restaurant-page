import { changeContent } from '../index';

export default function nav() {
  const navContainer = document.createElement('div');
  navContainer.setAttribute('class', 'myNavContainer');

  const nav = document.createElement('ul');
  navContainer.appendChild(nav);
  nav.setAttribute('class', 'myNav');

  const items = ['Home', 'Menu', 'Impressum'];
  items.map(item => {
    const listItem = document.createElement('li');
    nav.appendChild(listItem);
    listItem.setAttribute('class', 'myNavItem');
    listItem.setAttribute('id', 'li' + item);
    // listItem.style.width = Math.floor(100 / items.length) - 1 + '%';
    // listItem.style.width = '50px';
    //Input
    const input = document.createElement('input');
    listItem.appendChild(input);
    input.setAttribute('class', 'myNavInput');
    input.setAttribute('id', 'input' + item);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'nav');
    input.setAttribute('value', item.toLowerCase());
    if (item === items[0]) {
      input.checked = true;
      changeContent(item.toLowerCase());
    } else {
      input.checked = false;
    }
    //Label
    const label = document.createElement('label');
    listItem.appendChild(label);
    label.setAttribute('class', 'myNavLabel');
    label.setAttribute('for', 'input' + item);
    label.innerHTML = item;
    //Event
    input.addEventListener('change', e => {
      changeContent(e.target.value);
    });
  });
  //Nav Item 1

  return navContainer;
}
