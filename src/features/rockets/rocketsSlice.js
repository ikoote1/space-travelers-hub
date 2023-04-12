import { createSlice } from "@reduxjs/toolkit";


const rocketsSlice = createSlice(
    {
        name: "rocket",
        initialState: {
            rockets: [],
        },
    }
)

export default rocketsSlice.reducer