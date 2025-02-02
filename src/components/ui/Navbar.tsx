import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-6 px-6 md:px-20 bg-white md:bg-white/10 shadow-neutral-400 shadow-sm md:shadow-lg md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center w-full md:w-auto">
        <a
          className="text-2xl font-black cursor-pointer"
          href="/"
          target=""
          rel="noopener noreferrer"
        >
          SKYRUN
        </a>

        {/* Mobile Menu Icon */}
        {/*TODO: Add Transition*/}
        <button
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:items-center absolute md:static bg-white w-full left-0 md:w-auto 
                    transition-all ease-in duration-500 z-10 ${
                      menuOpen
                        ? "top-16 opacity-100 visible"
                        : "top-[-400px] opacity-0 invisible"
                    } md:opacity-100 md:visible`}
      >
        <li className="mx-5 my-5 md:my-0">
          <a
            className="text-xl hover:text-blue-500 duration-500"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
            Home
          </a>
        </li>
        <li className="mx-5 my-5 md:my-0">
          <a
            className="text-xl hover:text-blue-500 duration-500"
            href="/peraturan"
            target=""
            rel="noopener noreferrer"
          >
            Peraturan
          </a>
        </li>
        <li className="mx-2 my-5 md:my-0">
          <a
            href="https://www.racewoxx.com/login?code=SKU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-800 text-white font-bold px-6 py-2 mx-2 md:mx-4 hover:bg-green-600 rounded-md flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 stroke-3"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              Registrasi
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
