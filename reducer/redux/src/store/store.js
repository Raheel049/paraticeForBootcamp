import {configureStore} from "@reduxjs/toolkit"
import myCounter from "../slicce/counter"

const store = configureStore({
    reducer : {
        myCounter
    }
})

export default store