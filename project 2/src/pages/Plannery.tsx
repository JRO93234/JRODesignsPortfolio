import React, { useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import ProcessSection from '../components/case-study/ProcessSection';
import OutcomeSection from '../components/case-study/OutcomeSection';
import NextProject from '../components/case-study/NextProject';

const CaseStudy2: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Analyzed user behavior through heatmaps, session recordings, and conversion funnel data to identify pain points in the existing e-commerce experience.',
    },
    {
      number: '02',
      title: 'Information Architecture',
      description: 'Restructured product categorization and navigation to improve findability and streamline the shopping journey.',
    },
    {
      number: '03',
      title: 'Wireframing',
      description: 'Created low-fidelity wireframes for key user flows including product discovery, product detail pages, cart, and checkout.',
    },
    {
      number: '04',
      title: 'Visual Design',
      description: 'Developed a clean, modern visual language that emphasized product photography while maintaining brand consistency.',
    },
    {
      number: '05',
      title: 'Usability Testing',
      description: 'Conducted remote usability tests with target users to validate the new design and make necessary refinements.',
    },
  ];

  const outcomes = [
    'Simplified checkout process reduced cart abandonment by 24%',
    'Improved product filtering system increased product discoverability',
    'Enhanced mobile experience resulting in 37% higher mobile conversion rate',
    'Redesigned product detail pages with clearer information hierarchy',
  ];

  const results = [
    {
      metric: 'Conversion Rate',
      value: '+41%',
    },
    {
      metric: 'Average Order Value',
      value: '+18%',
    },
    {
      metric: 'Page Load Speed',
      value: '-35%',
    },
    {
      metric: 'Customer Satisfaction',
      value: '92%',
    },
  ];

  const testimonial = {
    quote: "The redesigned website has transformed our online business. The intuitive navigation and streamlined checkout process have significantly improved our conversion rates and customer satisfaction.",
    author: "Michael Chen",
    role: "E-Commerce Director, Fashion Forward",
  };

  return (
    <PageTransition>
      <CaseStudyHeader
        title="E-commerce Website Redesign"
        category="Web Design"
        description="Creating an intuitive shopping experience for Fashion Forward, an online fashion retailer looking to improve conversion rates and enhance the customer journey."
        imageUrl="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <ProcessSection steps={processSteps} />
      
      <section className="py-80 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Challenge</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                Fashion Forward, a growing online fashion retailer, was experiencing high bounce rates and abandoned carts on their e-commerce platform. Their existing website had a cluttered interface, confusing navigation, and a cumbersome checkout process that was frustrating customers.
              </p>
              <p className="text-secondary-600 dark:text-secondary-400">
                They needed a complete redesign focused on improving the shopping experience, streamlining the path to purchase, and creating a visually appealing platform that would showcase their products effectively.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Solution</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                I designed a clean, intuitive e-commerce experience with a focus on:
              </p>
              <ul className="list-disc list-inside space-y-8 text-secondary-600 dark:text-secondary-400">
                <li>Simplified navigation with clear category hierarchy</li>
                <li>Advanced filtering system for efficient product discovery</li>
                <li>Reimagined product detail pages highlighting key information</li>
                <li>One-page checkout process with progress indicators</li>
                <li>Responsive design optimized for all devices</li>
                <li>Visual design that puts products front and center</li>
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
              src="https://images.pexels.com/photos/6686442/pexels-photo-6686442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Homepage design" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/6686441/pexels-photo-6686441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Product listing page" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Checkout process" 
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
        title="Banking Dashboard"
        description="Simplifying complex financial data with an intuitive dashboard interface."
        imageUrl="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        link="/case-study-3"
      />
    </PageTransition>
  );
};

export default CaseStudy2;