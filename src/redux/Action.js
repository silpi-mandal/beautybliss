import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from './ActionType';

export const addItemtoCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeItemfromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const addItemtoWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

export const removeItemfromWishlist = (index) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: index,
});
