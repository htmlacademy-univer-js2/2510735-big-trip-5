import PointsListPresenter from './presenter/points-list-presenter.js';

import PointsListModel from './model/points-list-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonPresenter from './presenter/new-point-button-presenter.js';

const newPointButtonPresenter = new NewPointButtonPresenter({
  container: document.querySelector('.trip-main')
});
const pointsListModel = new PointsListModel();
const filterModel = new FilterModel();
const listPresenter = new PointsListPresenter({
  tripEventsContainer: document.querySelector('.trip-events'),

  filterModel,
  pointsListModel,
  newPointButtonPresenter
});

new FilterPresenter({
  filterContainer: document.querySelector('.trip-controls__filters'),
  filterModel,
  pointsListModel
}).init();
listPresenter.init();
newPointButtonPresenter.init({onNewPointButtonClick: listPresenter.onNewPointButtonClick});

  pointsListModel: new PointsListModel().init();

import PointsModel from './model/points-model.js';

const filtersContainerElement = document.querySelector('.trip-controls__filters');
const tripEventsContainerElement = document.querySelector('.trip-events');
new PointsListPresenter({filtersContainer: filtersContainerElement, tripEventsContainer: tripEventsContainerElement,
  pointsModel: new PointsModel()}).init();


