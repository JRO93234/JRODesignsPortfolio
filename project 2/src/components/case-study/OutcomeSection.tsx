import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface OutcomeSectionProps {
  outcomes: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const OutcomeSection: React.FC<OutcomeSectionProps> = ({
  outcomes,
  results,
  testimonial,
}) => {
  return (
    <section className="py-80 px-16 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto">
        <SectionHeading
          title="Outcomes"
          subtitle="The impact and results of the project."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-48">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">
              Key Achievements
            </h3>
            <ul className="space-y-16">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="flex items-start"
                >
                  <span className="inline-block w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-16"></span>
                  <span className="text-secondary-700 dark:text-secondary-300">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-48"
            >
              <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">
                Results
              </h3>
              <div className="grid grid-cols-2 gap-16">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="bg-white dark:bg-secondary-800 p-24 rounded-lg shadow-sm"
                  >
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-8">
                      {result.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-secondary-400">
                      {result.metric}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-secondary-800 p-32 rounded-lg shadow-sm border-l-4 border-primary-600 dark:border-primary-500"
              >
                <p className="text-lg italic text-secondary-700 dark:text-secondary-300 mb-16">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-secondary-800 dark:text-secondary-100">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;