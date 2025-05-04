import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-80 px-16 bg-primary-50 dark:bg-primary-900/20">
      <div className="container mx-auto">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
          alignment="center"
        />
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-secondary-800 rounded-lg shadow-sm p-32 md:p-48">
          <form className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-8">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-16 py-12 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-8">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-16 py-12 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                  placeholder="Your email"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-8">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-16 py-12 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                placeholder="Project inquiry"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-8">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-16 py-12 bg-secondary-50 dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-end"
            >
              <Button variant="primary" size="lg">
                Send Message
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;