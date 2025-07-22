export default function SpecialDishes() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Special Dishes</h2>
      <div className="flex justify-center space-x-4 mb-6">
        {['Salad', 'Pizza', 'Sushi', 'Rice', 'Creamy'].map((tab) => (
          <button key={tab} className="px-4 py-2 border rounded hover:bg-yellow-100">{tab}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example dishes */}
        <DishCard title="Special Salad" rating="4.1" price="$40.00" />
        <DishCard title="Fajita Pizza" rating="5.5" price="$40.00" />
        <DishCard title="Indian Rice" rating="4.4" price="$20.00" />
      </div>
    </section>
  );
}
function DishCard({ title, rating, price }) {
  return (
    <div className="border rounded p-4 shadow-sm text-center">
      <div className="h-32 bg-gray-200 mb-4" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>⭐ {rating}</p>
      <p className="text-yellow-600 font-semibold">{price}</p>
    </div>
  );
}