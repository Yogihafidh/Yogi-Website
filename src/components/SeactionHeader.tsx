export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="uppercase text-[11px] md:text-xs font-semibold tracking-[0.28em] text-gray-500 mb-3">
        {eyebrow}
      </p>
      <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
        {title}
      </h1>
      <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-10 md:mb-14 lg:mb-16">
        {description}
      </p>
    </div>
  );
};
