export default function SectionHeading({ children, className }) {
  return (
    <h2
      className={`leading-0 flex flex-col gap-4 mob:gap-0 md:text-5xl text-4xl font-light uppercase ${className}`}
    >
      {children}
    </h2>
  );
}
