import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

const About: React.FC = () => {
  const skills = [
    'User Research',
    'Wireframing',
    'Prototyping',
    'UI Design',
    'Usability Testing',
    'Design Systems',
    'Information Architecture',
    'User Flows',
  ];

  return (
    <section className="py-80 px-16 bg-secondary-50 dark:bg-secondary-900">
      <div className="container mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="I combine user-centered design principles with creative problem-solving to build products that people love to use."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary-700 dark:text-secondary-300 mb-16">
              With over 5 years of experience in E-commerce, I specialize in creating intuitive and engaging digital experiences. My approach combines in-depth user research with creative problem-solving to build products that truly resonate with their audience.
            </p>
            <p className="text-secondary-700 dark:text-secondary-300 mb-16">
              I'm passionate about inclusive design and creating accessible products that work for everyone. My process involves close collaboration with cross-functional teams to ensure that user needs are met at every stage of development.
            </p>
            <p className="text-secondary-700 dark:text-secondary-300">
              When I'm not designing, you can find me being a fun dad, experimenting with new cooking recipes, or attempting marathon runs!.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-24 md:mt-0"
          >
            <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-100 mb-24">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="bg-white dark:bg-secondary-800 px-16 py-8 rounded-full text-sm text-secondary-700 dark:text-secondary-300 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;