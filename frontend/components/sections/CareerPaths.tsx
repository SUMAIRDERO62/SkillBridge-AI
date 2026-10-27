const careers = [
  "AI Engineer",
  "Data Scientist",
  "Web Developer"
];

export default function CareerPaths() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Career Paths
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {careers.map((career) => (
          <div
            key={career}
            className="border rounded-xl p-8 text-center"
          >
            <h3 className="text-xl font-semibold">
              {career}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}