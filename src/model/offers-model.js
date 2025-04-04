import { offersMock } from '../mock/offers-mock';

export default class OffersModel {
  offers = [...offersMock];

  getOffers() {
    return this.offers;
  }
}