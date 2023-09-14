// import { AddTodoForm } from "./components/AddTodoForm";
// import { TodoList } from "./components/TodoList";

// function App() {
//   return (
// <div className="App">
//   <div className="card rounded shadow-sm m-5">
//     <div className="card-body">
//       <h3 className="card-title mb-3">My Todo List</h3>
//       <TodoList />
//     </div>
//   </div>
// </div>
//   );
// }

// export default App;
import { useState } from "react";

function App(props) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // const deleteTodos = (id) => {
  //   const deleteTask = todos.filter((list) => list.id !== id);
  //   setTodos(deleteTask);
  // };

  return (
    <div className="App">
      <div className="card rounded shadow-sm m-5">
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <ul className="list-group">
            {todos.map((item, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <div>
                  <button
                    onClick={() => {
                      const newDone = todos.map((done) => {
                        if (done.id === item.id) {
                          const doneTodos = { ...done };
                          if (done.isCompleted === true) {
                            doneTodos.isCompleted = false;
                          } else if (done.isCompleted === false) {
                            doneTodos.isCompleted = true;
                          }
                          return doneTodos;
                        } else {
                          return done;
                        }
                      });
                      setTodos(newDone);
                    }}
                    className={`btn btn-sm ${
                      item.isCompleted ? "btn-success" : "btn-light"
                    }`}
                  >
                    <i
                      className={`bi ${
                        item.isCompleted ? "bi-check-square" : "bi-square"
                      }`}
                    ></i>
                  </button>
                  {item.isCompleted ? (
                    <span className="ms-2 text-decoration-line-through">
                      {item.text}
                    </span>
                  ) : (
                    <span className="ms-2">{item.text}</span>
                  )}
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    // deleteTodos(item.id);
                    const deleteTodos = todos.filter(
                      (del) => del.id !== item.id
                    );
                    setTodos(deleteTodos);
                  }}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </li>
            ))}
            <div className="mt-4">
              <form
                className="d-flex justify-content-between align-items-center"
                onSubmit={(event) => {
                  event.preventDefault();
                  const newTodos = [...todos];
                  newTodos.push({
                    id: Math.random,
                    text: input,
                    isCompleted: false,
                  });
                  setTodos(newTodos);
                  setInput("");
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task..."
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                  }}
                />
                <button className="btn btn-primary btn-sm rounded ms-2">
                  Add
                </button>
              </form>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
