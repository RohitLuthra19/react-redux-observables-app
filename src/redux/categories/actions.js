import * as types from './types';

export const getAllCategories = () => ({
  type: types.GET_ALL_CATEGORIES_REQUEST
});
export const getAllCategoriesSuccess = (data) => ({
  type: types.GET_ALL_CATEGORIES_SUCCESS,
  data
});
export const getAllCategoriesFailure = () => ({
  type: types.GET_ALL_CATEGORIES_FAILURE
});

export const getSingleCategory = (categoryId, limit, page, isMore) => ({
  type: types.GET_SINGLE_CATEGORY_REQUEST,
  categoryId, 
  limit, 
  page, 
  isMore
});
export const getSingleCategorySuccess = (data, isMore) => ({
  type: types.GET_SINGLE_CATEGORY_SUCCESS,
  data, 
  isMore
});
export const getSingleCategoryFailure = () => ({
  type: types.GET_SINGLE_CATEGORY_FAILURE,
});

export const selectCategory = (categoryId) => ({
  type: types.SELECT_CATEGORY,
  categoryId
})

export const selectCategorySuccess = (categoryId) => ({
  type: types.SELECT_CATEGORY,
  categoryId
})