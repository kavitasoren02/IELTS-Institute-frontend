export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
        <div>
          <span className="inline-block rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold mb-4">
            Guaranteed Improvement
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-balance">
            Achieve Your Target IELTS Band with Confidence
          </h1>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Personalized coaching, daily speaking practice, AI-powered band
            scoring, and full-length mock tests—all in one place.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center rounded-md bg-sky-600 px-5 py-3 text-white font-semibold hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
            >
              Explore Features
            </a>
            <a
              href="#enroll"
              className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-900 font-semibold hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
            >
              Book Free Demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="Student"
                className="h-8 w-8 rounded-full ring-2 ring-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=22"
                alt="Student"
                className="h-8 w-8 rounded-full ring-2 ring-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=32"
                alt="Student"
                className="h-8 w-8 rounded-full ring-2 ring-white"
              />
            </div>
            <span>2,000+ learners improved their band</span>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="IELTS Study"
            className="w-full rounded-xl shadow-lg object-cover"
          />
          <div className="absolute -bottom-4 -left-4 bg-white shadow-md rounded-lg px-4 py-3 hidden md:flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center">
              <svg
                className="h-4 w-4 text-sky-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z" />
              </svg>
            </div>
            <div className="text-sm">
              <p className="font-semibold">Band Predictor</p>
              <p className="text-slate-600">AI estimates in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
