// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
let mainEl = document.getElementsByTagName('main');

mainEl[0].style.backgroundColor = 'var(--main-bg)';

mainEl[0].innerHTML = '<h1>DOM Manipulation</h1>';

mainEl[0].classList.add('flex-ctr');

// Part 2

let topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

// Part 3

menuLinks.forEach(function(link) {

    var linkElement = document.createElement('a');

    linkElement.href = link.href;

    linkElement.textContent = link.text;

    topMenuEl.appendChild(linkElement);
  });