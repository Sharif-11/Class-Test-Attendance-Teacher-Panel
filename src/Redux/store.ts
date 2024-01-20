import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./Slicers/teacherSlice";

const store = configureStore({
  reducer: {
    user: teacherReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
