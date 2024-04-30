export default function Hero() {
  return (
    <>
      <div className="mx-auto max-w-2xl sm:py-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Join to our CV Writing Workshop.{" "}
            <a href="/cv-workshop" className="font-semibold text-choreo-blue">
              <span className="absolute inset-0" aria-hidden="true" />
              Register Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ey-black sm:text-6xl">
            Internships ? Nah, <br></br> Let's Help Each Other
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These days, many students are struggling to find internships, so
            we've created this platform to help them access the latest available
            opportunities. As a contributor, we invite you to join us in
            assisting each other in discovering internship opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
