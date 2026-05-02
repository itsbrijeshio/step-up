import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../data/products";
import { Color, Product } from "../types";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ShoppingBag, ArrowLeft, Truck, ShieldCheck, RefreshCw, Star, Plus, Minus, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import RatingStars from "../components/ui/RatingStars";
import SizeSelector from "../components/ui/SizeSelector";
import ColorSwatch from "../components/ui/ColorSwatch";
import ProductCard from "../components/ui/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center font-bebas text-4xl">404 - PRODUCT NOT FOUND</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      // Small visual nudge if size is missed
      document.getElementById('size-selector')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-12 flex items-center gap-4">
           <Link to="/products" className="text-foreground/30 hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase">
             <ArrowLeft size={14} /> BACK TO SHOP
           </Link>
           <span className="text-foreground/10 text-xs">/</span>
           <span className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 uppercase">{product.category}</span>
           <span className="text-foreground/10 text-xs">/</span>
           <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase truncate">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          {/* Left: Images */}
          <div className="flex-1 space-y-6">
            <div className="sticky top-32">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#111] border border-white/5 relative group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-6 right-6">
                   <Badge className="bg-black/60 backdrop-blur-md text-primary h-10 px-4 font-bold border-white/10 uppercase tracking-widest flex items-center gap-2">
                     <RefreshCw size={14} /> 360° VIEW
                   </Badge>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={cn(
                      "aspect-square rounded-2xl overflow-hidden border-2 transition-all group",
                      selectedImage === i ? "border-primary" : "border-transparent opacity-40 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-bold tracking-[0.4em] text-sm uppercase">
                  {product.brand}
                </span>
                <div className="flex gap-4">
                   <button className="text-foreground/30 hover:text-primary transition-colors"><Share2 size={20} /></button>
                   <button className="text-foreground/30 hover:text-red-500 transition-colors"><Heart size={20} /></button>
                </div>
              </div>
              
              <h1 className="font-bebas text-6xl md:text-7xl leading-tight tracking-wider mb-4 uppercase">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <RatingStars rating={product.rating} />
                  <span className="text-xs font-bold text-foreground/50 tracking-widest">({product.reviewCount} REVIEWS)</span>
                </div>
                <div className="w-[1px] h-4 bg-white/10" />
                <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase">IN STOCK</span>
              </div>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-bebas text-5xl text-primary leading-none">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-foreground/30 line-through font-bebas">₹{product.originalPrice.toLocaleString()}</span>
                    <Badge className="bg-red-500 text-white font-bold tracking-widest rounded-full px-4 h-7 text-[10px]">33% OFF</Badge>
                  </>
                )}
              </div>
              
              <p className="text-foreground/50 font-syne leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>

            <div className="space-y-10">
              {/* Color Selector */}
              <div id="color-selector">
                <h4 className="text-[10px] font-bold text-foreground/50 tracking-[0.4em] uppercase mb-1">SELECT COLOR</h4>
                <ColorSwatch colors={product.colors} selectedColor={selectedColor} onSelect={setSelectedColor} />
              </div>

              {/* Size Selector */}
              <div id="size-selector">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[10px] font-bold text-foreground/50 tracking-[0.4em] uppercase">SELECT SIZE (UK)</h4>
                  <button className="text-[10px] font-bold text-primary underline underline-offset-4 tracking-widest hover:text-white transition-colors uppercase">Size Guide</button>
                </div>
                <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSelect={setSelectedSize} />
                {!selectedSize && (
                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-primary/50 mt-4 font-bold tracking-widest">
                     * Please select a size to continue
                   </motion.p>
                )}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-6 bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-foreground/50 hover:text-primary transition-colors">
                    <Minus size={18} />
                  </button>
                  <span className="font-bebas text-2xl w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-foreground/50 hover:text-primary transition-colors">
                    <Plus size={18} />
                  </button>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  disabled={isAdded}
                  className={cn(
                    "flex-1 h-auto py-5 font-bebas text-2xl tracking-widest rounded-2xl transition-all relative overflow-hidden",
                    !selectedSize ? "bg-white/10 text-white/30 cursor-not-allowed" : "bg-primary text-black hover:bg-primary/90 hover:scale-[1.02]"
                  )}
                >
                  {isAdded ? "ADDED TO CART!" : (
                    <span className="flex items-center gap-3">
                      <ShoppingBag size={24} /> ADD TO CART
                    </span>
                  )}
                  {isAdded && (
                    <motion.div 
                      layoutId="added-glow"
                      className="absolute inset-0 bg-white/20 animate-pulse"
                    />
                  )}
                </Button>
                
                <Button variant="outline" className="flex-1 h-auto py-5 border-white/10 font-bebas text-2xl tracking-widest rounded-2xl hover:bg-white/5 uppercase">
                  Buy Now
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5">
                {[
                  { icon: ShieldCheck, text: "AUTHENTIC ✓" },
                  { icon: Truck, text: "FREE DELIVERY" },
                  { icon: RefreshCw, text: "EASY RETURN" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground/40">
                      <item.icon size={18} />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] text-foreground/50 text-center uppercase">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details" className="border-white/5">
                  <AccordionTrigger className="font-bebas text-xl tracking-widest uppercase hover:text-primary py-6">PRODUCT DETAILS</AccordionTrigger>
                  <AccordionContent className="text-foreground/50 font-syne space-y-4 pb-8">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Material</span>
                        <span className="text-foreground">{product.material}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Weight</span>
                        <span className="text-foreground">{product.weight}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Release Year</span>
                        <span className="text-foreground">2026</span>
                      </div>
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Ankle Height</span>
                        <span className="text-foreground">Mid-Top</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="delivery" className="border-white/5">
                   <AccordionTrigger className="font-bebas text-xl tracking-widest uppercase hover:text-primary py-6">DELIVERY & RETURNS</AccordionTrigger>
                   <AccordionContent className="text-foreground/50 font-syne text-sm leading-relaxed pb-8">
                     Standard delivery in 3-5 business days. Express delivery available in major cities. We offer a 7-day no-questions-asked return policy. Items must be in their original condition with all tags attached.
                   </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reviews" className="border-white/5">
                   <AccordionTrigger className="font-bebas text-xl tracking-widest uppercase hover:text-primary py-6">REVIEWS ({product.reviewCount})</AccordionTrigger>
                   <AccordionContent className="space-y-6 pb-8">
                      {[1,2,3].map(i => (
                        <div key={i} className="space-y-2 pb-6 border-b border-white/5 last:border-0 pt-2">
                           <div className="flex items-center justify-between">
                              <span className="text-sm font-bold tracking-wide uppercase">User_{i}99</span>
                              <span className="text-[10px] font-mono text-foreground/20 uppercase">02 MAY, 2026</span>
                           </div>
                           <RatingStars rating={5} />
                           <p className="text-xs text-foreground/50 font-syne italic">"Absolutely phenomenal comfort. The best pair of sneakers I've ever owned. Worth every rupee!"</p>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full border-white/5 tracking-widest font-bebas text-lg">VIEW ALL REVIEWS</Button>
                   </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-32 pt-24 border-t border-white/5">
           <h3 className="font-bebas text-5xl tracking-wider mb-12 uppercase">YOU MAY ALSO LIKE</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <div key={p.id}>
                  <ProductCard product={p} />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
