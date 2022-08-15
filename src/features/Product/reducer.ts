import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

type ProductDetailState = {
  isFormModal: boolean;
  isRatting: boolean;
};

const initialState: ProductDetailState = {
  isFormModal: false,
  isRatting: false,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.isFormModal = true;
      state.isRatting = action.payload;
    },
    closeModal: (state) => {
      state.isFormModal = false;
      state.isRatting = false;
    },
  },
});

export const isFormModalSelector = (state: RootState) => ({
  isModal: state.productDetail.isFormModal,
  isRatting: state.productDetail.isRatting,
});
export const productDetailAction = productDetailSlice.actions;
export default productDetailSlice.reducer;
