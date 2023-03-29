import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        success: false,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.isFetching = false;
            state.success = true;
            state.currentUser = action.payload;
        },
        loginError: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("user");
        }
    }
});

export const {loginStart, loginSuccess, loginError, logout} = userSlice.actions;
export default userSlice.reducer;
