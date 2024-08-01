import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user : {
        name : '',
        email : '',
    },
    userSession : {
        name : '',
        email : null,
    }
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        addUserToRedux : (state, action) => {
            state.user = action?.payload?.user ;
        },
        addNewSession : (state, action) => {
            state.userSession = action.payload
        }
    }
})


export const { addUserToRedux, addNewSession } = userSlice.actions;
export default userSlice.reducer;