import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import pageRoutingReducer from "../features/pageRouting/pageRoutingSlice";
import formDataReducer from "../features/Form Information/formSlice";
import formDataReducer2 from "../features/Form Information/formSlice2";
import formDataReducer3 from "../features/Form Information/formSlice3";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pageRouting: pageRoutingReducer,
    formData: formDataReducer,
    formData2: formDataReducer2,
    formData3: formDataReducer3,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
