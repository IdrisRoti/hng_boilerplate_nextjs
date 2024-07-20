export default function page() {
  return (
    <>
      <div className="mb-12 flex flex-col items-center justify-center gap-4 py-[.6rem] text-center md:mb-16">
        <p className="rounded-[.6rem] bg-subtle p-[.6rem] text-xl text-foreground">
          Pricing
        </p>
        <h2 className="text-[1.75rem] font-bold text-foreground sm:text-4xl md:text-6xl">
          Simple and <span className="text-primary">Affordable</span> Pricing
          Plan
        </h2>
        <p className="max-w-[50rem] text-center text-lg text-foreground sm:text-2xl md:text-4xl">
          Our flexible plans are designed to scale with your business. We have a
          plan for you.
        </p>
      </div>
    </>
  );
}
