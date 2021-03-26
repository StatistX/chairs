const sliderDots = document.querySelectorAll('.dot');
const sliderBottom = document.querySelector('.slider_bottom');

const slider = document.querySelector('.slider_header');

const sliderImages = [
  'url("./images/modern-minimalist-interior-with-an-armchair-on-empty-white-wall-3d-rendering.jpg")',
  'url("./images/beautiful-luxury-wooden-chair.jpg")',
  'url("./images/the-interior-has-a-armchair-on-empty-white-wall.jpg")',
  'url("./images/layers.png")',
  'url("./images/slider_84.png")',
  'url("./images/chair3.jpg")',
];

const changeBGImage = (block, id) => {
  block.style.backgroundImage = sliderImages[id];
}

sliderDots.forEach((el, ind) => {
  el.addEventListener('mouseenter', () => {
    console.log(ind);
    if (ind < 3 ) changeBGImage(slider, ind);
    else changeBGImage(sliderBottom, ind);
  })
})

const smallCards = document.querySelectorAll('.card_sm');
const cardsHoverable = document.querySelectorAll('.card__link_hover');

smallCards.forEach((el, id) => {
  el.addEventListener('mouseenter', () => {
    cardsHoverable[id].style.display = 'flex';
  });

  el.addEventListener('mouseleave', () => {
    cardsHoverable[id].style.display = 'none';
  });

})

// Search input in HEADER //

const searchImg = document.querySelector('.search_img');
const searchInput = document.querySelector('.search-input');

searchImg.addEventListener('mouseenter', () => {
  searchInput.style.visibility = 'visible';
  searchInput.style.width = '370px';
  searchInput.style.padding = '10px';

  // if (document.activeElement !== searchInput) {
  //   setTimeout(() => {
  //     searchInput.style.visibility = 'hidden';
  //     searchInput.style.width = '0';
  //     searchInput.style.padding = '0';
  //     searchInput.value = '';
  //   }, 3000)
  // }
})

document.addEventListener('click', (e) => {
  if (e.target.className !== 'search-input' &&
      e.target.className !== 'search_img') {
    searchInput.style.visibility = 'hidden';
    searchInput.style.width = '0';
    searchInput.style.padding = '0';
    searchInput.value = '';
  }
})


// ------------------------ //

