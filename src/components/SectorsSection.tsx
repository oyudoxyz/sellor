'use client';
import { motion } from 'framer-motion';
import {
  Store,
  Home as HomeIcon,
  Sun,
  Pill,
  ShoppingCart,
  Shield,
  Phone,
} from 'lucide-react';

export default function SectorsSection() {
  const sectors = [
    {
      name: 'Retail Sales',
      icon: Store,
      bg: 'bg-blue-50',
      color: 'text-blue-700',
      shadow: 'shadow-blue-100',
    },
    {
      name: 'Door to Door',
      icon: HomeIcon,
      bg: 'bg-green-50',
      color: 'text-green-700',
      shadow: 'shadow-green-100',
    },
    {
      name: 'Solar',
      icon: Sun,
      bg: 'bg-yellow-50',
      color: 'text-yellow-700',
      shadow: 'shadow-yellow-100',
    },
    {
      name: 'Pharma',
      icon: Pill,
      bg: 'bg-pink-50',
      color: 'text-pink-700',
      shadow: 'shadow-pink-100',
    },
    {
      name: 'FMCG',
      icon: ShoppingCart,
      bg: 'bg-purple-50',
      color: 'text-purple-700',
      shadow: 'shadow-purple-100',
    },
    {
      name: 'Insurance',
      icon: Shield,
      bg: 'bg-orange-50',
      color: 'text-orange-700',
      shadow: 'shadow-orange-100',
    },
    {
      name: 'Telecom',
      icon: Phone,
      bg: 'bg-cyan-50',
      color: 'text-cyan-700',
      shadow: 'shadow-cyan-100',
    },
  ];
  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center font-manrope">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-4 max-w-2xl">
        Repzo is trusted across every sector
      </h2>
      <p className="text-lg md:text-xl text-center text-black/70 mb-12 max-w-xl">
        From retail to renewables, Repzo empowers field teams in every industry
        to sell, serve, and succeed.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-5xl">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.name}
            className={`relative group ${sector.bg} ${sector.shadow} rounded-full px-8 py-7 flex flex-col items-center justify-center min-w-[170px] min-h-[120px] transition-all duration-200 hover:z-10 ${sector.color}`}
            style={{
              marginTop: i % 2 === 1 ? 32 : 0,
              marginBottom: i % 2 === 0 ? 32 : 0,
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.04)',
            }}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              type: 'spring',
              bounce: 0.3,
            }}
            whileHover={{
              y: -18,
              scale: 1.07,
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)',
            }}
          >
            <sector.icon
              size={36}
              className="mb-3 opacity-80"
            />
            <span className="text-lg md:text-xl font-semibold text-center whitespace-nowrap">
              {sector.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
