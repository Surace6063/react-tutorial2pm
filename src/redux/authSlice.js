import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse( localStorage.getItem("user") ) || {
    user:  null,
    isAuthenticated: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSucess: (state,action) => {
            state.user = action.payload
            state.isAuthenticated = true

            localStorage.setItem("user",JSON.stringify(state)) //JSON.stringify -> change object into json
        },
        logout: (state) => {
            state.user = null
            state.isAuthenticated = false

            localStorage.removeItem("user")
        }
    }
})

export const {loginSucess, logout} = authSlice.actions

export default authSlice.reducer