import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { Category, Gender } from "../types";
import ProductCard from "../components/ui/ProductCard";
import { Filter, SlidersHorizontal, Search, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "motion/react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories: Category[] = ["running", "casual", "formal", "sports", "sandals"];
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "Skechers", "Vans", "Timberland", "Jimmy Choo", "Clarks", "StepUp"];
  const genders: Gender[] = ["men", "women", "unisex", "kids"];

  const currentCategory = searchParams.get("category") || "all";
  const currentGender = searchParams.get("gender") || "all";
  const currentSort = searchParams.get("sort") || "newest";

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = currentCategory === "all" || p.category === currentCategory;
      const matchGender = currentGender === "all" || p.gender === currentGender;
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchGender && matchPrice && matchSearch;
    }).sort((a, b) => {
      if (currentSort === "price-low") return a.price - b.price;
      if (currentSort === "price-high") return b.price - a.price;
      if (currentSort === "rating") return b.rating - a.rating;
      return 0; // "newest" as default
    });
  }, [currentCategory, currentGender, currentSort, priceRange, searchTerm]);

  const toggleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const FiltersContent = () => (
    <div className="space-y-10 py-4">
      {/* Category Filter */}
      <div className="space-y-4">
        <h3 className="font-bebas text-xl tracking-wider border-b border-white/5 pb-2">CATEGORIES</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <div 
              key={cat} 
              className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${currentCategory === cat ? 'bg-primary/5 text-primary' : 'hover:bg-white/5 text-foreground/50'}`}
              onClick={() => toggleFilter("category", cat)}
            >
              <span className="text-xs font-bold uppercase tracking-widest">{cat}</span>
              {currentCategory === cat && <Badge className="bg-primary text-black h-4 w-4 p-0 shrink-0 flex items-center justify-center rounded-full" />}
            </div>
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div className="space-y-4">
        <h3 className="font-bebas text-xl tracking-wider border-b border-white/5 pb-2">GENDER</h3>
        <div className="flex flex-wrap gap-2">
          {genders.map((g) => (
            <button
              key={g}
              onClick={() => toggleFilter("gender", g)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border transition-all ${currentGender === g ? 'bg-primary border-primary text-black' : 'border-white/10 text-foreground/50 hover:border-white/30'}`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <h3 className="font-bebas text-xl tracking-wider">PRICE RANGE</h3>
          <span className="text-[10px] font-mono text-primary font-bold">₹{priceRange[0]} - ₹{priceRange[1]}</span>
        </div>
        <div className="px-2">
          <Slider 
             defaultValue={priceRange} 
             max={20000} 
             step={500} 
             minStepsBetweenThumbs={1}
             onValueChange={(val) => setPriceRange(val)}
             className="text-primary"
          />
        </div>
        <div className="flex justify-between text-[10px] text-foreground/30 font-mono">
          <span>₹0</span>
          <span>₹20000+</span>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="space-y-4">
        <h3 className="font-bebas text-xl tracking-wider border-b border-white/5 pb-2">BRANDS</h3>
        <div className="grid grid-cols-2 gap-2">
          {brands.slice(0, 8).map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
               <Checkbox id={brand} className="border-white/20" />
               <label htmlFor={brand} className="text-[10px] font-bold tracking-widest text-foreground/50 uppercase cursor-pointer hover:text-foreground">
                 {brand}
               </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0D0D0D] min-h-screen pt-24 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="mb-12 relative overflow-hidden h-64 rounded-3xl group bg-[#111]">
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1920" 
               alt="Banner" 
               className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[30s]"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-12">
             <h1 className="font-bebas text-6xl md:text-8xl tracking-tight mb-2 uppercase">
               ALL <span className="text-primary">FOOTWEAR</span>
             </h1>
             <p className="font-syne text-sm md:text-base text-foreground/50 tracking-wider max-w-md">
               From performance runners to premium lifestyle pieces, find your next step here.
             </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-[calc(100vh-160px)]">
            <FiltersContent />
          </aside>

          {/* Main List */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
              <div className="relative w-full sm:w-96 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors" size={18} />
                <Input 
                  placeholder="SEARCH PRODUCTS..." 
                  className="bg-[#1A1A1A] border-white/5 pl-12 h-12 text-sm tracking-widest focus:border-primary transition-all rounded-xl"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                <div className="flex items-center gap-2 lg:hidden">
                   <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                     <SheetTrigger asChild>
                       <Button variant="outline" className="h-12 border-white/10 bg-[#1A1A1A] flex items-center gap-2 text-[10px] font-bold tracking-widest px-4">
                         <Filter size={16} /> FILTERS
                       </Button>
                     </SheetTrigger>
                     <SheetContent side="left" className="bg-[#0D0D0D] border-white/10 w-full sm:w-80 overflow-y-auto">
                        <SheetHeader className="mb-8">
                          <SheetTitle className="font-bebas text-3xl text-primary text-left">FILTERS</SheetTitle>
                        </SheetHeader>
                        <FiltersContent />
                     </SheetContent>
                   </Sheet>
                </div>

                <Select defaultValue={currentSort} onValueChange={(val) => toggleFilter("sort", val)}>
                  <SelectTrigger className="h-12 border-white/10 bg-[#1A1A1A] text-[10px] font-bold tracking-widest w-full sm:w-48 appearance-none px-4">
                    <SelectValue placeholder="SORT BY" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1A1A] border-white/10">
                    <SelectItem value="newest" className="font-bold text-[10px] tracking-widest uppercase">Newest Arrivals</SelectItem>
                    <SelectItem value="price-low" className="font-bold text-[10px] tracking-widest uppercase">Price: Low to High</SelectItem>
                    <SelectItem value="price-high" className="font-bold text-[10px] tracking-widest uppercase">Price: High to Low</SelectItem>
                    <SelectItem value="rating" className="font-bold text-[10px] tracking-widest uppercase">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(currentCategory !== "all" || currentGender !== "all") && (
              <div className="flex flex-wrap gap-2 mb-8">
                {currentCategory !== "all" && (
                   <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 flex items-center gap-2 group cursor-pointer" onClick={() => toggleFilter("category", currentCategory)}>
                     {currentCategory.toUpperCase()} <X size={12} className="group-hover:scale-125 transition-transform" />
                   </Badge>
                )}
                {currentGender !== "all" && (
                   <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 flex items-center gap-2 group cursor-pointer" onClick={() => toggleFilter("gender", currentGender)}>
                     {currentGender.toUpperCase()} <X size={12} className="group-hover:scale-125 transition-transform" />
                   </Badge>
                )}
                <button 
                  onClick={() => setSearchParams({})}
                  className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors uppercase tracking-widest ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                 {filteredProducts.map((product) => (
                   <div key={product.id}>
                     <ProductCard product={product} />
                   </div>
                 ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-32 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 text-foreground/20">
                  <Search size={48} />
                </div>
                <h3 className="font-bebas text-3xl tracking-wider mb-2">NO PRODUCTS FOUND</h3>
                <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                  Try adjusting your filters or search term to discover other StepUp products.
                </p>
                <Button variant="outline" className="mt-8 border-primary text-primary" onClick={() => { setSearchParams({}); setPriceRange([0, 20000]); setSearchTerm(""); }}>
                  RESET ALL FILTERS
                </Button>
              </div>
            )}
            
            {/* Pagination UI Placeholder */}
            {filteredProducts.length > 0 && (
               <div className="mt-20 flex items-center justify-center gap-4">
                  <Button variant="outline" className="border-white/10 disabled:opacity-20" disabled>PREV</Button>
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center font-bold text-sm">1</span>
                    <span className="w-10 h-10 rounded-lg bg-white/5 text-foreground/50 flex items-center justify-center font-bold text-sm hover:text-foreground cursor-pointer">2</span>
                    <span className="w-10 h-10 rounded-lg bg-white/5 text-foreground/50 flex items-center justify-center font-bold text-sm hover:text-foreground cursor-pointer">3</span>
                  </div>
                  <Button variant="outline" className="border-white/10">NEXT</Button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
