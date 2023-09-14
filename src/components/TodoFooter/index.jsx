import PropTypes from "prop-types";

const TodoFooter = ({ onDeleteAllTodo }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
        <button className="w-full font-semibold text-white px-8 py-2 rounded-md bg-red-500 hover:bg-red-600 active:bg-red-700 focus:bg-red-400">
          Delete Done Task
        </button>
        <button
          className="w-full font-semibold text-white px-8 py-2 rounded-md bg-red-500 hover:bg-red-600 active:bg-red-700 focus:bg-red-400"
          onClick={() => onDeleteAllTodo()}
        >
          Delete All Task
        </button>
      </div>
    </div>
  );
};

TodoFooter.propTypes = {
  onDeleteAllTodo: PropTypes.func,
};

export default TodoFooter;
