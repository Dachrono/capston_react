import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        test: firsttest,
    },
});

export default store;