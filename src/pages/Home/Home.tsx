function Home() {
  return (
    <main>
      <section className="flex min-h-screen">
        <div className="flex flex-1 items-center justify-center bg-pink-100">
          <h2 className="text-4xl font-semibold">Art Gallery</h2>
        </div>
        <div className="flex w-80 flex-col items-center justify-center bg-amber-50 text-center">
          <h1 className="mt-4 text-5xl font-bold text-stone-800">
            Zaida Grilli
          </h1>
          <p className="mt-4 text-stone-600">
            Creative Tech | Artist & Developer
          </p>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Portfolio
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center bg-purple-100">
          <h2 className="text-4xl font-semibold">Tech Projects</h2>
        </div>
      </section>
    </main>
  );
}
export default Home;
