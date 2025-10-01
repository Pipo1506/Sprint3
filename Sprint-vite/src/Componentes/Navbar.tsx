import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 bg-gray-200 px-6 py-3 rounded-lg">
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/time" className="text-gray-700 hover:text-blue-600">Time</Link>
      <Link to="/cadastro" className="text-gray-700 hover:text-blue-600">Cadastro</Link>
    </nav>
  );
}
