import React, { useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import ProcessSection from '../components/case-study/ProcessSection';
import OutcomeSection from '../components/case-study/OutcomeSection';
import NextProject from '../components/case-study/NextProject';

const CaseStudy1: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Research',
      description: 'Conducted user interviews and competitive analysis to understand current market trends and user pain points in fitness tracking.',
    },
    {
      number: '02',
      title: 'Define',
      description: 'Created user personas and journey maps to identify opportunities for improving the user experience.',
    },
    {
      number: '03',
      title: 'Ideate',
      description: 'Generated various design concepts focusing on simplifying workout tracking and enhancing social features.',
    },
    {
      number: '04',
      title: 'Prototype',
      description: 'Developed interactive prototypes for key user flows and screens using Figma.',
    },
    {
      number: '05',
      title: 'Test',
      description: 'Conducted usability testing with target users to validate design decisions and identify areas for improvement.',
    },
  ];

  const outcomes = [
    'Simplified workout tracking flow, reducing steps by 40%',
    'Redesigned progress visualization to increase user motivation',
    'Improved social sharing features to boost community engagement',
    'Enhanced notification system focused on user achievements',
  ];

  const results = [
    {
      metric: 'User Engagement',
      value: '+32%',
    },
    {
      metric: 'User Retention',
      value: '+28%',
    },
    {
      metric: 'Workout Completion',
      value: '+45%',
    },
    {
      metric: 'App Store Rating',
      value: '4.8',
    },
  ];

  const testimonial = {
    quote: "The redesigned app transformed our user experience. Engagement metrics are up across the board, and we're receiving overwhelmingly positive feedback from our community.",
    author: "Sarah Johnson",
    role: "Product Manager, FitTrack",
  };

  return (
    <PageTransition>
      <CaseStudyHeader
        title="Fitness App Redesign"
        category="Mobile App"
        description="A comprehensive redesign of a fitness tracking app to improve user engagement, simplify workout tracking, and enhance social features."
        imageUrl="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <ProcessSection steps={processSteps} />
      
      <section className="py-80 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Challenge</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                FitTrack approached me to redesign their fitness tracking app which was suffering from low engagement and retention rates. Users found the workout tracking process cumbersome and were not motivated to continue using the app after the initial onboarding.
              </p>
              <p className="text-secondary-600 dark:text-secondary-400">
                The key challenges included simplifying the workout logging process, creating more engaging progress visualizations, and enhancing the social aspects of the app to build a stronger community.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-secondary-800 dark:text-secondary-100 mb-24">The Solution</h2>
              <p className="text-secondary-600 dark:text-secondary-400 mb-16">
                After extensive research and testing, I redesigned the core user flows focusing on simplicity and instant gratification. The new design featured:
              </p>
              <ul className="list-disc list-inside space-y-8 text-secondary-600 dark:text-secondary-400">
                <li>One-tap workout logging with smart suggestions</li>
                <li>Animated progress visualizations celebrating milestones</li>
                <li>Integrated social features throughout the user journey</li>
                <li>Personalized notification system based on user behavior</li>
                <li>Gamified elements to increase motivation</li>
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
              src="https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="App Screenshot 1" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="App Screenshot 2" 
              className="rounded-lg shadow-md h-[400px] object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/5387256/pexels-photo-5387256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="App Screenshot 3" 
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
        title="E-commerce Website"
        description="Creating an intuitive shopping experience for an online fashion retailer."
        imageUrl="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        link="/case-study-2"
      />
    </PageTransition>
  );
};

export default CaseStudy1;