import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';
//import { filter, mapTo, mergeMap } from 'rxjs/operators';

import * as types from './types';
import { selectCategorySuccess, getAllCategoriesSuccess, getAllCategoriesFailure, getSingleCategorySuccess, getSingleCategoryFailure}  from './actions';
import * as constants from '../constants';

export const fetchCategoriesEpic = (action$) => {
  const url = `${constants.BASE_URL}/categories`;

  return action$
    .ofType(types.GET_ALL_CATEGORIES_REQUEST)
    .switchMap(() => {
      return ajax.getJSON(url)
    })
    .map(response => getAllCategoriesSuccess(response))
    .catch(error => Observable.of(getAllCategoriesFailure()))
}

export const fetchSingleCategoryEpic = (action$) => {

  return action$
    .ofType(types.GET_SINGLE_CATEGORY_REQUEST)
    .switchMap((action) => {
      const { categoryId, limit, page, isMore } = action;
      return ajax
        .getJSON(`${constants.BASE_URL}/images/search?category_ids=${categoryId}&limit=${limit}&page=${page}`)
        .map(response => getSingleCategorySuccess(response, isMore))
    })
    .catch(error => Observable.of(getSingleCategoryFailure()))
};

export const selectCategory = (action$) => {
  return action$
    .ofType(types.SELECT_CATEGORY)
    .switchMap((action) => {
      const { categoryId } = action;
      return selectCategorySuccess(categoryId)
    });
}