import sloan1 from '../images/products/sloan1.png';
import sloan2 from '../images/products/sloan2.png';
import sloan3 from '../images/products/sloan3.png';
import sloan4 from '../images/products/sloan4.png';
import sloan5 from '../images/products/sloan5.png';
import sloan6 from '../images/products/sloan6.png';

import nespresso from '../images/products/nespresso.png';

import nest1 from '../images/products/nest1.png';
import nest2 from '../images/products/nest2.png';

import pendleton1 from '../images/products/pendleton1.png';
import pendleton2 from '../images/products/pendleton2.png';

const home = [
  {
    category: "Home",
    categoryId: 'home',
    id: 'sloan-sectional',
    name: "Sloan 3-Piece U-Sectional",
    price: 3245,
    image: sloan1,
    previewImage: sloan1,
    gallery: [
      sloan1,
      sloan2,
      sloan3,
      sloan4,
      sloan6,
      sloan5,
    ],
  },
  {
    category: "Home",
    categoryId: "home",
    id: 'nespresso',
    name: "Vertuo Coffee Machine",
    price: 209,
    image: nespresso,
    previewImage: nespresso,
    gallery: [
      nespresso,
    ],
  },
  {
    category: "Home",
    categoryId: 'home',
    id: 'pendleton',
    name: "Glacier National Park Blanket",
    price: 319,
    image: pendleton1,
    previewImage: pendleton1,
    gallery: [
      pendleton1,
      pendleton2,
    ],
  },
  {
    category: "Home",
    categoryId: "home",
    id: 'nest',
    name: "Grapefruit 3-Wick Candle",
    price: 74,
    image: nest1,
    previewImage: nest1,
    gallery: [
      nest1,
      nest2,
    ],
  },
];

export default home;