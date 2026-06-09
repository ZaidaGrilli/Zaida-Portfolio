type ArtworkCardProps = {
  title: string;
  category: string;
};

function ArtworkCard({ title, category }: ArtworkCardProps) {
  return (
    <article className="artwork-card flex h-64 flex-col justify-end rounded-2xl bg-rose-100 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg">
      <p className="artwork-card__category text-sm uppercase tracking-[0.25em] text-stone-500">
        {category}
      </p>

      <h3 className="artwork-card__title mt-2 text-2xl font-semibold text-stone-800">
        {title}
      </h3>
    </article>
  );
}

export default ArtworkCard;
