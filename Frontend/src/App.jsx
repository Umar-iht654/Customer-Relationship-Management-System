function App() {
  const features = [
    'Customer management',
    'Contact history tracking',
    'Follow-up reminders',
    'Sales/status pipeline',
    'Customer notes',
    'Admin dashboard',
    'Search and filtering',
    'Secure authentication',
  ]

  const techStack = [
    'React',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Prisma',
    'JWT Auth',
  ]

  const plannedPages = [
    'Dashboard',
    'Customers',
    'Customer Profiles',
    'Pipeline',
    'Reminders',
    'Login / Register',
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Full-Stack CRM Portfolio Project
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Customer Relationship Management System
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              A full-stack CRM web application designed to help small businesses
              manage customers, track conversations, schedule follow-ups and
              monitor sales pipeline activity from one central dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                React Frontend
              </span>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                Express Backend
              </span>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                PostgreSQL Database
              </span>
              <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
                Prisma ORM
              </span>
            </div>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Problem</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Small businesses often manage customers using spreadsheets, notes,
              emails or scattered messages. This makes it easy to lose track of
              leads, forget follow-ups and miss sales opportunities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Solution</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              This CRM provides one place to store customer records, log contact
              history, add notes, schedule reminders and update each customer’s
              status through a simple sales pipeline.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Goal</h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              The goal is to build a realistic, deployable full-stack application
              that demonstrates frontend development, backend API design,
              authentication, relational databases and dashboard features.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Planned Features</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl bg-slate-800/70 px-4 py-3 text-sm text-slate-300"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">Planned Pages</h2>

            <div className="mt-5 space-y-3">
              {plannedPages.map((page) => (
                <div
                  key={page}
                  className="flex items-center justify-between rounded-xl bg-slate-800/70 px-4 py-3"
                >
                  <span className="text-sm text-slate-300">{page}</span>
                  <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300">
                    Planned
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Tech Stack</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h2 className="text-xl font-semibold text-blue-200">
            Current Development Status
          </h2>

          <p className="mt-4 text-sm leading-6 text-blue-100/80">
            The project is currently in the setup stage. The React frontend,
            Express backend, Prisma ORM and PostgreSQL database are being
            configured before building the main CRM features.
          </p>
        </section>
      </section>
    </main>
  )
}

export default App