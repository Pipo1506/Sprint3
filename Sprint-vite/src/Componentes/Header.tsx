import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link to="/">MinhaApp</Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/time" className="hover:underline">Time</Link>
          <Link to="/cadastro" className="hover:underline">Cadastro</Link>
        </nav>
      </div>
    </header>
  );
}
