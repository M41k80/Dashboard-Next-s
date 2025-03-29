import Link from "next/link"


const Home = () => {
  return (
    <div 
    className="min-h-screen bg-gradient-to-br from-amber-50 to-indigo-300 flex flex-col items-center justify-center p-6"
    > 
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard in Next.js
          </h1>
        <p className="text-lg text-gray-600 mb-8">
        Manage your tasks, track analytics, and stay organized with our
        powerful dashboard. 
        </p>
        <Link href="/dashboard" 
        className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Home
