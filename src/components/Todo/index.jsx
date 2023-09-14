import { FiTrash2, FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

const Todo = ({ id, title, completed, onDeleteTodo, onCompletedTodo }) => {
  return (
    <div className="flex justify-between items-center shadow-md border-2 px-1 md:px-4 py-4 rounded-md">
      <p
        className={`md:font-semibold md:text-lg ${
          completed && "line-through text-red-500"
        }`}
      >
        {title}
      </p>
      <div className="space-x-2 md:space-x-3">
        <input
          type="checkbox"
          defaultChecked={completed}
          value={completed}
          onChange={() => onCompletedTodo(id)}
        />
        <button className="text-yellow-500">
          <FiEdit2 />
        </button>
        <button className="text-red-500" onClick={() => onDeleteTodo(id)}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
  onDeleteTodo: PropTypes.func,
  onCompletedTodo: PropTypes.func,
};

export default Todo;
