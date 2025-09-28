export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-sky-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">I</span>
              </div>
              <span className="font-semibold">IELTS Pro Institute</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Helping learners reach their dream band scores with structured
              practice and feedback.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Email: kavitasoren2000@gmail.com</li>
              <li>Phone: +91-96930-49193</li>
              <li>Address: Near cambridge institute of technology bangalore</li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-white font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
            >
              Enroll Now
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} IELTS Pro Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
