import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Database, 
  Settings, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Orders", path: "/admin/orders", icon: ShoppingBag },
    { name: "Inventory", path: "/admin/inventory", icon: Database },
    { name: "Customers", path: "/admin/customers", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 bg-[#111] border-r border-white/5 transition-all duration-300 flex flex-col",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center justify-between mb-8">
          <Link to="/" className={cn("font-bebas text-2xl text-primary transition-opacity", !isSidebarOpen && "lg:opacity-0")}>
            STEPUP ADMIN
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:block text-foreground/50 hover:text-primary transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-4 p-3 rounded-xl transition-all group",
                location.pathname === item.path 
                  ? "bg-primary text-black" 
                  : "text-foreground/50 hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon size={20} className={cn(location.pathname === item.path ? "text-black" : "group-hover:text-primary transition-colors")} />
              {isSidebarOpen && <span className="text-sm font-bold tracking-wide">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-4 p-3 rounded-xl text-foreground/30 hover:bg-red-500/10 hover:text-red-500 transition-all">
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-sm font-bold tracking-wide">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#111]/50 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
             <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-foreground/50 hover:text-primary transition-colors"
             >
                <Menu size={24} />
             </button>
             <h1 className="font-bebas text-2xl tracking-wider">
               {menuItems.find(i => i.path === location.pathname)?.name || "ADMIN"}
             </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Master Admin</span>
              <span className="text-[10px] text-foreground/30 font-mono">admin@stepup.io</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center font-bold text-primary">
              A
            </div>
          </div>
        </header>
        
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
