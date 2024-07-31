import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : null
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addUserToRedux : (state, action) => {
            console.log(action.payload);
            state.user = action?.payload?.user ;
        }
    }
})


export const { addUserToRedux } = userSlice.actions;
export default userSlice.reducer;