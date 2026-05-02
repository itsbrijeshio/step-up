import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: number[];
  selectedSize: number | null;
  onSelect: (size: number) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-lg font-bebas text-lg tracking-wider border transition-all",
            selectedSize === size
              ? "bg-primary border-primary text-black scale-105 shadow-[0_0_15px_rgba(232,255,0,0.2)]"
              : "bg-[#1A1A1A] border-white/5 text-foreground/50 hover:border-primary/50 hover:text-foreground"
          )}
        >
          UK {size}
        </button>
      ))}
    </div>
  );
}
