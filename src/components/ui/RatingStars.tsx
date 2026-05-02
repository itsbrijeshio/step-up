import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  max?: number;
  className?: string;
}

export default function RatingStars({ rating, max = 5, className }: RatingStarsProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(max)].map((_, i) => {
        const full = i + 1 <= rating;
        const half = !full && i < rating;
        
        return (
          <span key={i}>
            {full ? (
              <Star size={14} className="fill-primary text-primary" />
            ) : half ? (
              <StarHalf size={14} className="fill-primary text-primary" />
            ) : (
              <Star size={14} className="text-foreground/20" />
            )}
          </span>
        );
      })}
    </div>
  );
}
