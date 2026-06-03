function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen bg-rose-50">
        <div className="flex flex-1 items-center justify-center bg-pink-100 transition hover:bg-pink-200">
          <h2 className="text-4xl font-semibold text-stone-800">Art Gallery</h2>
        </div>

        <div className="flex w-80 flex-col items-center justify-center bg-amber-50 text-center">
          <h1 className="mt-4 text-5xl font-bold text-stone-800">
            Zaida Grilli
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Portfolio
          </p>
          <p className="mt-4 text-stone-600">
            Creative Tech | Artist & Developer
          </p>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            I create thoughtful tech and visual work with people in mind.
          </p>
          <button className="mt-8 rounded-full border border-stone-700 px-6 py-3 text-sm uppercase tracking-[0.2em] text-stone-700 transition hover:bg-stone-800 hover:text-amber-50">
            Resume
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center bg-purple-100 transition hover:bg-purple-200">
          <h2 className="text-4xl font-semibold text-stone-800">
            Tech Projects
          </h2>
        </div>
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase tracking-normal text-stone-500">
          Scroll
        </p>
      </section>
    </main>
  );
}
export default Home;
