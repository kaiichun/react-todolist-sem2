// import { AddTodoForm } from "./components/AddTodoForm";
// import { TodoList } from "./components/TodoList";

// function App() {
//   return (
//     <div className="App">
//       <div className="card rounded shadow-sm m-5">
//         <div className="card-body">
//           <h3 className="card-title mb-3">My Todo List</h3>
//           <TodoList />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const deleteTask = (taskId) => {
    setTodo((toDos) => toDos.filter((task) => task.id !== taskId));
  };
  return (
    <div className="card rounded shadow-sm m-5">
      <div className="card-body">
        <h3 className="card-title mb-3">{props.title}</h3>
        <ul className="list-group">
          {todo.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                <button className="btn btn-sm btn-light">
                  <i className="bi bi-square"></i>
                </button>
                <span className="ms-2">{item.text}</span>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteTask(item.id)}
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
                const newTodo = [...todo];
                newTodo.push({
                  id: newTodo.length + 1,
                  text: input,
                });
                setTodo(newTodo);
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
  );
}

export default App;
