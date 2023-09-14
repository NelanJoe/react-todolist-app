import TodoFooter from "../components/TodoFooter";
import TodoHeader from "../components/TodoHeader";
import TodoAction from "../components/TodoAction";
import PropTypes from "prop-types";
import Layout from "../layouts/Layout";
import Todo from "../components/Todo";
import { useState } from "react";

const Home = ({
  todos,
  onEditTodo,
  onDeleteTodo,
  onSearchTodo,
  onDeleteAllTodo,
  onCompletedTodo,
  onDeleteDoneTodo,
}) => {
  // Make state queryParams to filtered data todos
  const [queryParams, setQueryParams] = useState("all");

  // function to get value from button trigger all, done, and todo(active todo)
  const handleFiltered = (e) => {
    setQueryParams(e.target.value);
  };

  // make temp varible to saved todos filter
  let filteredTodoByParams;
  if (queryParams === "all") {
    filteredTodoByParams = todos;
  } else if (queryParams === "done") {
    filteredTodoByParams = todos.filter((todo) => todo.completed);
  } else {
    filteredTodoByParams = todos.filter((todo) => !todo.completed);
  }

  return (
    <Layout>
      <TodoHeader onSearchTodo={onSearchTodo} />
      <TodoAction onFilteredTodo={handleFiltered} />
      {todos.length > 0 ? (
        <div className="space-y-4 mt-10">
          {filteredTodoByParams?.map((todo) => {
            return (
              <div key={todo.id}>
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  onEditTodo={onEditTodo}
                  onDeleteTodo={onDeleteTodo}
                  onCompletedTodo={onCompletedTodo}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="my-10">
          <h1 className="flex items-center justify-center font-bold text-2xl text-red-500 italic">
            Not Found Todo
          </h1>
        </div>
      )}
      <TodoFooter
        onDeleteAllTodo={onDeleteAllTodo}
        onDeleteDoneTodo={onDeleteDoneTodo}
      />
    </Layout>
  );
};

Home.propTypes = {
  todos: PropTypes.array,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onCompletedTodo: PropTypes.func,
  onSearchTodo: PropTypes.func,
  onDeleteAllTodo: PropTypes.func,
  onDeleteDoneTodo: PropTypes.func,
};

export default Home;
