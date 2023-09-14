import PropTypes from "prop-types";
import { useState } from "react";

const SearchTodo = ({ onSearchTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearchTodo(value);
    setValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          className="border-4 rounded-md w-full py-2 px-4"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="font-semibold text-white rounded-md bg-teal-500 hover:bg-teal-600 focus:bg-teal-500 active:bg-teal-700 px-8 py-2">
          Search
        </button>
      </div>
    </form>
  );
};

SearchTodo.propTypes = {
  onSearchTodo: PropTypes.func,
};

export default SearchTodo;
