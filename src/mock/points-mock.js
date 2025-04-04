import { getRandomPrice } from '../utils.js';

const minPrice = 240;
const maxPrice = 4100;

const pointsMock = [
  {
    'id': '29843238-07fa-4913-aa6e-796c6c046231',
    'basePrice': getRandomPrice(minPrice, maxPrice),
    'dateFrom': '2025-02-22T18:36:12.532Z',
    'dateTo': '2025-02-24T16:08:12.532Z',
    'destination': '725e1b1b-f856-494b-9214-fa56bdd65c56',
    'isFavorite': true,
    'offers': [
      '33137e9d-1381-42d1-be7f-a1250a9c76a3',
      '7365445f-214a-4ced-9d56-2d595045dfea',
      'e145258c-df0e-4eeb-ba8b-7b76cb8290e4'
    ],
    'type': 'bus'
  },
  {
    'id': '35e3754e-bd48-4b04-aa02-0703c5892593',
    'basePrice': getRandomPrice(minPrice, maxPrice),
    'dateFrom': '2025-02-26T04:58:12.532Z',
    'dateTo': '2025-02-28T02:19:12.532Z',
    'destination': '1270b8ec-7340-4a95-82b9-73e6fbb96b30',
    'isFavorite': true,
    'offers': [],
    'type': 'taxi'
  },
  {
    'id': '1cc7cf96-77af-4bf8-8a6f-47ff20ff3afd',
    'basePrice': getRandomPrice(minPrice, maxPrice),
    'dateFrom': '2025-03-01T13:57:12.532Z',
    'dateTo': '2025-03-03T13:35:12.532Z',
    'destination': '466eecd8-63ce-4f30-8d79-725e286f30b9',
    'isFavorite': false,
    'offers': [
      'a019a76f-cc37-46b0-9e33-439be462f4e4',
      '24df243c-5f58-461c-9568-580f36fde0c8',
      '8c511522-06b0-4653-a08e-ad2caacd6798',
      'f451e1ce-e394-43e8-a5b5-dce2054091ec',
      '82165fb5-18dd-4d78-b02c-e21a25d901b1'
    ],
    'type': 'taxi'
  },
  {
    'id': 'c632dc9d-157b-4ccd-af86-dacd87be2d8a',
    'basePrice': getRandomPrice(minPrice, maxPrice),
    'dateFrom': '2025-03-04T18:15:12.532Z',
    'dateTo': '2025-03-05T14:59:12.532Z',
    'destination': 'aa33234e-13a4-4add-b26c-21ba4b8205fe',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '2b01efdb-5c3a-4310-a065-8b834eafc335',
    'basePrice': getRandomPrice(minPrice, maxPrice),
    'dateFrom': '2025-03-06T22:35:12.532Z',
    'dateTo': '2025-03-08T07:34:12.532Z',
    'destination': 'e05056ac-f5e8-413e-812e-186059ffa8b5',
    'isFavorite': false,
    'offers': [],
    'type': 'bus'
  }
];

export { pointsMock };