import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import React, {useState}  from "react";



function App() {
  const [tasks, setTasks] = useState([]);

  const handleComplete = taskId => {
    const updateTasks = tasks.map(task =>
      task.id === taskId ? {...task, completed: !task.completed} : task
    );
    setTasks(updateTasks);
  };
  
    const handleDelete = taskId => {
      const updateTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updateTasks);
    };

    const addTask = taskName => {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };

  return (
    <>
     <div id="app-container">
      <h1>ToDo APP</h1>
      <section id="form-container">
        <TaskForm addTask={addTask}/>
        <TaskList 
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        />
      </section>
     </div>
    </>
  )
};

export default App
