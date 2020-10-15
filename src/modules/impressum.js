export default function impressum() {
  const imp = document.createElement('div');
  imp.setAttribute('id', 'imp');
  // const header = document.createElement('h2');
  // const br = document.createElement('br');
  // imp.appendChild(header);
  // header.innerHTML = 'Impressum';

  //Opening hours
  const bhContainer = document.createElement('div');
  imp.appendChild(bhContainer);

  const bhHeader = document.createElement('h3');
  bhContainer.appendChild(bhHeader);
  bhHeader.innerHTML = 'Opening Hours';

  const bhList = document.createElement('ul');
  bhContainer.appendChild(bhList);
  bhList.setAttribute('class', 'bhList');

  const days = ['Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days.map(day => {
    const bhListItem = document.createElement('li');
    bhList.appendChild(bhListItem);
    bhListItem.setAttribute('class', 'bhListItem');
    bhListItem.setAttribute('id', day);
    switch (day) {
      case 'Monday':
        bhListItem.innerHTML = day + ': closed';

        break;

      default:
        bhListItem.innerHTML = day + ': 12:00 - 15:00 and 17:00 - 22:00';
        break;
    }
  });

  //Contact
  const conContainer = document.createElement('div');
  imp.appendChild(conContainer);

  const conHeader = document.createElement('h3');
  conContainer.appendChild(conHeader);
  conHeader.innerHTML = 'Contact';

  const conContent = document.createElement('p');
  conContainer.append(conContent);
  conContent.innerHTML = 'Phone: 318-339-8994<br>Email: customerService@pappas.com';

  //Adress
  const adressContainer = document.createElement('div');
  imp.appendChild(adressContainer);

  const adressHeader = document.createElement('h3');
  adressContainer.appendChild(adressHeader);
  adressHeader.innerHTML = 'Adress';

  const adressContent = document.createElement('p');
  adressContainer.append(adressContent);
  adressContent.innerHTML = 'Street: 1738  Roguski Road<br>City: Jonesville<br>State: LA Louisiana<br>ZIP-Cpde: 71343';

  return imp;
}
