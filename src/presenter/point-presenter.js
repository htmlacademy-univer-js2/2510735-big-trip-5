import PointView from '../view/point-view.js';
import { render, replace, remove } from '../framework/render.js';

import EditFormView from '../view/edit-form-view.js';
import { MODE, ACTIONS, UPDATE_TYPES } from '../const.js';
import { isSameDate } from '../utils/point.js';

export default class PointPresenter {
  #point = null;
  #destinations = null;
  #offers = null;
  #pointItem = null;
  #editFormItem = null;
  #pointsListComponent = null;
  #updateData = null;
  #onModeChange = null;
  #mode = MODE.DEFAULT;
=======
import EditPointView from '../view/edit-point-view.js';
import { MODE } from '../const.js';
=======

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #point = null;
  #pointItem = null;
  #editFormItem = null;
  #pointsListComponent = null;
  #onFavouriteBtnClick = null;
  #onModeChange = null;
  #mode = MODE.DEFAULT;
=======
  #mode = Mode.DEFAULT;


  #onEscKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();

      this.#editFormItem.reset(this.#point);
=======

      this.#replaceEditFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeydown);
    }
  };


  constructor({destinations, offers, pointsListComponent, updateData, changeMode}) {
    this.#destinations = destinations;
    this.#offers = offers;
    this.#pointsListComponent = pointsListComponent;
    this.#updateData = updateData;
=======
  constructor({pointsListComponent, changeDataOnFavorite, changeMode}) {
    this.#pointsListComponent = pointsListComponent;
    this.#onFavouriteBtnClick = changeDataOnFavorite;

    this.#onModeChange = changeMode;
  }

  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointItem;
    const prevEditFormComponent = this.#editFormItem;


    this.#pointItem = new PointView({point: this.#point, destinations: this.#destinations, offers: this.#offers,
=======
    this.#pointItem = new PointView({point: this.#point,

      onRollButtonClick:() => {
        this.#replacePointToEditForm();
      },
      onFavoriteClick: () => {
        this.#addToFaivorite();
      }
    });


    this.#editFormItem = new EditFormView({point: this.#point, destinations: this.#destinations, offers: this.#offers,
      onRollButtonClick: () => {
        this.#editFormItem.reset(this.#point);
        this.#replaceEditFormToPoint();
      },
      onSubmitButtonClick: (value) => {

        const isMinor = !isSameDate(value.startDatetime, this.#point.startDatetime) ||
        !isSameDate(value.endDatetime, this.#point.endDatetime);
        this.#updateData(ACTIONS.UPDATE_POINT, isMinor ? UPDATE_TYPES.MINOR : UPDATE_TYPES.PATCH, value);
=======
        this.#updateData(value);
=======
    this.#editFormItem = new EditPointView({point: this.#point,
      onRollButtonClick: () => {
        this.#replaceEditFormToPoint();
      },
      onSubmitClick: () => {


        this.#replaceEditFormToPoint();
      },
      onDeleteClick: (value) => {
        this.#updateData(ACTIONS.DELETE_POINT, UPDATE_TYPES.MINOR, value);
      },
    });

    if (prevPointComponent === null || prevEditFormComponent === null) {
      render(this.#pointItem, this.#pointsListComponent.element);
      return;
    }


    if (this.#mode === MODE.DEFAULT) {
      replace(this.#pointItem, prevPointComponent);
    }

    if (this.#mode === MODE.EDITING) {

      replace(this.#editFormItem, prevEditFormComponent);
    }

    remove([prevPointComponent, prevEditFormComponent]);
  }


    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointItem, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editFormItem, prevEditFormComponent);
    }

    remove(prevPointComponent);
    remove(prevEditFormComponent);
  }



  destroy() {
    remove([this.#pointItem, this.#editFormItem]);
  }

  resetView() {
    if(this.#mode !== MODE.DEFAULT) {

      this.#editFormItem.reset(this.#point);
=======
=======
  resetView() {
    if(this.#mode !== Mode.DEFAULT) {


      this.#replaceEditFormToPoint();
    }
  }

  #replacePointToEditForm() {
    replace(this.#editFormItem, this.#pointItem);
    document.addEventListener('keydown', this.#onEscKeydown);
    this.#onModeChange();

    this.#mode = MODE.EDITING;
=======

    this.#mode = MODE.EDITING;
=======
    this.#mode = Mode.EDITING;


  }

  #replaceEditFormToPoint() {
    replace(this.#pointItem, this.#editFormItem);
    document.removeEventListener('keydown', this.#onEscKeydown);

    this.#mode = MODE.DEFAULT;
  }


=======
  #onFavouriteBtnClick = (value) => this.#updateData(value);
=======

    this.#mode = MODE.DEFAULT;
=======
    this.#mode = Mode.DEFAULT;

  }



  #addToFaivorite() {
    this.#updateData(ACTIONS.UPDATE_POINT, UPDATE_TYPES.MINOR, {...this.#point, isFavorite: !this.#point.isFavorite});
  }

}


