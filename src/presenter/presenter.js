import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import { render, replace } from '../framework/render.js';

export default class Presenter {
  #pointsListComponent = new PointListView();
  #filtersContainer = null;
  #tripEventsContainer = null;
  #pointsModel = null;
  #points = null;


  constructor({filtersContainer, tripEventsContainer, pointsModel}) {
    this.#filtersContainer = filtersContainer;
    this.#tripEventsContainer = tripEventsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = this.#pointsModel.points;

    function replaceEditFormToPoint() {
      replace(pointItem, editForm);
    }

    render(pointItem, this.#pointsListComponent.element);
  }
}