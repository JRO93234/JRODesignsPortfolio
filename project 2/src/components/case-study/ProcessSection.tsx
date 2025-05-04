import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  imageUrl: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, index, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col md:flex-row gap-24 mb-48 last:mb-0"
    >
      <div className="flex-shrink-0">
        <div className="w-48 h-48 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
          {number}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-secondary-800 dark:text-secondary-100 mb-8">
          {title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-16">
          {description}
        </p>
        <div className="rounded-lg overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

interface ProcessSectionProps {
  steps: {
    number: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section className="py-80 px-16">
      <div className="container mx-auto">
        <SectionHeading
          title="Design Process"
          subtitle="A structured approach to create user-centered solutions."
        />
        
        <div className="max-w-3xl">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;