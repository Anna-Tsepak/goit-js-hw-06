const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const generalEl = document.querySelector(".gallery");

const imageEl = images.map(image => `<li><img class="gallery" src=${image.url} width = '400' height = '250' alt='${image.alt}'/> </li>`)
  .join('')
generalEl.insertAdjacentHTML('beforeend', imageEl)

// generalEl.classList.add("new-class");


// images.forEach(element => {
//   generalEl.insertAdjacentHTML ('afterbegin',
//  `<li> <img src = ${element.url} alt = ${element.alt}  width = "400" height = "250"/> </li>`,
//   );
// });
// console.log (generalEl)


