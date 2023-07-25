export const TodoItem = (props) => {
        return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                {props.todo.isCompleted ? (
                  <button className="btn btn-sm btn-success">
                    <i className="bi bi-check-square"></i>
                  </button>
                ) : (
                  <button className="btn btn-sm btn-light">
                    <i className="bi bi-square"></i>
                  </button>
                )}

                {props.todo.isCompleted ? (
                  <span className="ms-2 text-decoration-line-through">
                    {props.todo.text}
                  </span>
                ) : (
                  <span className="ms-2"> {props.todo.text}</span>
                )}
              </div>
              <div>
                <button className="btn btn-sm btn-danger">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </li>
        );

};
