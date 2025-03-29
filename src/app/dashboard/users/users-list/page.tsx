'use client'
import Link from "next/link"
import { useState } from "react"

const UsersList = () => {

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Jose Magdiel Mora",
      email: "m41k80@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sam Brown",
      email: "sam.brown@example.com",
      role: "User",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      role: "User",
      status: "Suspended",
    },
  ])

  type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive" | "Suspended";
  }

  interface EditUserModalProps {
    user: User
    onClose: () => void;
    onSave: (user: User) => void
  }

  interface UserModalProps {
    user: User;
    onClose: () => void;
  }

  const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
    if (!user) {
      return null
    }

  

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <p className="text-gray-600">{user.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role
            </label>
            <p className="text-gray-600">{user.role}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </label>
            <p className="text-gray-600">{user.status}</p>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      )
  }


  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const EditUserModal = ({ user, onClose, onSave }: EditUserModalProps) => {
    const [editedUser, setEditedUser] = useState(user)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setEditedUser(prev => ({
        ...prev,
        [name]: value,
      }))
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSave(editedUser)
     
    }

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Edit User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <select
                name="role"
                value={editedUser.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Status
              </label>
              <select
                name="status"
                value={editedUser.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
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
  
  const handleEditClick = (user: User) => {
    setCurrentUser(user)
    setIsEditModalOpen(true)
  }
  const handleSaveUser = (updatedUser : User) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ))
    setIsEditModalOpen(false)
  }
  const handleCloseModal = () => {
    setIsEditModalOpen(false)
    setIsViewModalOpen(false)
  }



  const handleViewClick = (user: User) => {
    setCurrentUser(user)
    setIsViewModalOpen(true)
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <Link
      href="/dashboard"
      className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
    >
      Go to Dashboard
    </Link>
        <h1 className="text-3xl font-bold text-gray-800 mb-8 p-8">Users List</h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-4">{user.name}</td>
                  <td className="py-4 px-4">{user.email}</td>
                  <td className="py-4 px-4">{user.role}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`${
                        user.status === "Active"
                          ? "text-green-500"
                          : user.status === "Inactive"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </button>
                    <button className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => handleViewClick(user)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isEditModalOpen && (
        <EditUserModal
          user={currentUser!}
          onClose={handleCloseModal}
          onSave={handleSaveUser}
        />
        

      )}
      {isViewModalOpen && currentUser && <UserModal user={currentUser} onClose={handleCloseModal} />}
      
    </div>
  )
}

export default UsersList