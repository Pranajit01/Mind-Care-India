import { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
}

export function StatCard({ icon: Icon, value, suffix = '', label, description, delay = 0 }: StatCardProps) {
  return (
    <div
      className="animate-slide-in-stagger bg-card border border-card-border rounded-xl p-6 hover:shadow-lg transition-shadow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="text-3xl font-display font-bold text-foreground mb-1">
            <AnimatedCounter end={value} suffix={suffix} decimals={suffix === 'M' || suffix === '%' ? 1 : 0} />
          </div>
          <div className="text-sm font-medium text-foreground mb-1">{label}</div>
          {description && <div className="text-xs text-muted-foreground">{description}</div>}
        </div>
      </div>
    </div>
  );
}
