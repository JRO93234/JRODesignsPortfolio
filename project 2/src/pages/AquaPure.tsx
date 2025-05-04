import React, { useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import ProcessSection from '../components/case-study/ProcessSection';
import OutcomeSection from '../components/case-study/OutcomeSection';
import NextProject from '../components/case-study/NextProject';

const CaseStudy3: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Research',
      description: 'Conducted interviews with banking customers to understand their needs, pain points, and goals when managing their finances online.',
    },
    {
      number: '02',
      title: 'Data Analysis',
      description: 'Analyzed customer behavior data to identify the most frequently used features and common friction points within the existing dashboard.',
    },
    {
      number: '03',
      title: 'Information Architecture',
      description: 'Restructured the dashboard information hierarchy to prioritize the most important financial data and actions.',
    },
    {
      number: '04',
      title: 'Wireframing',
      description: 'Created low-fidelity wireframes exploring different layouts and data visualization approaches.',
    },
    {
      number: '05',
      title: 'Visual Design',
      description: 'Developed a clean, professional visual design system with a focus on clarity, readability, and accessibility.',
    },
  ];

  const outcomes = [
    'Simplified complex financial data into easy-to-understand visualizations',
    'Redesigned transaction history with improved filtering and search',
    'Created personalized insights based on spending patterns',
    'Implemented an enhanced notification system for account activity',
  ];

  const results = [
    {
      metric: 'User Satisfaction',
      value: '+62%',
    },
    {
      metric: 'Task Completion',
      value: '+43%',
    },
    {
      metric: 'Support Tickets',
      value: '-35%',
    },
    {
      metric: 'Mobile Usage',
      value: '+51%',
    },
  ];

  const testimonial = {
    quote: "Our customers love the new dashboard. It's transformed the way they interact with their financial data, making it more accessible and actionable than ever before.",
    author: "David Williams",
    role: "Head of Digital Banking, SecureBank",
  };

  return (
    <PageTransition>
      <CaseStudyHeader
        title="Banking Dashboard"
        category="Dashboard UI"
        description="Simplifying complex financial data with an intuitive dashboard interface for SecureBank's digital banking platform."
        imageUrl="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <ProcessSection steps={processSteps} />
      
      <section className="py-80 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Challenge</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                SecureBank's existing dashboard was data-heavy and difficult to navigate, particularly for non-technical users. Customers struggled to find important information, track their spending, and complete common banking tasks efficiently.
              </p>
              <p className="text-secondary-600 dark:text-secondary-400">
                The bank needed a complete dashboard overhaul that would make financial data more accessible, actionable, and valuable to their diverse customer base, from young professionals to retirees.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Solution</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                I designed a comprehensive dashboard solution focused on:
              </p>
              <ul className="list-disc list-inside space-y-8 text-secondary-600 dark:text-secondary-400">
                <li>Clear financial overview with customizable widgets</li>
                <li>Interactive spending insights with actionable recommendations</li>
                <li>Simplified transaction management with enhanced search and filtering</li>
                <li>Personalized goal tracking and financial planning tools</li>
                <li>Intuitive navigation system that adapts to user behavior</li>
                <li>Accessible design that meets WCAG 2.1 AA standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-80 px-16 bg-white dark:bg-secondary-800">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-32 text-center">Design Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            <img 
              src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Dashboard overview" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/8370748/pexels-photo-8370748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Transaction history" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Financial insights" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      
      <OutcomeSection 
        outcomes={outcomes} 
        results={results}
        testimonial={testimonial}
      />
      
      <NextProject
        title="Fitness App Redesign"
        description="Redesigning a fitness tracking app to improve user engagement and retention."
        imageUrl="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        link="/case-study-1"
      />
    </PageTransition>
  );
};

export default CaseStudy3;