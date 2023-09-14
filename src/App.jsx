import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import { useState } from "react";
import todosData from "./data/todos.json";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  /**
   * Add todo
   * */
  const handleAddTodo = (title) => {
    const newTodo = [
      ...todos,
      {
        id: +new Date(),
        title,
        completed: false,
      },
    ];

    setTodos(newTodo);
  };

  /**
   * Delete todo
   * filtered todos array then, if(todo !== params.id) then remove todo
   * */
  const handleDeleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  /**
   * toggle completed
   * map array todo, then change todo completed to uncompleted / uncompleted to completed
   * */
  const handleToggleCompleted = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  /**
   * Search todo logical
   * 1. Make useState for saved searchQuery
   * 2. Make useState for save data filtered with query
   * */
  const handleSearchTodo = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const newFilteredTodos = todos.filter((todo) => {
      return todo.title.toLocaleLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredTodos(newFilteredTodos);
  }, [todos, searchQuery]);

  /**
   * Delete all todos
   * */
  const handleDeleteAllTodo = () => {
    const confirmed = window.confirm("Are you want to delete all items?");
    if (confirmed) setTodos([]);
  };

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Home
              todos={filteredTodos}
              onDeleteTodo={handleDeleteTodo}
              onSearchTodo={handleSearchTodo}
              onDeleteAllTodo={handleDeleteAllTodo}
              onCompletedTodo={handleToggleCompleted}
            />
          ),
        },
        {
          path: "/add-todo",
          element: <AddTodo onAddTodo={handleAddTodo} />,
        },
      ])}
    />
  );
};

export default App;
