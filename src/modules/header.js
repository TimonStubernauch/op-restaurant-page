export default function header() {
  const header = document.createElement('div');
  header.setAttribute('class', 'myHeader');

  const title = document.createElement('h1');
  title.innerHTML = "Pappa's Pizza";
  title.setAttribute('id', 'title');

  header.appendChild(title);

  return header;
}
