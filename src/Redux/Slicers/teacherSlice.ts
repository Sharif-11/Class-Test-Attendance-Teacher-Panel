import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Teacher } from "../../Interfaces/user.interface";
import { RootState } from "../store";

// Define the initial state using that type
const initialState: { teacher: Teacher | null } = { teacher: null };

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action: PayloadAction<Teacher | null>) => {
      state.teacher = action.payload;
    },
  },
});

export const { setTeacher } = teacherSlice.actions;
export const selectTeacherId = (state: RootState) =>
  state.user.teacher?.teacherId;
const teacherReducer = teacherSlice.reducer;
export default teacherReducer;
