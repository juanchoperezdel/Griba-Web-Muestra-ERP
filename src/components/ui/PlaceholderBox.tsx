import { AlertCircle } from "lucide-react";

type PlaceholderBoxProps = {
  label: string;
  hint?: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "free";
};

const aspectClasses: Record<NonNullable<PlaceholderBoxProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/7]",
  free: "",
};

export default function PlaceholderBox({
  label,
  hint,
  className = "",
  aspect = "video",
}: PlaceholderBoxProps) {
  return (
    <div
      className={`placeholder-box flex-col gap-2 ${aspectClasses[aspect]} ${className}`}
    >
      <AlertCircle size={20} className="text-amber-700" />
      <span className="font-semibold">[{label}]</span>
      {hint && <span className="text-xs opacity-80 max-w-xs">{hint}</span>}
    </div>
  );
}
