import React, { useState } from "react"
import '../styles/style.css'

export const TaskForm = ({addTask}) => {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(taskName.trim() !== " ") {
      addTask(taskName)
      setTaskName("")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  )
}
