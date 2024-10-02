import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoAdd from "./Pages/Page1/Todo";
import Todo from "./Pages/Page2/Todo";
import Signup from "./Pages/Page3/signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TodoAdd />} />
        <Route path="/tasklists" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
