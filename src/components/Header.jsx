export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-2xl font-bold">🍋 Little Lemon</div>
      <nav className="space-x-6">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Menu</a>
        <a href="#">Reservation</a>
      </nav>
      <button className="bg-yellow-400 px-4 py-2 rounded">Login</button>
    </header>
  );
}