export default function RoadmapsPage() {
  const roadmap = [
    "Learn Python Fundamentals",
    "Learn NumPy",
    "Learn Pandas",
    "Learn Data Visualization",
    "Learn Machine Learning",
    "Build ML Projects",
    "Learn Deep Learning",
    "Learn LLMs & Generative AI",
    "Build AI Portfolio Projects",
    "Apply For AI Internships"
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          AI Engineer Roadmap
        </h1>

        <p className="text-slate-400 mb-10">
          Follow this roadmap step by step to become an AI Engineer.
        </p>

        <div className="space-y-4">
          {roadmap.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5"
            >
              <h2 className="font-semibold">
                Step {index + 1}
              </h2>

              <p className="text-slate-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}