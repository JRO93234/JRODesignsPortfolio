import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link to={link} className="block h-full">
        <div className="overflow-hidden h-64 sm:h-72">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-24">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-medium text-secondary-500 dark:text-secondary-400">
              {category}
            </span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-primary-600 dark:text-primary-400"
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>
          <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-8">
            {title}
          </h3>
          <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;