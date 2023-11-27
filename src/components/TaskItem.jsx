import React, { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCheckSquare } from "react-icons/fa";


export const TaskItem = ({handleComplete, handleDelete, task}) => {
    const [isCompleted, setIsComplete] = useState(false)

    const toggleComplete = () => {
        setIsComplete(!isCompleted)
        handleComplete(task.id)
    }

    const onDelete = () => {
        handleDelete(task.id)
    }


  return (
    <div>
        <span style={ {textDecoration: isCompleted ? 'line-through' : 'none'}}>
            {task.name}
            <button onClick={toggleComplete} class="button-icon"><FaRegCheckSquare /></button>
            <button onClick={onDelete} class="button-icon" ><RiDeleteBinLine /></button>
        </span>
    </div>
  )
}
