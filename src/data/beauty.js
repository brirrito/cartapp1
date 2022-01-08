import hairdryer from '../images/products/hairdryer.png';

import olaplex from '../images/products/olaplex1.png';

import shampoo1 from '../images/products/shampoo1.png';
import shampoo2 from '../images/products/shampoo2.png';

import sunscreen1 from '../images/products/sunscreen1.png';
import sunscreen2 from '../images/products/sunscreen2.png';
import sunscreen3 from '../images/products/sunscreen3.png';


const beauty = [
  {
    category: "Beauty",
    categoryId: 'beauty',
    id: 'hairdryer',
    name: 'Supersonic Hair Dryer',
    price: 399.99,
    image: hairdryer,
    previewImage: hairdryer,
    gallery: [hairdryer],
  },
  {
    category: "Beauty",
    categoryId: 'beauty',
    id: 'olaplex',
    name: "No. 3 Hair Perfector",
    price: 28,
    image: olaplex,
    previewImage: olaplex,
    gallery: [olaplex],
  },
  {
    category: "Beauty",
    categoryId: 'beauty',
    id: 'shampoo',
    name: "Color Conserve Shampoo",
    price: 26,
    image: shampoo1,
    previewImage: shampoo1,
    gallery: [
      shampoo1,
      shampoo2,
    ],
  },
  {
    category: "Beauty",
    categoryId: 'beauty',
    id: 'sunscreen',
    name: "Unseen Sunscreen SPF 40 PA++",
    price: 34,
    image: sunscreen1,
    previewImage: sunscreen1,
    gallery: [
      sunscreen1,
      sunscreen2,
      sunscreen3,
    ],
  },
];

export default beauty;