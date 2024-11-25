import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <div className="bg-neutral-100 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
