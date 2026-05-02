import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { state } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/products" },
    { name: "MEN", path: "/products?gender=men" },
    { name: "WOMEN", path: "/products?gender=women" },
    { name: "ADMIN", path: "/admin" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 py-4 flex items-center justify-between",
        isScrolled ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-12">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-bebas text-3xl tracking-tighter text-primary group-hover:scale-105 transition-transform">
            STEPUP
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs font-bold tracking-[0.2em] transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <button className="hidden sm:block text-foreground/70 hover:text-primary transition-colors">
          <Search size={22} />
        </button>
        <button className="hidden sm:block text-foreground/70 hover:text-primary transition-colors">
          <User size={22} />
        </button>
        <Link to="/cart" className="relative group">
          <ShoppingBag size={24} className="text-foreground group-hover:text-primary transition-colors" />
          <AnimatePresence>
            {state.totalQuantity > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
              >
                {state.totalQuantity}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden text-foreground hover:text-primary transition-colors">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0D0D0D] border-white/10 w-[300px]">
            <SheetHeader className="mb-12">
              <SheetTitle className="font-bebas text-3xl text-primary text-left">
                MENU
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bebas tracking-wider transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-syne">
                  <ShoppingBag size={20} /> CART ({state.totalQuantity})
                </Link>
                <button className="flex items-center gap-3 text-lg font-syne text-left">
                  <User size={20} /> ACCOUNT
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
