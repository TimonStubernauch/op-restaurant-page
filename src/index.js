import pageLoader from './modules/pageLoader';
import header from './modules/header';
import nav from './modules/nav';
import home from './modules/home';
import menu from './modules/menu';
import impressum from './modules/impressum';

let content = document.getElementById('content');
pageLoader(() => {
  content = document.getElementById('content');
  document.body.insertBefore(header(), content);
  document.body.insertBefore(nav(), content);
});

function changeContent(to) {
  clearContent(content);
  switch (to) {
    case 'home':
      content.appendChild(home());
      break;
    case 'menu':
      content.appendChild(menu());
      break;
    case 'impressum':
      content.appendChild(impressum());
      break;

    default:
      break;
  }
}

function clearContent(target) {
  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }
}
export { changeContent, clearContent };
