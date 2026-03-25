export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  introClassName = "",
}) {
  return (
    <section
      id={id}
      className={`relative pb-12 pt-16 sm:pb-16 sm:pt-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl ${introClassName}`}>
            {eyebrow ? (
              <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#2c7a7b]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[#17171b] sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#4d4a46] sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
