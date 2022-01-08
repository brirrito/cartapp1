import anker from '../images/products/anker.png';

import arbor from '../images/products/arbor.png';

import cases from '../images/products/case.png';
import case1 from '../images/products/case1.png';

import passport from '../images/products/passport.png';
import passport2 from '../images/products/passport2.png';
import passport3 from '../images/products/passport3.png';

const travel = [
  {
    category: "Travel",
    categoryId: 'travel',
    id: "anker",
    name: '737 Powerbank',
    price: 159.99,
    image: anker,
    previewImage: anker,
    gallery: [
      anker,
    ],
  },
  {
    category: "Travel",
    categoryId: 'travel',
    id: 'arbor',
    name: "Arbor Lid Pack 28L",
    price: 99,
    image: arbor,
    previewImage: arbor,
    gallery: [
      arbor,
    ],
  },
  {
    category: "Travel",
    cateogryId: 'travel',
    id: 'cases',
    name: "Clear Cosmetics Case",
    price: 85,
    image: cases,
    previewImage: cases,
    gallery: [
      cases,
      case1,
    ],
  },
  {
    category: "Travel",
    categoryId: 'travel',
    id: 'passport',
    name: "Deluxe Passport Cover",
    price: 60,
    image: passport,
    previewImage: passport,
    gallery: [
      passport,
      passport2,
      passport3,
    ],
  },
];

export default travel;