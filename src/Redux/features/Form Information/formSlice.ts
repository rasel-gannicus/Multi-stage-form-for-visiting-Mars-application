import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  firstPageInformation: {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: {
      startDate: Date | null | string;
      endDate: Date | null | string;
    };
    country: string;
    phone: string;
  };
}
// Define the type of the property names in the firstPageInformation object
type FirstPageInformationKeys = keyof TInitialState["firstPageInformation"];

const initialState: TInitialState = {
  firstPageInformation: {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: {
      startDate: null,
      endDate: null,
    },
    country: "",
    phone: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fillUpFirstFormData: (
      state,
      action: PayloadAction<{ property: FirstPageInformationKeys; value: any }>
    ) => {
      const { property, value } = action.payload;

      state.firstPageInformation[property] = value;
    },
    fillUpFirstFromWithMongodbData : (state, action) =>{
      state.firstPageInformation = action.payload ;
    }
  },
});

export const { fillUpFirstFormData,fillUpFirstFromWithMongodbData } = formSlice.actions;
export default formSlice.reducer;
