import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideWrapperProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  pageNumber: number;
  totalPages: number;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, title, subtitle, pageNumber, totalPages }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.05, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full p-8 md:p-16 flex flex-col box-border overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-sm md:text-lg mt-2 font-light tracking-wider">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-gray-600 font-mono text-xl">
          {pageNumber} <span className="text-gray-800">/</span> {totalPages}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 relative overflow-y-auto overflow-x-hidden custom-scrollbar">
        {children}
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50" />
    </motion.div>
  );
};

export default SlideWrapper;