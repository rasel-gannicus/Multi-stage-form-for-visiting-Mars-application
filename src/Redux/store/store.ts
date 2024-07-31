import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import pageRoutingReducer from "../features/pageRouting/pageRoutingSlice";
import formDataReducer from "../features/Form Information/formSlice";
import formDataReducer2 from "../features/Form Information/formSlice2";
import formDataReducer3 from "../features/Form Information/formSlice3";
import userReducer from '../features/user/userSlice' ; 
import { userApi } from "../features/user/userApi";

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [userApi.reducerPath] : userApi.reducer, 
    pageRouting: pageRoutingReducer,
    formData: formDataReducer,
    formData2: formDataReducer2,
    formData3: formDataReducer3,
    userSlice : userReducer ,
   },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
