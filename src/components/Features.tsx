export default function Features() {
  const features = [
    {
      title: "Speaking Practice",
      desc: "Daily 1:1 mentorship and group sessions to boost fluency and confidence.",
      icon: (
        <svg
          className="h-5 w-5 text-sky-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M2 12a10 10 0 1 0 10-10v10H2Z" />
        </svg>
      ),
    },
    {
      title: "Mock Tests",
      desc: "Full-length mock tests with detailed analytics and improvement plan.",
      icon: (
        <svg
          className="h-5 w-5 text-sky-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z" />
        </svg>
      ),
    },
    {
      title: "AI Band Score",
      desc: "Get instant band estimates and feedback powered by AI models.",
      icon: (
        <svg
          className="h-5 w-5 text-sky-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7-10 5 10 5 10-5-10-5Z" />
        </svg>
      ),
    },
    {
      title: "Personalized Plan",
      desc: "Custom study plans for target bands 6.5–8.5 with weekly reviews.",
      icon: (
        <svg
          className="h-5 w-5 text-sky-600"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M5 3h14v4H5zM5 9h14v12H5z" />
        </svg>
      ),
    },
  ];
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Everything you need to ace IELTS
          </h2>
          <p className="mt-3 text-slate-600">
            Practice, feedback, and guidance—designed around your goals.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-slate-200 p-5 hover:shadow-sm transition-shadow bg-white"
            >
              <div className="h-9 w-9 rounded-md bg-sky-50 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
