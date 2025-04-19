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
    <>
      <p className="uppercase font-semibold tracking-widest  mb-4">{eyebrow}</p>
      <h1 className="font-serif text-3xl md:text-5xl mb-4">{title}</h1>
      <p className="mb-8 md:mb-16 lg:mb-24 md:text-lg">{description} </p>
    </>
  );
};
