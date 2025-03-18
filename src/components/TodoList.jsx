import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../actions/authAction";
import { addTodo, deleteAllTodos } from "../actions/todoAction";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <TodoListContainer>
      <TodoForm onSubmit={handleAddTodo}>
        <Input
          type="text"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Add Todo</Button>
      </TodoForm>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Button onClick={() => dispatch(deleteAllTodos())}>Delete All</Button>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
`;

const LogoutButton = styled(Button)`
  background-color: #f44336;
`;
