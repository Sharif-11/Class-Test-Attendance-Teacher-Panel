import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Course } from "../../Interfaces/utils.interfaces";
import { RootState } from "../store";

const initialState: { courses: Course[] | null } = { courses: null };
const myCoursesSlice = createSlice({
  name: "myCourses",
  initialState,
  reducers: {
    setCourse: (state, action: PayloadAction<Course[] | null>) => {
      state.courses = action.payload;
    },
  },
});
export const { setCourse } = myCoursesSlice.actions;

const myCourseReducer = myCoursesSlice.reducer;
export const selectCourses = (state: RootState) => state.courses;
export default myCourseReducer;
