import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        journaling1: {
            questions: [],
            id: 0
        },
        journaling2: {
            questions: [],
            id: 0
        },
        journaling3: {
            questions: [],
            id: 0
        }
    }
});
