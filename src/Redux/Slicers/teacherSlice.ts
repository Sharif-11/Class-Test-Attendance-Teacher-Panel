import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "../../Interfaces/user.interface";

// Define the initial state using that type
const initialState: { teacher: Partial<Teacher> } = { teacher: {} };

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action: PayloadAction<Teacher>) => {
      state.teacher = action.payload;
    },
  },
});

export const { setTeacher } = teacherSlice.actions;

const teacherReducer = teacherSlice.reducer;
export default teacherReducer;
