import { useState } from "react";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AddTodo = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    onAddTodo(value);
    navigate("/");
  };

  return (
    <Layout>
      <div className="mt-12">
        <h2 className="font-bold text-4xl text-center">TodoInput</h2>
        <div className="shadow-md border-2 px-6 py-8 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className="border-2 px-4 py-2 rounded-md"
              />
              <button className="font-semibold text-white py-2 rounded-md bg-teal-500 hover:bg-teal-500 active:bg-teal-700 focus:bg-teal-400">
                Add Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodo;
