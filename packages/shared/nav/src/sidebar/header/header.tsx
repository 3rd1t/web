import React from "react"

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-300">
      <ul className="flex items-center justify-between h-full px-4">
        <li key="breadcrumbs" className="text-gray-700 ">
          <span>Perfolio</span>
          <span className="font-thin"> / </span>
          <span>Research</span>
          <span className="font-thin"> / </span>
          <span className="font-medium text-gray-900">CSV</span>
        </li>
        <li key="end">
          <ul className="flex items-center justify-between">
            <li key="search">
              <form className="flex items-center text-sm text-gray-700">
                <button type="submit" aria-label="Search submit">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                <input
                  id="search"
                  required
                  name="search"
                  type="text"
                  className="w-full px-2 py-1 mr-3 leading-tight bg-transparent border-none appearance-none focus:outline-none"
                  placeholder="What are you looking for"
                  aria-label="Search"
                ></input>
              </form>
            </li>
            <li key="userProfile">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span>Vin Venture</span>
                  <span className="text-xs font-semibold text-research-600">Premium</span>
                </div>
                <img
                  alt="Profile picture"
                  className="object-cover w-12 h-12 border rounded-full border-research-500"
                  src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fit=crop&w=651&q=80"
                ></img>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header
