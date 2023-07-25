// import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="card rounded shadow-sm m-5">
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
