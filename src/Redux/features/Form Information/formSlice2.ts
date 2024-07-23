import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TInitialState {
  secondPageInformation: {
    departureDate: string;
    returnDate: string;
    accomodation: string;
    specialPreferences: {
      statues: boolean;
      description: string;
    };
  };
}
// Define the type of the property names in the secondPageInformation object
type SecondPageInformationKeys = keyof TInitialState["secondPageInformation"];

const initialState: TInitialState = {
  secondPageInformation: {
    departureDate: "",
    returnDate: "",
    accomodation: "",
    specialPreferences: {
      statues: false,
      description: "",
    },
  },
};

const formSlice2 = createSlice({
  name: "form2",
  initialState,
  reducers: {
    fillUpSecondFormData: (
      state,
      action: PayloadAction<{ property: SecondPageInformationKeys; value: any }>
    ) => {
      const { property, value } = action.payload;

      state.secondPageInformation[property] = value;
    },
  },
});

export const { fillUpSecondFormData } = formSlice2.actions;
export default formSlice2.reducer;
