import Link from "next/link"

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Go to Dashboard
      </Link>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D35AQF-3Xi0Ve7xKA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1720576552262?e=1743804000&v=beta&t=82R_TzirfXwG3S0WwzLkrpgxOUIpGfsVTgodLAHR0Io"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <button className="px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jose Magdiel Mora"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                defaultValue="m41k80mp"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="m41k80@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200
           transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700
           transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
