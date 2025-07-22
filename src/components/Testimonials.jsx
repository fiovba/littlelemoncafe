export default function Testimonials() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="border rounded p-4 shadow-sm">
            <div className="h-12 w-12 bg-gray-300 rounded-full mb-2" />
            <p className="text-sm">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor.”</p>
            <p className="text-yellow-500 mt-2">★★★★★</p>
          </div>
        ))}
      </div>
    </section>
  );
}