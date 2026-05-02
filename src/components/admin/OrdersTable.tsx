import { Product, Order } from "../../types";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending": return <Badge className="bg-yellow-500/10 text-yellow-500 border-none capitalize">Pending</Badge>;
      case "processing": return <Badge className="bg-blue-500/10 text-blue-500 border-none capitalize">Processing</Badge>;
      case "shipped": return <Badge className="bg-purple-500/10 text-purple-500 border-none capitalize">Shipped</Badge>;
      case "delivered": return <Badge className="bg-green-500/10 text-green-500 border-none capitalize">Delivered</Badge>;
      case "cancelled": return <Badge className="bg-red-500/10 text-red-500 border-none capitalize">Cancelled</Badge>;
    }
  };

  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
      <Table>
        <TableHeader className="bg-white/5">
          <TableRow className="border-white/5 hover:bg-transparent">
            <TableHead className="font-bebas tracking-wider uppercase text-foreground/50">Order ID</TableHead>
            <TableHead className="font-bebas tracking-wider uppercase text-foreground/50">Customer</TableHead>
            <TableHead className="font-bebas tracking-wider uppercase text-foreground/50">Status</TableHead>
            <TableHead className="font-bebas tracking-wider uppercase text-foreground/50">Amount</TableHead>
            <TableHead className="font-bebas tracking-wider uppercase text-foreground/50 text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="border-white/5 hover:bg-white/[0.02] cursor-pointer">
              <TableCell className="font-mono text-xs text-primary font-bold">{order.id}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold text-sm tracking-wide">{order.customerName}</span>
                  <span className="text-[10px] text-foreground/30 font-mono">{order.customerEmail}</span>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(order.status)}</TableCell>
              <TableCell className="font-bebas text-lg tracking-widest">₹{order.total.toLocaleString()}</TableCell>
              <TableCell className="text-right text-[10px] text-foreground/30 font-mono">{order.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
