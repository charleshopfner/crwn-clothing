import wishListActionTypes from "./wishList.types";

export const addItemToWishList = (item) => ({
  type: wishListActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: item,
});

export const clearItemFromWishList = (item) => ({
  type: wishListActionTypes.CLEAR_ITEM_FROM_WISHLIST,
  payload: item,
});

export const clearWishList = () => ({
  type: wishListActionTypes.CLEAR_WISHLIST,
});
