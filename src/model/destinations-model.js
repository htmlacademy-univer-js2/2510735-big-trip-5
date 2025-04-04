import { destinationsMock } from '../mock/destinations-mock';

export default class DestinationsModel {
  destinations = [...destinationsMock];

  getDestinations() {
    return this.destinations;
  }
}