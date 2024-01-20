import { Provider } from "react-redux";
import store from "../Redux/store";

/* eslint-disable @typescript-eslint/no-explicit-any */
const TeacherProvider = ({ children }: { children: any }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default TeacherProvider;
