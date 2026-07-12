export default function IndianToursPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Indian Mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold text-white">
            Incredible India Tours
          </h1>

          <p className="mt-4 text-xl text-white">
            Explore India's most beautiful destinations with Flymigo Travels.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
  <h2 className="text-4xl font-bold text-center text-slate-900">
    Explore India's Best Destinations
  </h2>

  <p className="mt-4 text-center text-gray-600">
    Choose your dream destination and let Flymigo plan your perfect trip.
  </p>
</section>
<section className="px-6 pb-16">
  <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl bg-white">

    <img
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      alt="Himachal Pradesh"
      className="h-64 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold">
        🏔 Himachal Pradesh
      </h3>

      <p className="mt-2 text-gray-600">
        6 Days / 5 Nights
      </p>

      <p className="mt-2">
        📍 Shimla • Manali • Solang Valley
      </p>

      <p className="mt-4 text-2xl font-bold text-blue-700">
        Starting ₹16,999/person
      </p>

      <button className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-white font-semibold">
        View Details
      </button>
    </div>

  </div>
</section>

    </main>
  );
}