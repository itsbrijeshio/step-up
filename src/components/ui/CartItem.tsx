import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItem } from "../../types";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/button";

interface CartItemProps {
  item: CartItem;
}

export default function CartItemComponent({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 sm:gap-6 py-6 border-b border-white/5 last:border-0 group">
      {/* Image */}
      <Link to={`/products/${item.id}`} className="w-24 sm:w-32 aspect-square rounded-lg overflow-hidden shrink-0 bg-[#222]">
        <img 
          src={item.images[0]} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                {item.brand}
              </span>
              <Link to={`/products/${item.id}`}>
                <h3 className="font-syne font-bold text-sm sm:text-base hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </Link>
            </div>
            <button 
              onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor.name)}
              className="text-foreground/30 hover:text-red-500 transition-colors p-1"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <span className="text-xs text-foreground/50">
              SIZE: <span className="text-foreground font-bold">UK {item.selectedSize}</span>
            </span>
            <span className="text-xs text-foreground/50 flex items-center gap-2">
              COLOR: 
              <span className="flex items-center gap-1.5 font-bold text-foreground">
                <span className="w-2.5 h-2.5 rounded-full border border-white/20" style={{ backgroundColor: item.selectedColor.hex }} />
                {item.selectedColor.name}
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 bg-[#262626] rounded-full px-3 py-1 scale-90 sm:scale-100 origin-left">
            <button 
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity - 1)}
              className="text-foreground/50 hover:text-primary disabled:opacity-30"
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor.name, item.quantity + 1)}
              className="text-foreground/50 hover:text-primary"
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="font-bebas text-xl text-primary leading-none">
            ₹{(item.price * item.quantity).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
