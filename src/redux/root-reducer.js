import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import wishListReducer from "./wishList/wishList.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishList"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
