export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`h-px w-8 ${
            light ? "bg-[#d5ad61]" : "bg-[#b98b3d]"
          }`}
        />

        <p
          className={`text-[11px] font-bold uppercase tracking-[0.32em] ${
            light ? "text-[#e6cd98]" : "text-[#a57b36]"
          }`}
        >
          {eyebrow}
        </p>
      </div>

      <h2
        className={`mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-[15px] leading-7 ${
            light ? "text-white/65" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}