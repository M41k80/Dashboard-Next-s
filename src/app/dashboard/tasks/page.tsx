"use client"
import Link from "next/link"

import { useState } from "react"

const Tasks = () => {
  type Task = {
    id: number;
    title: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
    dueDate: string;
  }
  
  interface EditTaskModalProps {
    task: Task;
    onClose: () => void;
    onSave: (task: Task) => void
  }

  const [isDeleting, setIsDeleting] = useState(false)

  const [tasks, setTasks] = useState<Task[]> ([
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task | null>(null)

  const EditTaskModal = ({ task, onClose, onSave }: EditTaskModalProps) => {
    const [editedTask, setEditedTask] = useState(task)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setEditedTask(prev => ({
        ...prev,
        [name]: value,
      }))
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSave(editedTask)
     
    }

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Status</label>
          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)
}

const handleEditClick = (task: Task) => {
  setCurrentTask(task)
  setIsModalOpen(true)
}

const handleSaveTask = (updatedTask : Task) => {
  setTasks(tasks.map(task => 
    task.id === updatedTask.id ? updatedTask : task
  ))
  setIsModalOpen(false)
}

  const handleDelete = (taskId: number) => {
    if (!confirm("Are you sure you want to delete this task?")) return

    setIsDeleting(true)
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== taskId))
      setIsDeleting(false)
    }, 500)
    
  }

  const handleMarkComplete = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: "Completed" } : task
    ))
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
  <div className="max-w-full md:max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
    <Link
      href="/dashboard"
      className="inline-flex items-center justify-center bg-gray-800 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
    >
      Go to Dashboard
    </Link>

    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center md:text-left p-8">
      Tasks
    </h1>

    <div className="space-y-4 md:space-y-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-lg shadow-md p-4 md:p-6 border-l-4"
          style={{
            borderColor:
              task.status === "Completed"
                ? "green"
                : task.status === "In Progress"
                ? "yellow"
                : "red",
          }}
        >
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {task.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{task.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Due Date: {task.dueDate}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-0">
            <span
              className={`px-3 py-2 text-center text-sm rounded-full ${
                task.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : task.status === "In Progress"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {task.status}
            </span>

            <button
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => handleEditClick(task)}
            >
              Edit
            </button>

            {task.status !== "Completed" && (
              <button
                className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => handleMarkComplete(task.id)}
              >
                Mark as Complete
              </button>
            )}

            <button
              className={`px-4 py-2 text-white bg-red-600 rounded-lg transition-colors ${
                isDeleting ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
              }`}
              onClick={() => handleDelete(task.id)}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {isModalOpen && (
    <EditTaskModal
      task={currentTask!}
      onClose={() => setIsModalOpen(false)}
      onSave={handleSaveTask}
    />
  )}
</div>

  )
}

export default Tasks
