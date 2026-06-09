import ArtworkCard from "../../components/gallery/ArtworkCard";
const artworks = [
  {
    id: 1,
    title: "Candlelight Girl",
    category: "Graphite",
    medium: "Graphite on Paper",
  },
  {
    id: 2,
    title: "Crystal Study",
    category: "Sketch",
    medium: "Sketch",
  },
  {
    id: 3,
    title: "Dream Pill",
    category: "Watercolor",
    medium: "Color Pencil",
  },
];

function ArtGallery() {
  return (
    <main className="min-h-screen bg-amber-50 px-8 py-16 text-stone-800">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
          Traditional • Digital • Sketchbook
        </p>

        <h1 className="mt-4 text-6xl font-bold">Art Gallery</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          A collection of drawings, paintings, studies, and visual experiments.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl rounded-3xl bg-white/60 p-8 shadow-sm">
        <h2 className="text-3xl font-semibold">Featured Sketchbook</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="min-h-96 rounded-2xl bg-pink-100 p-6">Page One</div>

          <div className="min-h-96 rounded-2xl bg-purple-100 p-6">Page Two</div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        <h2 className="text-3xl font-semibold">View All Works</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              title={artwork.title}
              category={artwork.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ArtGallery;
