import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearWishList } from "./wishList.actions";

export function* clearWishListOnSignOut() {
  yield put(clearWishList());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearWishListOnSignOut);
}

export function* wishListSagas() {
  yield all([call(onSignOutSuccess)]);
}
