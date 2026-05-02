import { useState } from "react";
import { products } from "../../data/products";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Filter, Eye } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductForm from "../../components/admin/ProductForm";
import { Product } from "../../types";
import { cn } from "@/lib/utils";

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingProduct(undefined);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
          <Input 
            placeholder="Search products..." 
            className="bg-[#111] border-white/5 pl-12 h-12 text-sm tracking-widest rounded-xl focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button variant="outline" className="h-12 border-white/5 bg-[#111] px-6 text-[10px] font-bold tracking-widest">
            <Filter size={16} className="mr-2" /> EXPORT
          </Button>
          
          <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
            <SheetTrigger asChild>
              <Button onClick={handleAdd} className="h-12 bg-primary text-black px-8 font-bebas text-lg tracking-widest hover:bg-primary/90 flex-1 md:flex-none">
                <Plus size={18} className="mr-2" /> ADD PRODUCT
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#111] border-white/5 w-full sm:w-[600px] p-8 overflow-y-auto no-scrollbar">
              <ProductForm onClose={() => setIsFormOpen(false)} initialProduct={editingProduct} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6">Product</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Category</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Price</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Stock</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Status</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="border-white/5 hover:bg-white/[0.01]">
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-black/20 shrink-0 border border-white/5">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm tracking-wide">{product.name}</span>
                      <span className="text-[10px] uppercase font-bold text-primary tracking-widest">{product.brand}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                   <Badge variant="outline" className="border-white/10 uppercase text-[9px] font-bold tracking-widest px-2">
                     {product.category}
                   </Badge>
                </TableCell>
                <TableCell className="font-bebas text-lg tracking-widest">₹{product.price.toLocaleString()}</TableCell>
                <TableCell className="font-mono text-xs font-bold text-foreground/50">{product.stock}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", product.stock > 10 ? "bg-green-500" : product.stock > 0 ? "bg-yellow-500" : "bg-red-500")} />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/50">
                      {product.stock > 10 ? "Active" : product.stock > 0 ? "Low Stock" : "Out of Stock"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 text-right">
                   <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/5 text-foreground/30 hover:text-primary transition-all">
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => handleEdit(product)}
                        className="p-2 rounded-lg hover:bg-white/5 text-foreground/30 hover:text-white transition-all"
                      >
                        <Edit size={18} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-500/10 text-foreground/30 hover:text-red-500 transition-all">
                        <Trash2 size={18} />
                      </button>
                   </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
