import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions/todoActions";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <TodoItemContainer>
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
  padding: 5px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;
