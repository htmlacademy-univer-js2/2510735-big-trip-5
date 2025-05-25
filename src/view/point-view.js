import AbstractView from '../framework/view/abstract-view.js';
import {getDateDifference, getTime, getMonthAndDate, getOfferById, getOffersByType, getDestinationById} from '../utils/point.js';

function createOfferTemplate(offerId, offers) {
  const {title, price} = getOfferById(offerId, offers) || {};

  return `<li class="event__offer">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </li>`;
}

const createPointTemplate = (point, destinations, allOffers) => {
  const {type, destination, dateFrom, dateTo, basePrice, offers, isFavorite} = point;

  const startDate = getMonthAndDate(dateFrom);
  const endDate = getMonthAndDate(dateTo);
  const startTime = getTime(dateFrom);
  const endTime = getTime(dateTo);
  const duration = getDateDifference(dateFrom, dateTo);
  const availableOffers = getOffersByType(type, allOffers);
  const pointDestination = getDestinationById(destination, destinations);

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${startDate}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${pointDestination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${startTime} ${startDate === endDate ? '' : startDate}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${endTime} ${startDate === endDate ? '' : endDate}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
           ${offers.map((offerId) => createOfferTemplate(offerId, availableOffers)).join('')}
        </ul>
        <button class="event__favorite-btn  ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class PointView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;

  constructor({point, destinations, offers, onRollButtonClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', (event) => {
      event.preventDefault();
      onRollButtonClick();
    });

    this.element.querySelector('.event__favorite-btn').addEventListener('click', (event) => {
      event.preventDefault();
      onFavoriteClick();
    });
  }

  get template() {
    return createPointTemplate(this.#point, this.#destinations, this.#offers);
  }
}