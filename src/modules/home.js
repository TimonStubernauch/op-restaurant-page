export default function home() {
  const home = document.createElement('div');
  // const header = document.createElement('h2');
  // home.appendChild(header);
  // header.innerHTML = 'Home';

  const aboutUsContainer = document.createElement('div');
  home.appendChild(aboutUsContainer);

  const aboutUsHeader = document.createElement('h3');
  aboutUsContainer.appendChild(aboutUsHeader);
  aboutUsHeader.innerHTML = 'About Us';

  const aboutUsFigure = document.createElement('figure');
  aboutUsContainer.appendChild(aboutUsFigure);
  aboutUsFigure.setAttribute('id', 'aboutUsFigure');

  const aboutUsImg = document.createElement('img');
  aboutUsFigure.appendChild(aboutUsImg);
  aboutUsImg.setAttribute('src', '../../public/aboutUs.jpg');
  aboutUsImg.setAttribute('id', 'aboutUsImg');

  const aboutUsP1 = document.createElement('p');
  aboutUsContainer.appendChild(aboutUsP1);
  aboutUsP1.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quam lacinia leo suscipit, at ultricies sapien sagittis. Nullam a ante at est rutrum tempor. Integer purus neque, tempus ac eros eget, ultrices dictum velit. Sed mollis venenatis tristique. Cras sed lorem tempor, euismod eros sit amet, hendrerit dui. Sed sed luctus urna. Nullam placerat est quis sem aliquam congue sit amet et turpis. Phasellus lobortis vel lacus nec ullamcorper. Curabitur tincidunt, ex id tempus dictum, felis ligula elementum lectus, at consequat felis libero sit amet elit. Nulla tincidunt nisi pellentesque finibus commodo. Donec maximus tellus at nunc aliquet hendrerit. Ut pulvinar ante et augue consectetur interdum.';
  const aboutUsP2 = document.createElement('p');
  aboutUsContainer.appendChild(aboutUsP2);
  aboutUsP2.innerHTML =
    'Cras condimentum eu nibh iaculis malesuada. Donec consequat scelerisque tellus a feugiat. Fusce condimentum faucibus ex, pharetra lacinia arcu eleifend id. Mauris vitae luctus nulla. Pellentesque malesuada ullamcorper ipsum ut gravida. Aenean ligula magna, maximus quis tortor ac, mattis mattis quam. Maecenas egestas placerat tellus, id tristique urna posuere non. Nam eleifend a dolor eu ultricies. Sed at neque ac risus semper viverra elementum ut augue. Ut finibus dolor purus, vel consequat odio ornare in.';
  const aboutUsP3 = document.createElement('p');
  aboutUsContainer.appendChild(aboutUsP3);
  aboutUsP3.innerHTML =
    'Vivamus sodales eros nibh, a molestie dui venenatis ut. Etiam ut pulvinar eros. Donec maximus arcu vel sagittis luctus. Ut varius orci quis dui varius, at iaculis sem placerat. Etiam vitae diam placerat, facilisis eros eu, bibendum nibh. Mauris interdum rhoncus mi. Donec ac sem ut lorem vehicula iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in semper orci. Quisque et purus scelerisque, convallis ligula ut, placerat lorem. Maecenas nec consequat lacus, a mattis elit. Sed finibus dolor vel felis aliquet, et mollis nunc tempor. Cras vehicula blandit nulla a cursus. Maecenas semper ipsum nec orci porttitor, ullamcorper pharetra metus blandit.';

  return home;
}
