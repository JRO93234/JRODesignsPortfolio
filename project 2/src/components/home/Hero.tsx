import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-160 pb-80 px-16 md:pt-200 md:pb-104 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/10 dark:to-transparent"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-8 bg-white dark:bg-secondary-800 rounded-full px-16 py-8 mb-32 shadow-sm"
          >
            <MousePointer2 size={16} className="text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
              Available for freelance projects
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-800 dark:text-secondary-100 mb-24 leading-tight"
          >
            Crafting <span className="text-primary-600 dark:text-primary-400">intuitive</span> digital experiences
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-secondary-600 dark:text-secondary-400 mb-32 max-w-3xl mx-auto"
          >
            Hi, I'm Jerome Odigie. I design user-centered digital experiences that solve real problems and delight users.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-16 justify-center"
          >
            <Button href="/the-tiny-closet" variant="primary" size="lg">
              View My Work <ArrowRight size={16} className="ml-8" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 dark:bg-primary-400/5 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;