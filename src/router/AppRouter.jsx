import { Route, Routes } from "react-router";
import Login from "../components/Login";
import TodoList from "../components/TodoList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
   
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
