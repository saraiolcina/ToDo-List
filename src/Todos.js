import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          {todo.content}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            className="collection"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
