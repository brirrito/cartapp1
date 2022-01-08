import dogcoat1 from '../images/products/dogcoat1.png';
import dogcoat2 from '../images/products/dogcoat2.png';
import dogcoat3 from '../images/products/dogcoat3.png';
import dogcoat4 from '../images/products/dogcoat4.png';

import harness from '../images/products/harness.png';
import harness1 from '../images/products/harness1.png';
import harness3 from '../images/products/harness3.png';

import leash1 from '../images/products/leash1.png';
import leash2 from '../images/products/leash2.png';
import leash3 from '../images/products/leash3.png';
import leash4 from '../images/products/leash4.png';

const pets = [
  {
    category: 'Pets',
    categoryId: 'pets',
    id: 'dogcoat',
    name: 'Quinzee Dog Jacket',
    price: 74.95,
    image: dogcoat1,
    previewImage: dogcoat1,
    gallery: [
      dogcoat1,
      dogcoat2,
      dogcoat3,
      dogcoat4,
    ],
  },
  {
    category: "Pets",
    categoryId: 'pets',
    id: 'harness',
    name: "Front Range Dog Harness",
    price: 39.95,
    image: harness,
    previewImage: harness,
    gallery: [
      harness,
      harness1,
      harness3,
    ],
  },
  {
    category: "Pets",
    categoryId: 'pets',
    id: 'leash',
    name: "Crag Reflective Dog Leash",
    price: 34.95,
    image: leash1,
    previewImage: leash1,
    gallery: [
      leash1,
      leash2,
      leash3,
      leash4,
    ],
  },
];

export default pets;
