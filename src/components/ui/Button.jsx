import { ArrowUpRight } from "lucide-react";

export default function Button({
  href = "#",
  children,
  variant = "dark",
  className = "",
}) {
  const styles =
    variant === "light"
      ? "bg-white text-[#101a2d] hover:bg-[#d5ad61] hover:text-white"
      : "bg-[var(--navy)] text-white hover:bg-[var(--gold)]";

  return (
    <a
      href={href}
      data-cursor
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${styles} ${className}`}
    >
      <span>{children}</span>

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 transition group-hover:bg-white/15">
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}