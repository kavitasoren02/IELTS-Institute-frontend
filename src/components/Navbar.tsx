import { useEffect, useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-sky-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">I</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">IELTS Pro Institute</span>
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
            href="#contact"
            className="hidden md:inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
          >
            Enroll Now
          </a>
          <button
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2 hover:bg-slate-50"
          >
            {open ? (
              <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className={`${open ? "pointer-events-auto" : "pointer-events-none"} md:hidden fixed inset-0 z-50`}>
        <button
          aria-label="Close Menu Overlay"
          onClick={() => setOpen(false)}
          className={`${open ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-out absolute inset-0 bg-slate-900/40`}
        />
        <div
          id="mobile-menu"
          className={`${open ? "translate-x-0" : "translate-x-full"} absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white shadow-xl transition-transform duration-200 ease-out`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-sky-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">I</span>
              </div>
              <span className="text-base font-semibold">IELTS Pro</span>
            </div>
            <button
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 hover:bg-slate-50"
            >
              <svg className="h-5 w-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
          <nav className="px-4 py-3">
            <ul className="flex flex-col gap-2 text-slate-700">
              <li>
                <a
                  href="#courses"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-slate-50"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="px-4 pb-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
