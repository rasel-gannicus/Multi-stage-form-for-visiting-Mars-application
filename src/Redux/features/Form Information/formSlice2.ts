import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TInitialStateForm2 {
  secondPageInformation: {
    departureDate: {
      startDate: Date | null ;
      endDate: Date | null ;
    };
    returnDate: {
      startDate: Date | null;
      endDate: Date | null;
    };
    accomodation: string;
    specialPreferences: {
      statues: boolean;
      description: string;
    };
  };
}

// Define the type of the property names in the secondPageInformation object
type SecondPageInformationKeys =
  keyof TInitialStateForm2["secondPageInformation"];

const initialState: TInitialStateForm2 = {
  secondPageInformation: {
    departureDate: {
      startDate: null,
      endDate: null,
    },
    returnDate: {
      startDate: null,
      endDate: null,
    },
    accomodation: "martian-base",
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


    fillUpSecondFromWithMongodbData : (state, action) =>{
      state.secondPageInformation = action.payload ;
    }
  },
});

export const { fillUpSecondFormData, fillUpSecondFromWithMongodbData } = formSlice2.actions;
export default formSlice2.reducer;
