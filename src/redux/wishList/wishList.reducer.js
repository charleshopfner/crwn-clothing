import { addItemToWishList, clearItemFromWishList } from "./wishList.utils";
import wishListActionTypes from "./wishList.types";

const INITIAL_STATE = {
  wishListItems: [],
};

const wishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishListActionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishListItems: addItemToWishList(state.wishListItems, action.payload),
      };
    case wishListActionTypes.CLEAR_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishListItems: clearItemFromWishList(
          state.wishListItems,
          action.payload
        ),
      };
    case wishListActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishListItems: [],
      };
    default:
      return state;
  }
};

export default wishListReducer;
