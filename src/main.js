import Presenter from './presenter/main-presenter.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const pointsModel = new PointsModel();

const presenter = new Presenter({destinationsModel, offersModel, pointsModel});

presenter.init();