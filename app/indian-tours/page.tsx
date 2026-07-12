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

    </main>
  );
}