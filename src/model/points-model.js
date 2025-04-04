import { pointsMock } from '../mock/points-mock';

export default class PointsModel {
  points = [...pointsMock];

  getPoints() {
    return this.points;
  }
}