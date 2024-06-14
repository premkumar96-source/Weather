import React, { useCallback, useContext, useState } from "react";
import UserContext from "../Context/Context";
import { UserAction } from "./useraction";
import "./todo.css";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodo, setCompleteTodo] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const { todo } = state;

  console.log("stateqq", state);
  const addTodo = useCallback(
    (e) => {
      // e.preventDefault();
      console.log("todod", inputValue);
      dispatch({
        type: UserAction.TODOADD,
        payload: { id: todo.length, value: inputValue },
      });
      // if (inputValue.trim() !== "") {
      //   setTodos([...todos, inputValue]);
      setInputValue("");
      // }
    },
    [inputValue, todo]
  );
  // [inputValue]
  // );
  const completeTask = () => {
    setCompleteTodo(true);
  };
  const removeTask = useCallback((id) => {
    dispatch({ type: UserAction.DELETE, payload: id });
  }, []);
  return (
    <div className="content">
      <h3 className="todo-header">Todo list</h3>

      <div className="container text-center">
        <div class="row">
          <div class="col-12">
            <input
              className="todo-input"
              type="text"
              value={inputValue}
              placeholder="Add Todo"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="button"
              className="todo-btn"
              onClick={() => addTodo()}
            >
              Submit
            </button>
            {/* <img className="imagetag" src={SearchIcon} alt="search icon"></img> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-10">
            {todo.map((item, index) => (
              <div key={index}>
                <div className="todo-text">
                  <div
                    style={{
                      textDecoration: completeTodo ? "line-through" : "",
                    }}
                  >
                    {item.value}
                  </div>

                  <button
                    className="todo-bttn remove"
                    onClick={() => removeTask(item.id)}
                  >
                    Remove
                  </button>
                  <button className="todo-bttn complete" onClick={completeTask}>
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
