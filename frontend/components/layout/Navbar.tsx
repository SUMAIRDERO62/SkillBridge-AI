export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">SkillBridge AI</h1>

      <div className="flex gap-6">
        <a href="#">Features</a>
        <a href="#">Careers</a>
        <a href="#">About</a>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
}