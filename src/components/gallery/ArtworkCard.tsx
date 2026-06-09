type ArtworkCardProps = {
  title: string;
  category: string;
  image: string;
};

function ArtworkCard({ title, category, image }: ArtworkCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-rose-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="h-72 w-full rounded-xl bg-amber-50 object-contain"
      />

      <p className="mt-4 text-sm uppercase text-stone-500">{category}</p>

      <h3 className="mt-2 text-2xl font-semibold text-stone-800">{title}</h3>
    </article>
  );
}

export default ArtworkCard;
