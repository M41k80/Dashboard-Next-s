import Link from "next/link"

const AccountSettings = () => {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
    <Link
        href="/dashboard"
        className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Go to Dashboard
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 p-8">
        Account Settings
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Profile Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              defaultValue="Jose Magdiel Mora"
              className="mt-1 block w-full px-4 py-2 border border-gray-300
               rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              defaultValue="m41k80@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300
               rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Security</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300
               rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300
               rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg 
        hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 text-white bg-blue-600 rounded-lg 
        hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
  )
}

export default AccountSettings
