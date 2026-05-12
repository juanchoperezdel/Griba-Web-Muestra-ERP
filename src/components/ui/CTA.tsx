import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type CTAProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const sizes = "px-6 py-3 text-base";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500 shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-fg border border-border hover:border-brand-500 hover:text-brand-600 focus-visible:ring-brand-500",
  ghost: "text-fg-muted hover:text-fg",
};

export default function CTA({
  href = "#calendario",
  children,
  variant = "primary",
  className = "",
  withArrow = true,
}: CTAProps) {
  return (
    <a href={href} className={`${base} ${sizes} ${styles[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
