import { 
  DollarSign, 
  ShoppingBag, 
  Package, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle 
} from "lucide-react";
import StatCard from "../../components/admin/StatCard";
import OrdersTable from "../../components/admin/OrdersTable";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  Cell
} from "recharts";
import { products } from "../../data/products";
import { Order } from "../../types";

export default function Dashboard() {
  const revenueData = [
    { name: "01 May", total: 45000 },
    { name: "02 May", total: 52000 },
    { name: "03 May", total: 48000 },
    { name: "04 May", total: 61000 },
    { name: "05 May", total: 55000 },
    { name: "06 May", total: 67000 },
    { name: "07 May", total: 72000 },
  ];

  const categoryData = [
    { name: "Running", count: 45 },
    { name: "Casual", count: 52 },
    { name: "Sports", count: 30 },
    { name: "Formal", count: 25 },
    { name: "Sandals", count: 15 },
  ];

  const recentOrders: Order[] = [
    { id: "#STP-1092", customerName: "Rahul Sharma", customerEmail: "rahul@example.com", status: "delivered", total: 12499, items: 3, date: "02 May, 2026", paymentMethod: "UPI" },
    { id: "#STP-1093", customerName: "Anita Desai", customerEmail: "anita@example.com", status: "processing", total: 4999, items: 1, date: "02 May, 2026", paymentMethod: "Visa" },
    { id: "#STP-1094", customerName: "Vikram Singh", customerEmail: "vikram@example.com", status: "pending", total: 8999, items: 2, date: "02 May, 2026", paymentMethod: "Mastercard" },
    { id: "#STP-1095", customerName: "Priya Patel", customerEmail: "priya@example.com", status: "shipped", total: 3299, items: 1, date: "01 May, 2026", paymentMethod: "Paytm" },
  ];

  const lowStockProducts = products.filter(p => p.stock < 5);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Revenue" 
          value="₹4,25,890" 
          icon={DollarSign} 
          trend={{ value: "+12.5%", isUp: true }} 
        />
        <StatCard 
          label="Orders Today" 
          value="24" 
          icon={ShoppingBag} 
          trend={{ value: "+4.2%", isUp: true }} 
        />
        <StatCard 
          label="Total Products" 
          value="148" 
          icon={Package} 
        />
        <StatCard 
          label="Active Users" 
          value="3,421" 
          icon={Users} 
          trend={{ value: "-2.1%", isUp: false }} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-8">
           <div className="flex items-center justify-between mb-8">
             <div>
               <h3 className="font-bebas text-xl tracking-wider uppercase mb-1">Revenue Overview</h3>
               <p className="text-[10px] text-foreground/30 font-bold tracking-widest uppercase">Last 7 Days Earnings</p>
             </div>
             <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">
                AVG: ₹57,000 / DAY
             </div>
           </div>
           
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={revenueData}>
                 <defs>
                   <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#E8FF00" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#E8FF00" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                 <XAxis 
                   dataKey="name" 
                   stroke="#444" 
                   fontSize={10} 
                   tickLine={false} 
                   axisLine={false}
                   dy={10}
                 />
                 <YAxis 
                   stroke="#444" 
                   fontSize={10} 
                   tickLine={false} 
                   axisLine={false}
                   tickFormatter={(val) => `₹${val/1000}k`}
                 />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #262626', borderRadius: '8px' }}
                    itemStyle={{ color: '#E8FF00', fontWeight: 'bold' }}
                 />
                 <Line 
                   type="monotone" 
                   dataKey="total" 
                   stroke="#E8FF00" 
                   strokeWidth={3} 
                   dot={{ r: 4, fill: '#E8FF00', strokeWidth: 2, stroke: '#0D0D0D' }} 
                   activeDot={{ r: 6, strokeWidth: 0 }}
                 />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Category Sales */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
           <h3 className="font-bebas text-xl tracking-wider uppercase mb-8">Sales by Category</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={categoryData} layout="vertical" margin={{ left: 0 }}>
                 <XAxis type="number" hide />
                 <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    fontSize={10} 
                    stroke="#888" 
                    width={80}
                 />
                 <Tooltip 
                   cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                   contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #262626', borderRadius: '8px' }}
                 />
                 <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                   {categoryData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={index === 0 ? '#E8FF00' : '#262626'} />
                   ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Orders */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bebas text-2xl tracking-wider uppercase">Recent Orders</h3>
            <button className="text-[10px] font-bold text-primary tracking-widest hover:underline">VIEW ALL ORDERS</button>
          </div>
          <OrdersTable orders={recentOrders} />
        </div>

        {/* Low Stock Alerts */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bebas text-2xl tracking-wider uppercase">Low Stock Alerts</h3>
            <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2">
              <AlertCircle size={14} /> {lowStockProducts.length} CRITICAL
            </span>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-4">
             {lowStockProducts.map(product => (
               <div key={product.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-red-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-black/20">
                       <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm tracking-wide group-hover:text-primary transition-colors">{product.name}</h4>
                       <span className="text-[10px] text-foreground/30 font-mono italic">ID: {product.id}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-red-500 font-bebas text-xl tracking-widest leading-none">{product.stock} LEFT</span>
                     <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Restock Soon</span>
                  </div>
               </div>
             ))}
             {lowStockProducts.length === 0 && <p className="text-center text-foreground/30 py-8 italic">All products are healthy.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
