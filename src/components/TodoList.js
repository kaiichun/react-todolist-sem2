import  { TodoItem } from "./TodoItem.js";
import { AddTodoForm } from "./AddTodoForm.js";

const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false
    }
  ];

export const TodoList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {todos.map((todo) => {
                        return  <TodoItem key={todo.id} todo={todo} />
                }) }
            </ul>
            <div>
             <AddTodoForm />    
            </div>     
        </div>
    );
  };
  