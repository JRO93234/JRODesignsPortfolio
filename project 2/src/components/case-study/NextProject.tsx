import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NextProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const NextProject: React.FC<NextProjectProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <section className="py-80 px-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-48">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-secondary-800 dark:text-secondary-100 mb-8"
          >
            Next Project
          </motion.h2>
        </div>
        
        <Link to={link}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600/90 to-accent-600/90 text-white"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-500">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative px-32 py-64 md:py-80 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-16">
                {title}
              </h3>
              <p className="text-white/80 mb-24 max-w-2xl">
                {description}
              </p>
              <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-8">View Project</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default NextProject;