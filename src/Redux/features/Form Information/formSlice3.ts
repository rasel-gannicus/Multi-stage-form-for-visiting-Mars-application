import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TInitialStateForm3 {
  thirdPageInformation: {
    healthDeclaration: string;
    emergencyContact: string;
    medicalConditions: string;
  };
}

const initialState: TInitialStateForm3 = {
  thirdPageInformation: {
    healthDeclaration: "",
    emergencyContact: "",
    medicalConditions: "",
  },
};

const formSlice3 = createSlice({
  name: "form3",
  initialState,
  reducers: {
    fillUpThirdFormData: (
      state,
      action: PayloadAction<{ property: keyof TInitialStateForm3["thirdPageInformation"]; value: any }>
    ) => {
        console.log(state);
      const { property, value } = action.payload;
      state.thirdPageInformation[property] = value;
    },
  },
});

export const { fillUpThirdFormData } = formSlice3.actions;
export default formSlice3.reducer;
