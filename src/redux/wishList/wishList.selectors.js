import { createSelector } from "reselect";

const selectWishList = (state) => state.wishList;

export const selectWishListItems = createSelector(
  [selectWishList],
  (wishList) => wishList.wishListItems
);

export const selectWishListItemsCount = createSelector(
  [selectWishList],
  (wishList) => wishList.wishListItems.length
);
