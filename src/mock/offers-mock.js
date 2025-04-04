import { getRandomPrice } from '../utils.js';

const minPrice = 40;
const maxPrice = 180;

const offersMock = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'a019a76f-cc37-46b0-9e33-439be462f4e4',
        'title': 'Upgrade to a business class',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '24df243c-5f58-461c-9568-580f36fde0c8',
        'title': 'Choose the radio station',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '8c511522-06b0-4653-a08e-ad2caacd6798',
        'title': 'Choose temperature',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'f451e1ce-e394-43e8-a5b5-dce2054091ec',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '82165fb5-18dd-4d78-b02c-e21a25d901b1',
        'title': 'Drive slowly',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': '33137e9d-1381-42d1-be7f-a1250a9c76a3',
        'title': 'Infotainment system',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': '7365445f-214a-4ced-9d56-2d595045dfea',
        'title': 'Order meal',
        'price': getRandomPrice(minPrice, maxPrice)
      },
      {
        'id': 'e145258c-df0e-4eeb-ba8b-7b76cb8290e4',
        'title': 'Choose seats',
        'price': getRandomPrice(minPrice, maxPrice)
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  }
];

export { offersMock };