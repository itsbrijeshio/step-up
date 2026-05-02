import { products } from "../../data/products";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Inventory() {
  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Database size={20} />
               </div>
               <h4 className="font-bebas text-lg tracking-wider">Total Value</h4>
            </div>
            <p className="font-bebas text-4xl text-primary">₹12,45,000</p>
         </div>
         <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500">
                  <TrendingUp size={20} />
               </div>
               <h4 className="font-bebas text-lg tracking-wider text-green-500">Fast Moving</h4>
            </div>
            <p className="font-bebas text-4xl text-green-500">AirStride Pro</p>
         </div>
         <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
                  <AlertTriangle size={20} />
               </div>
               <h4 className="font-bebas text-lg tracking-wider text-red-500">Stock Alert</h4>
            </div>
            <p className="font-bebas text-4xl text-red-500">4 SKUs LOW</p>
         </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6">Product & Variation</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Size (UK)</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Current Stock</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Warehouse</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6 text-right">Update Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.slice(0, 8).map((product) => (
              product.sizes.slice(0, 3).map((size, idx) => (
                <TableRow key={`${product.id}-${size}`} className="border-white/5 hover:bg-white/[0.01]">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-black/20 shrink-0 border border-white/5 opacity-50">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm tracking-wide">{product.name}</span>
                        <span className="text-[10px] text-foreground/30 font-mono italic">SKU: {product.brand.substring(0,3).toUpperCase()}-{product.id}-{size}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-white/10 font-mono text-[10px] w-8 h-8 flex items-center justify-center p-0 rounded-lg">
                      {size}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                       <span className={cn("font-bebas text-xl tracking-widest", product.stock < 5 ? "text-red-500" : "text-foreground")}>{product.stock + size}</span>
                       <span className="text-[9px] font-bold text-foreground/20 uppercase tracking-widest">Units Available</span>
                    </div>
                  </TableCell>
                  <TableCell>
                     <span className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Mumbai Hub_A</span>
                  </TableCell>
                  <TableCell className="px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <Input 
                         type="number" 
                         className="w-20 h-10 bg-[#1A1A1A] border-white/10 text-center font-bebas text-lg" 
                         defaultValue={product.stock + size}
                       />
                       <Button size="sm" className="bg-primary/10 text-primary border-primary/20 border hover:bg-primary hover:text-black">SET</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex justify-between items-center bg-[#111] p-6 rounded-2xl border border-white/5">
         <p className="text-xs text-foreground/30 font-syne">Showing 24 variations across 8 product lines.</p>
         <Button className="bg-primary text-black font-bebas tracking-widest text-lg px-10 h-12">UPDATE ALL CHANGES</Button>
      </div>
    </div>
  );
}
