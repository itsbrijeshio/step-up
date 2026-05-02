import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <Link to="/" className="font-bebas text-4xl text-primary tracking-tighter">
            STEPUP
          </Link>
          <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
            Every Step, Elevated. We bring you the world's most exclusive footwear with a focus on street culture and luxury aesthetics.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bebas text-xl tracking-wider mb-6">SHOP</h4>
          <ul className="flex flex-col gap-3">
            <li><Link to="/products?category=running" className="text-sm text-foreground/50 hover:text-primary transition-colors">Running</Link></li>
            <li><Link to="/products?category=casual" className="text-sm text-foreground/50 hover:text-primary transition-colors">Casual</Link></li>
            <li><Link to="/products?category=sports" className="text-sm text-foreground/50 hover:text-primary transition-colors">Sports</Link></li>
            <li><Link to="/products?category=formal" className="text-sm text-foreground/50 hover:text-primary transition-colors">Formal</Link></li>
            <li><Link to="/products?category=sandals" className="text-sm text-foreground/50 hover:text-primary transition-colors">Sandals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl tracking-wider mb-6">HELP</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Order Status</a></li>
            <li><a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Returns</a></li>
            <li><a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Payment Options</a></li>
            <li><a href="#" className="text-sm text-foreground/50 hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bebas text-xl tracking-wider mb-6">NEWSLETTER</h4>
          <p className="text-sm text-foreground/50 mb-4">Join our community for exclusive drops and early access.</p>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-[#1A1A1A] border-white/10 focus:border-primary text-xs"
            />
            <Button size="icon" className="bg-primary text-black hover:bg-primary/80 shrink-0">
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] text-foreground/30 tracking-widest uppercase">
          © 2026 STEPUP FOOTWEAR. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[10px] text-foreground/30 hover:text-foreground transition-colors uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-[10px] text-foreground/30 hover:text-foreground transition-colors uppercase tracking-widest">Terms of Service</a>
          <a href="#" className="text-[10px] text-foreground/30 hover:text-foreground transition-colors uppercase tracking-widest">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
