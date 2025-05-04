import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface UserResearchProps {
  insights: {
    title: string;
    description: string;
  }[];
  methodology: string[];
  participants: {
    count: number;
    demographics: string;
  };
}

const UserResearch: React.FC<UserResearchProps> = ({
  insights,
  methodology,
  participants,
}) => {
  return (
    <section className="py-80 px-16 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto">
        <SectionHeading
          title="User Research"
          subtitle="Understanding user needs and behaviors through comprehensive research."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-48">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">
              Key Insights
            </h3>
            <div className="space-y-24">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="bg-white dark:bg-secondary-800 p-24 rounded-lg shadow-sm"
                >
                  <h4 className="font-semibold text-secondary-800 dark:text-secondary-100 mb-8">
                    {insight.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {insight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">
              Research Methodology
            </h3>
            <div className="bg-white dark:bg-secondary-800 p-24 rounded-lg shadow-sm mb-24">
              <ul className="space-y-8">
                {methodology.map((method, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center text-secondary-600 dark:text-secondary-400"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-12"></span>
                    {method}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">
              Research Participants
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-secondary-800 p-24 rounded-lg shadow-sm"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-8">
                {participants.count}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">
                {participants.demographics}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserResearch;