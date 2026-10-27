const features = [
  {
    title: "AI Roadmaps",
    description: "Personalized learning paths."
  },
  {
    title: "Progress Tracking",
    description: "Track every completed skill."
  },
  {
    title: "Career Guidance",
    description: "Choose the right career direction."
  }
];

export default function Features() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border rounded-xl p-6 shadow-sm"
          >
            <h3 className="font-bold text-xl mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}