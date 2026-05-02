import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isUp: boolean;
  };
  className?: string;
}

export default function StatCard({ label, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div className={cn("bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group", className)}>
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500">
        <Icon size={120} />
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
        {trend && (
          <span className={cn(
            "text-xs font-bold px-2 py-1 rounded-full",
            trend.isUp ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
          )}>
            {trend.value}
          </span>
        )}
      </div>
      
      <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-1">
        {label}
      </p>
      <h3 className="text-3xl font-bebas tracking-wider uppercase">
        {value}
      </h3>
    </div>
  );
}
