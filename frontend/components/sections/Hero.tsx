export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold mb-6">
        Find Your Career Path with AI
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Get personalised learning roadmaps, track your progress
        and become job-ready faster.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>

        <button className="border px-6 py-3 rounded-lg">
          Explore Careers
        </button>
      </div>
    </section>
  );
}