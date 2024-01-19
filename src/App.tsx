import { createContext, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { Teacher } from "./Interfaces/user.interfaces";
export const TeacherContext = createContext<{
  teacher: Partial<Teacher>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTeacher: any;
}>({ teacher: {}, setTeacher: () => {} });
function App() {
  const [teacher, setTeacher] = useState({});
  return (
    <TeacherContext.Provider value={{ teacher, setTeacher }}>
      <Login />
    </TeacherContext.Provider>
  );
}

export default App;
