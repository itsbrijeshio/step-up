import { useState } from "react";
import { Order } from "../../types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, MoreHorizontal, ArrowRight } from "lucide-react";

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState("");

  const orders: Order[] = [
    { id: "#STP-1092", customerName: "Rahul Sharma", customerEmail: "rahul@example.com", status: "delivered", total: 12499, items: 3, date: "02 May, 2026", paymentMethod: "UPI" },
    { id: "#STP-1093", customerName: "Anita Desai", customerEmail: "anita@example.com", status: "processing", total: 4999, items: 1, date: "02 May, 2026", paymentMethod: "Visa" },
    { id: "#STP-1094", customerName: "Vikram Singh", customerEmail: "vikram@example.com", status: "pending", total: 8999, items: 2, date: "02 May, 2026", paymentMethod: "Mastercard" },
    { id: "#STP-1095", customerName: "Priya Patel", customerEmail: "priya@example.com", status: "shipped", total: 3299, items: 1, date: "01 May, 2026", paymentMethod: "Paytm" },
    { id: "#STP-1096", customerName: "Karan Johar", customerEmail: "karan@example.com", status: "delivered", total: 15999, items: 4, date: "30 Apr, 2026", paymentMethod: "UPI" },
    { id: "#STP-1097", customerName: "Meera Nair", customerEmail: "meera@example.com", status: "cancelled", total: 2499, items: 1, date: "29 Apr, 2026", paymentMethod: "NetBanking" },
    { id: "#STP-1098", customerName: "Sanjay Dutt", customerEmail: "sanjay@example.com", status: "delivered", total: 7500, items: 2, date: "28 Apr, 2026", paymentMethod: "Visa" },
  ];

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending": return <Badge className="bg-yellow-500/10 text-yellow-500 border-none capitalize font-bold text-[10px]">Pending</Badge>;
      case "processing": return <Badge className="bg-blue-500/10 text-blue-500 border-none capitalize font-bold text-[10px]">Processing</Badge>;
      case "shipped": return <Badge className="bg-purple-500/10 text-purple-500 border-none capitalize font-bold text-[10px]">Shipped</Badge>;
      case "delivered": return <Badge className="bg-green-500/10 text-green-500 border-none capitalize font-bold text-[10px]">Delivered</Badge>;
      case "cancelled": return <Badge className="bg-red-500/10 text-red-500 border-none capitalize font-bold text-[10px]">Cancelled</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" />
          <Input 
            placeholder="Search orders (ID, Customer...)" 
            className="bg-[#111] border-white/5 pl-12 h-12 text-sm tracking-widest rounded-xl focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button variant="outline" className="h-12 border-white/5 bg-[#111] px-6 text-[10px] font-bold tracking-widest">
            <Filter size={16} className="mr-2" /> FILTER
          </Button>
          <Button variant="outline" className="h-12 border-white/5 bg-[#111] px-6 text-[10px] font-bold tracking-widest">
            <Download size={16} className="mr-2" /> EXPORT
          </Button>
        </div>
      </div>

      <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
        <Table>
          <TableHeader className="bg-white/5">
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6">Order ID</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Customer</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Items</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Total</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Payment</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6">Status</TableHead>
              <TableHead className="font-bebas tracking-wide uppercase py-6 px-6 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.01]">
                <TableCell className="px-6 py-4 font-mono text-xs font-bold text-primary">{order.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-wide">{order.customerName}</span>
                    <span className="text-[10px] text-foreground/30 font-mono">{order.customerEmail}</span>
                  </div>
                </TableCell>
                <TableCell>
                   <span className="bg-white/5 px-2 py-1 rounded text-[10px] font-bold text-foreground/50 border border-white/5">
                     {order.items} {order.items > 1 ? "ITEMS" : "ITEM"}
                   </span>
                </TableCell>
                <TableCell className="font-bebas text-lg tracking-widest">₹{order.total.toLocaleString()}</TableCell>
                <TableCell className="text-[10px] font-bold text-foreground/30 tracking-widest uppercase">{order.paymentMethod}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="px-6 text-right">
                   <button className="p-2 rounded-lg hover:bg-white/5 text-foreground/30 hover:text-primary transition-all">
                     <ArrowRight size={18} />
                   </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
