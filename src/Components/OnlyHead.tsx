import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OnlyHead = ({ children }: { children: any }) => {
  const location = useLocation();
  const teacher = useAppSelector((state) => state.user.teacher);
  return teacher && teacher.deptHead ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default OnlyHead;
