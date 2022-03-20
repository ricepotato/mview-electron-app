import React from "react";

export default function NavBar() {
  return (
    <header className="relative">
      <nav className="h-12 bg-slate-200 w-full fixed border-b border-gray-300">
        <div className="flex space-x-10 h-12 items-center">
          <div className="ml-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}
