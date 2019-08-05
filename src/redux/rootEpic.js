import { combineEpics } from 'redux-observable';
import { fetchCategoriesEpic, fetchSingleCategoryEpic } from './categories/epics'; 

export const rootEpic = combineEpics(
  fetchCategoriesEpic,
  fetchSingleCategoryEpic
);