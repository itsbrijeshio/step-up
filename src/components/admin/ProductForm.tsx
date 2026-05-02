import { X, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Product, Category, Gender } from "../../types";

interface ProductFormProps {
  onClose: () => void;
  initialProduct?: Product;
}

export default function ProductForm({ onClose, initialProduct }: ProductFormProps) {
  const categories: Category[] = ["running", "casual", "formal", "sports", "sandals"];
  const genders: Gender[] = ["men", "women", "kids", "unisex"];
  const allSizes = [5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 sticky top-[-32px] bg-[#111] z-10 pt-4">
        <h2 className="font-bebas text-2xl tracking-wider">
          {initialProduct ? "EDIT PRODUCT" : "ADD NEW PRODUCT"}
        </h2>
        <button onClick={onClose} className="rounded-full p-2 hover:bg-white/5 transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Product Name</label>
          <Input 
            placeholder="e.g. AirStride Pro" 
            className="bg-[#222] border-white/10" 
            defaultValue={initialProduct?.name}
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Brand</label>
          <Input 
            placeholder="e.g. Nike" 
            className="bg-[#222] border-white/10"
            defaultValue={initialProduct?.brand}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Category</label>
          <Select defaultValue={initialProduct?.category}>
            <SelectTrigger className="bg-[#222] border-white/10 uppercase font-bold text-xs">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-white/10">
              {categories.map(cat => (
                <SelectItem key={cat} value={cat} className="uppercase font-bold text-[10px] tracking-widest">
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Gender</label>
          <Select defaultValue={initialProduct?.gender}>
            <SelectTrigger className="bg-[#222] border-white/10 uppercase font-bold text-xs">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent className="bg-[#1A1A1A] border-white/10">
              {genders.map(g => (
                <SelectItem key={g} value={g} className="uppercase font-bold text-[10px] tracking-widest">
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Stock</label>
          <Input 
            type="number" 
            className="bg-[#222] border-white/10"
            defaultValue={initialProduct?.stock}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Price (₹)</label>
          <Input 
            type="number" 
            className="bg-[#222] border-white/10"
            defaultValue={initialProduct?.price}
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Original Price (₹)</label>
          <Input 
            type="number" 
            className="bg-[#222] border-white/10"
            defaultValue={initialProduct?.originalPrice}
          />
        </div>
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Discount (%)</label>
          <Input 
            type="number" 
            className="bg-[#222] border-white/10"
            defaultValue={initialProduct?.discount}
          />
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Available Sizes (UK)</label>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {allSizes.map(size => (
            <div key={size} className="flex items-center gap-2 bg-[#222] p-3 rounded-lg border border-white/5">
              <Checkbox id={`size-${size}`} defaultChecked={initialProduct?.sizes.includes(size)} />
              <label htmlFor={`size-${size}`} className="text-xs font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Image URL</label>
        <div className="flex gap-4">
          <Input 
            placeholder="https://..." 
            className="bg-[#222] border-white/10 flex-1"
            defaultValue={initialProduct?.images[0]}
          />
          <Button variant="outline" className="border-white/10 hover:bg-primary hover:text-black">
            <Upload size={18} />
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
           {initialProduct?.images.map((img, i) => (
             <div key={i} className="aspect-square bg-[#222] rounded-lg border border-white/5 overflow-hidden">
                <img src={img} alt="preview" className="w-full h-full object-cover" />
             </div>
           )) || (
             [1,2,3,4].map(i => (
               <div key={i} className="aspect-square bg-[#222] rounded-lg border border-white/5 flex items-center justify-center text-foreground/10 border-dashed">
                 <Plus size={24} />
               </div>
             ))
           )}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-[10px] font-bold text-foreground/50 tracking-widest uppercase">Description</label>
        <textarea 
          className="w-full min-h-[120px] bg-[#222] border border-white/10 rounded-lg p-4 font-sans text-sm focus:outline-none focus:border-primary transition-colors"
          placeholder="Product storytelling goes here..."
          defaultValue={initialProduct?.description}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#111] border-t border-white/5 flex gap-4">
        <Button variant="outline" className="flex-1 border-white/10 h-12 uppercase font-bebas text-lg tracking-widest" onClick={onClose}>
          CANCEL
        </Button>
        <Button className="flex-1 bg-primary text-black h-12 uppercase font-bebas text-lg tracking-widest hover:bg-primary/90">
          SAVE PRODUCT
        </Button>
      </div>
    </div>
  );
}
