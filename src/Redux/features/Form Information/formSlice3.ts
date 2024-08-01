import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TInitialStateForm3 {
  thirdPageInformation: {
    healthDeclaration: string;
    emergencyContact: {
      name: string;
      phone: string;
      email: string;
    };
    medicalConditions: string;
  };
}

const initialState: TInitialStateForm3 = {
  thirdPageInformation: {
    healthDeclaration: "",
    emergencyContact: {
      name: "",
      phone: "",
      email: "",
    },
    medicalConditions: "",
  },
};

const formSlice3 = createSlice({
  name: "form3",
  initialState,
  reducers: {
    fillUpThirdFormData: (
      state,
      action: PayloadAction<{
        property: keyof TInitialStateForm3["thirdPageInformation"];
        value: any;
      }>
    ) => {
      const { property, value } = action.payload;
      state.thirdPageInformation[property] = value;
    },

    fillUpThirdFromWithMongodbData: (state, action) => {
      state.thirdPageInformation = action.payload;
    },
  },
});

export const { fillUpThirdFormData, fillUpThirdFromWithMongodbData } =
  formSlice3.actions;
export default formSlice3.reducer;
