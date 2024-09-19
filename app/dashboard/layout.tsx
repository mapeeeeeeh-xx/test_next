import React from "react";
import Link from "next/link";

// Dashboard layout with navbar and sidebar
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
<<<<<<< HEAD
      <aside className='w-64 bg-gray-800 text-white p-6'>
        <div className='text-xl font-bold mb-8'>Dashboard</div>
        
        {/* h */}
        <nav className='space-y-4'>
          <Link href="/dashboard" className='block text-gray-200 hover:text-white'>
=======
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="text-xl font-bold mb-8">Dashboard</div>

        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className="block text-gray-200 hover:text-white"
          >
>>>>>>> peter
            Overview
          </Link>
          <Link
            href="/dashboard/profile"
            className="block text-gray-200 hover:text-white"
          >
            Profile
          </Link>
          <Link
            href="/dashboard/settings"
            className="block text-gray-200 hover:text-white"
          >
            Settings
          </Link>
          <Link
            href="/dashboard/reports"
            className="block text-gray-200 hover:text-white"
          >
            Reports
          </Link>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div className="text-lg font-bold">My App</div>

          <div className="flex items-center space-x-4">
            {/* Additional Navbar Items */}
            <div className="relative">
              {/* Notification icon */}
              <button className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A1.99 1.99 0 0118 14.1V11a6 6 0 00-5-5.917V4a1 1 0 10-2 0v1.083A6 6 0 006 11v3.1c0 .526-.214 1.03-.595 1.495L4 17h11zM9 19a2 2 0 006 0"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-white text-sm">P</span>
            </div>
          </div>
        </header>

        {/* Main content (children) */}
        <main className="flex-1 bg-gray-100 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
