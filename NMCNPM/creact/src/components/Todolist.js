import React from 'react';

import Todo from "./Todo";

export default function Todolist({ todoList }) {
  return (
    <>
    {
      todoList.map(todo => <Todo key={todo.id} todo={ todo }/>)
    }
    </>
  );
}
