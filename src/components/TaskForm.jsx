import React, { useState } from "react"
import '../styles/style.css'
import { FcPlus } from "react-icons/fc";

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
    <form onSubmit={handleSubmit} id="form">
      <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} placeholder="Nueva tarea" id="input-form" />
      <button type="submit" id="add-button"><FcPlus id="add-icon" /></button>
    </form>
  )
}
