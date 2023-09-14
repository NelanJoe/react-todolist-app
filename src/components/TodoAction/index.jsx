import PropTypes from "prop-types";

const TodoAction = ({ onFilteredTodo }) => {
  return (
    <div className="my-8">
      <h2 className="text-center font-bold text-4xl mb-5">TodoList</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10">
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-400"
          value={"all"}
          onClick={(e) => onFilteredTodo(e)}
        >
          All
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-400"
          value={"done"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Done
        </button>
        <button
          className="w-full py-2 rounded-md font-semibold text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus:bg-teal-400"
          value={"active"}
          onClick={(e) => onFilteredTodo(e)}
        >
          Todo
        </button>
      </div>
    </div>
  );
};

TodoAction.propTypes = {
  onFilteredTodo: PropTypes.func,
};

export default TodoAction;
