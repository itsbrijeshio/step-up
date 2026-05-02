import { ShoppingBag, ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItemComponent from "../components/ui/CartItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function Cart() {
  const { state } = useCart();
  const delivery = state.totalAmount > 4999 ? 0 : (state.totalAmount > 0 ? 150 : 0);
  const total = state.totalAmount + delivery;

  if (state.items.length === 0) {
    return (
      <div className="bg-[#0D0D0D] min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-32 h-32 rounded-full bg-white/5 flex items-center justify-center mb-8 relative"
        >
           <ShoppingBag size={56} className="text-foreground/20" />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="absolute inset-0 bg-primary blur-3xl"
           />
        </motion.div>
        
        <h1 className="font-bebas text-5xl tracking-widest mb-4 uppercase">YOUR CART IS EMPTY</h1>
        <p className="text-foreground/50 font-syne mb-12 max-w-sm">
          Looks like you haven't stepped up yet. Explore our latest collections and find your perfect fit.
        </p>
        
        <Link to="/products">
          <Button size="lg" className="bg-primary text-black font-bebas text-2xl px-12 py-8 tracking-widest rounded-none hover:scale-105 transition-transform">
            BROWSE COLLECTION
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <h1 className="font-bebas text-6xl tracking-tight uppercase">YOUR <span className="text-primary">CART</span></h1>
          <span className="font-mono text-xs text-foreground/30 mt-4 tracking-[0.4em]">({state.totalQuantity} ITEMS)</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="border-t border-white/5 mb-8">
              <AnimatePresence>
                {state.items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor.name}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    layout
                  >
                    <CartItemComponent item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-[10px] font-bold text-primary tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              <ArrowLeft size={14} /> CONTINUE SHOPPING
            </Link>

            <div className="mt-20 p-8 rounded-3xl bg-[#111] border border-white/5 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <ShieldCheck size={120} />
               </div>
               <h3 className="font-bebas text-2xl tracking-widest mb-6">STEPUP PROTECTION</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                     <ShieldCheck className="text-primary shrink-0" size={24} />
                     <div className="space-y-1">
                        <span className="text-xs font-bold tracking-widest uppercase">100% AUTHENTIC</span>
                        <p className="text-[10px] text-foreground/40 leading-relaxed font-syne">Hand-verified for authenticity by our sneaker specialists.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Truck className="text-primary shrink-0" size={24} />
                     <div className="space-y-1">
                        <span className="text-xs font-bold tracking-widest uppercase">FREE SHIPPING</span>
                        <p className="text-[10px] text-foreground/40 leading-relaxed font-syne">Complimentary express shipping on orders over ₹4,999.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <RefreshCw className="text-primary shrink-0" size={24} />
                     <div className="space-y-1">
                        <span className="text-xs font-bold tracking-widest uppercase">EASY RETURNS</span>
                        <p className="text-[10px] text-foreground/40 leading-relaxed font-syne">Hassle-free 7-day exchange and returns from delivery date.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Checkout Column */}
          <aside className="lg:w-96 shrink-0">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white/20 to-primary" />
                <h2 className="font-bebas text-3xl tracking-widest uppercase">ORDER SUMMARY</h2>
                
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/50 tracking-widest uppercase">SUBTOTAL</span>
                    <span className="font-bold">₹{state.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/50 tracking-widest uppercase">SHIPPING</span>
                    <span className={cn("font-bold", delivery === 0 ? "text-green-500" : "")}>
                      {delivery === 0 ? "FREE" : `₹${delivery.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/50 tracking-widest uppercase">ESTIMATED TAX</span>
                    <span className="font-bold">₹0</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-6">
                   <div className="flex items-center gap-2">
                      <Input 
                        placeholder="PROMO CODE" 
                        className="bg-[#1A1A1A] border-white/5 h-10 text-[10px] tracking-widest focus:border-primary transition-all rounded-lg uppercase" 
                      />
                      <Button variant="outline" className="h-10 border-white/10 px-4 text-[10px] font-bold tracking-widest">APPLY</Button>
                   </div>
                   
                   <div className="flex justify-between items-end">
                      <span className="font-bebas text-xl tracking-widest uppercase text-foreground/50 mb-1">TOTAL</span>
                      <span className="font-bebas text-4xl text-primary leading-none">₹{total.toLocaleString()}</span>
                   </div>
                </div>

                <Button className="w-full bg-primary text-black h-16 font-bebas text-2xl tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all group">
                   GO TO CHECKOUT <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="pt-2 flex flex-col items-center gap-4">
                   <span className="text-[8px] font-bold text-foreground/20 tracking-[0.4em] uppercase">ACCEPTED PAYMENTS</span>
                   <div className="flex items-center gap-4 opacity-30 grayscale contrast-150">
                      <span className="font-bebas text-lg">VISA</span>
                      <span className="font-bebas text-lg">UPI</span>
                      <span className="font-bebas text-lg">GPAY</span>
                      <span className="font-bebas text-lg">MASTERCARD</span>
                   </div>
                </div>
              </div>

              <div className="bg-[#111] border border-white/5 rounded-3xl p-6 text-center">
                 <p className="text-[10px] font-syne text-foreground/40 leading-relaxed uppercase tracking-widest">
                   Free shipping on orders above ₹4,999. <br/>
                   Standard delivery is 3-5 business days.
                 </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
