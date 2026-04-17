"use client";

import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle,
  Edit3,
  Tags,
  Plus,
  Settings,
  ChevronRight,
  TrendingUp,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ICON_MAP = {
  FileText,
  CheckCircle,
  Edit3,
  Tags,
  Plus,
  Settings,
  LayoutDashboard,
};

export type IconType = keyof typeof ICON_MAP;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-white rounded-[2rem] border border-gray-100 p-5 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all w-full max-w-full overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StatsGrid({
  stats,
}: {
  stats: {
    label: string;
    value: number;
    icon: IconType;
    color: string;
    trend?: string;
  }[];
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((s, idx) => {
        const Icon = ICON_MAP[s.icon] || FileText;
        return (
          <motion.div
            key={s.label}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity ${s.color}`}
            />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-4 rounded-2xl ${s.color.replace("bg-", "bg-opacity-10 ")} text-current`}
                >
                  <Icon
                    className={`w-6 h-6 ${s.color.replace("bg-", "text-")}`}
                  />
                </div>
                {s.trend && (
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-100/50">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {s.trend}
                  </div>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-400 mb-1 tracking-tight">
                  {s.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-extrabold text-gray-900">
                    {s.value}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function QuickAction({
  href,
  icon,
  label,
  description,
  color,
}: {
  href: string;
  icon: IconType;
  label: string;
  description: string;
  color: string;
}) {
  const Icon = ICON_MAP[icon] || Plus;
  return (
    <Link href={href} className="group block">
      <div className="flex items-start gap-4 p-5 rounded-3xl hover:bg-gray-50/80 transition-all border border-transparent hover:border-gray-100 active:scale-98">
        <div
          className={`p-3.5 rounded-2xl ${color} bg-opacity-10 text-current shrink-0 group-hover:scale-110 transition-transform`}
        >
          <Icon className={`w-6 h-6 ${color.replace("bg-", "text-")}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
            {label}
          </h4>
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
            {description}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
