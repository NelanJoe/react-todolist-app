import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link, Form } from "react-router-dom";

import Layout from "../layouts/Layout";

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
        <h2 className="font-bold text-4xl text-center mb-5">TodoInput</h2>
        <div className="shadow-md border-2 px-6 py-8 rounded-md">
          <Form action="/" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className="border-2 px-4 py-2 rounded-md"
              />
              <button className="font-semibold text-white py-2 rounded-md bg-teal-500 hover:bg-teal-500 active:bg-teal-700 focus:bg-teal-400">
                Add Todo
              </button>
              <Link
                className="inline-block text-center font-semibold rounded-md text-white w-full bg-red-500 hover:bg-red-600 active:bg-red-700 px-8 py-2"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodo;
