import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Zap, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import MarqueeTicker from "../components/layout/MarqueeTicker";
import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";
import { Button } from "../components/ui/button";

export default function Home() {
  const trendingProducts = products.filter(p => p.isTrending);
  const categories = [
    { name: "RUNNING", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800", count: "48+ MODELS" },
    { name: "CASUAL", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800", count: "120+ MODELS" },
    { name: "SPORTS", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800", count: "35+ MODELS" },
    { name: "FORMAL", image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800", count: "22+ MODELS" },
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Shoe" 
            className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-bebas text-7xl md:text-[120px] leading-[0.85] tracking-tighter mb-8 drop-shadow-2xl">
              <span className="block overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  STEP INTO YOUR
                </motion.span>
              </span>
              <span className="block overflow-hidden text-primary">
                <motion.span 
                   className="block"
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 1, delay: 0.4 }}
                >
                  TRUE STORY
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-syne text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto tracking-wide"
          >
            Premium footwear designed for the bold. Experience comfort that doesn't compromise on character.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button asChild size="lg" className="bg-primary text-black font-bebas text-2xl px-12 py-8 tracking-widest hover:scale-105 transition-transform rounded-none">
              <Link to="/products">SHOP MEN</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary font-bebas text-2xl px-12 py-8 tracking-widest hover:bg-primary/10 hover:scale-105 transition-transform rounded-none">
              <Link to="/products">SHOP WOMEN</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-foreground/30 uppercase">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      <MarqueeTicker />

      {/* Categories Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-bebas text-5xl tracking-wider uppercase mb-2">SHOP BY CATEGORY</h2>
            <div className="w-20 h-1.5 bg-primary" />
          </div>
          <Link to="/products" className="hidden sm:flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-foreground/50 hover:text-primary transition-colors">
            VIEW ALL <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] font-bold text-primary tracking-widest mb-1 block uppercase">
                  {cat.count}
                </span>
                <h3 className="font-bebas text-4xl tracking-wider uppercase">{cat.name}</h3>
                <div className="flex items-center gap-2 mt-4 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  EXPLORE NOW <ArrowRight size={14} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 overflow-hidden bg-[#111]">
        <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12 flex items-center justify-between">
          <h2 className="font-bebas text-5xl tracking-wider uppercase">TRENDING NOW</h2>
          <div className="flex gap-4">
             {/* Navigation controls for horizontal scroll could go here */}
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 lg:px-12 gap-8 scrollbar-hide snap-x no-scrollbar">
          {trendingProducts.map((product) => (
            <div key={product.id} className="min-w-[320px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-16 px-6 border-y border-white/5 bg-[#0D0D0D]">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {["NIKE", "ADIDAS", "PUMA", "REEBOK", "NEW BALANCE", "SKECHERS"].map(brand => (
             <span key={brand} className="font-bebas text-4xl lg:text-5xl tracking-widest hover:text-primary transition-colors cursor-default">
               {brand}
             </span>
           ))}
        </div>
      </section>

      {/* Why StepUp? */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2 className="font-bebas text-6xl tracking-wider mb-16 uppercase">WHY CHOOSE STEPUP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: "AUTHENTIC ONLY", desc: "Every shoe is verified by our experts. We guarantee 100% genuine products directly from brands." },
            { icon: Truck, title: "EXPRESS DELIVERY", desc: "Enjoy fast and secure delivery across India with real-time tracking for every step of the journey." },
            { icon: Zap, title: "7-DAY RETURNS", desc: "Not the perfect fit? No worries. Our easy return policy ensures you can shop with true confidence." },
          ].map((feature, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <feature.icon size={36} />
              </div>
              <h4 className="font-syne font-bold text-xl mb-4 uppercase">{feature.title}</h4>
              <p className="text-foreground/50 text-sm leading-relaxed max-w-[280px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
