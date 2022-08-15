import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "@/features/Auth/reducer";
import cartReducer from "@/features/Cart/reducer";
import productDetailSlice from "@/features/Product/reducer";
import { baseApi } from "./services/httpOption";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  productDetail: productDetailSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: "cellphone",
  storage,
  whitelist: ["auth", "cart"],
};

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
