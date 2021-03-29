const sliderDots = document.querySelectorAll('.dot');
const sliderBottom = document.querySelector('.slider_bottom');

const headerLinks = document.querySelectorAll('.header__link');

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
    if (ind < 3) changeBGImage(slider, ind);
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

// Scroll to Trending Products //

const productsScreen = document.querySelector('#Trending_products');

headerLinks[1].addEventListener('click', (e) => {
  e.preventDefault();
  console.log('sfsdfdsf')
  productsScreen.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ------------------------ //

// Product Cards Rotate //

const cardsImg = document.querySelectorAll('.card_l_img');

cardsImg.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'rotate3d(0,1,0,180deg)';
    setTimeout(() => {
      el.style.transform = ''
    }, 1000)
  })
});

// ------------------------ //

// Contacts shrink //

const contactsBtn = document.querySelectorAll('.header__link')[4];
const contactsBlock = document.querySelector('.contacts');

contactsBtn.addEventListener('click', () => {
  contactsBlock.style.display = 'block';
  contactsBlock.classList.add('shrink');
})

document.addEventListener('click', (e) => {
  console.log(e.target.classList)
  if (e.target.className !== 'contacts__content' &&
    e.target.className !== 'contacts__title' &&
    e.target.className !== 'contacts__place' &&

    e.target.className !== 'header__link' &&
    contactsBlock.style.display === 'block') {
    contactsBlock.style.display = 'none';
  }

})

// ------------------------ //
