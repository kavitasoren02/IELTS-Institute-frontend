export default function Navbar() {
  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-sky-600 flex items-center justify-center">
            <span className="text-white text-lg font-bold">I</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">
            IELTS Pro Institute
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <li>
            <a href="#courses" className="hover:text-slate-900">
              Courses
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-slate-900">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#enroll"
          className="hidden md:inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
        >
          Enroll Now
        </a>
        <button
          aria-label="Open Menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2 hover:bg-slate-50"
        >
          <svg
            className="h-5 w-5 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
