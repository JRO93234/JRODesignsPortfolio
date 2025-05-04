import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyHeaderProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  category,
  description,
  imageUrl,
}) => {
  return (
    <header className="pt-160 pb-64 px-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/20 dark:to-secondary-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-12 py-4 bg-primary-100 dark:bg-primary-800/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-16"
          >
            {category}
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-800 dark:text-secondary-100 mb-24"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-secondary-600 dark:text-secondary-400 mb-48 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default CaseStudyHeader;