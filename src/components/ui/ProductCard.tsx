import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(232,255,0,0.05)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <Badge className="bg-black/60 backdrop-blur-md text-[10px] font-bold tracking-widest border-white/10 uppercase">
          {product.brand}
        </Badge>
        {product.isNew && (
          <Badge className="bg-primary text-black text-[10px] font-black border-none tracking-widest">
            NEW
          </Badge>
        )}
      </div>

      <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 backdrop-blur-md text-foreground/50 hover:text-primary hover:bg-black/60 transition-all">
        <Heart size={18} />
      </button>

      {/* Image Section */}
      <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#222]">
        <motion.img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Quick Add Overlay - Sliding up */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
          <Button 
            className="w-full bg-primary text-black font-bebas text-lg tracking-widest hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
          >
            VIEW DETAILS
          </Button>
        </div>
      </Link>

      {/* Info Section */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em]">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-primary text-primary" />
            <span className="text-[10px] font-bold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="font-syne font-bold text-base truncate mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bebas text-xl text-primary">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-foreground/30 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <div 
                key={i} 
                className="w-2.5 h-2.5 rounded-full border border-white/20" 
                style={{ backgroundColor: color.hex }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-[8px] font-bold text-foreground/30">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
