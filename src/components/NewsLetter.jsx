export default function Newsletter() {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-2">Join Our Newsletter</h2>
      <input type="email" placeholder="Enter your email" className="border p-2 rounded w-64" />
      <button className="ml-2 bg-yellow-400 px-4 py-2 rounded">Subscribe</button>
    </section>
  );
}