export type Teacher = {
  teacherId: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  specialization: string | null;
  role: "teacher";
  password: string;
  profileImage: string;
  deptHead: boolean;
  createdAt: Date;
  updatedAt: Date;
};
