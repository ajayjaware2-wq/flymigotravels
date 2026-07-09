'use client';

import {
  Map,
  Plane,
  Heart,
  Palmtree,
  BedDouble,
  Car,
  Bus,
  Briefcase,
  Sparkles,
  Wallet,
  Crown,
  Compass,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  PenTool,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Map,
  Plane,
  Heart,
  Palmtree,
  BedDouble,
  Car,
  Bus,
  Briefcase,
  Sparkles,
  Wallet,
  Crown,
  Compass,
  MessageCircle,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  PenTool,
  CheckCircle,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} />;
}
