import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : {
        name : '',
        email : '',
    }
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addUserToRedux : (state, action) => {
            state.user = action?.payload?.user ;
        }
    }
})


export const { addUserToRedux } = userSlice.actions;
export default userSlice.reducer;