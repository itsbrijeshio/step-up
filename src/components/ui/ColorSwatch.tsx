import { Color } from "../../types";
import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  colors: Color[];
  selectedColor: Color | null;
  onSelect: (color: Color) => void;
}

export default function ColorSwatch({ colors, selectedColor, onSelect }: ColorSwatchProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => onSelect(color)}
          className="group flex flex-col items-center gap-2"
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full border-2 transition-all p-0.5",
              selectedColor?.name === color.name
                ? "border-primary scale-110"
                : "border-transparent group-hover:border-white/20"
            )}
          >
            <div
              className="w-full h-full rounded-full border border-black/20"
              style={{ backgroundColor: color.hex }}
            />
          </div>
          <span
            className={cn(
              "text-[10px] font-bold tracking-widest uppercase transition-colors",
              selectedColor?.name === color.name ? "text-primary" : "text-foreground/30 group-hover:text-foreground/50"
            )}
          >
            {color.name}
          </span>
        </button>
      ))}
    </div>
  );
}
