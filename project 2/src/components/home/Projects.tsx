import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../common/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'The Tiny Closet',
      description: 'Created a responsive online marketplace where parents can buy and sell high-quality children clothing.',
      category: 'Responsive Web Design',
      imageUrl: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/the-tiny-closet',
    },
    {
      id: 2,
      title: 'Plannery',
      description: 'A family schedule-management mobile app to enable parents to manage both theirs and their childrens schedules.',
      category: 'Mobile App',
      imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/plannery',
    },
    {
      id: 3,
      title: 'Aqua Pure',
      description: 'Designed a mobile app and a responsive website focused on social good.',
      category: 'Responsive Web Design',
      imageUrl: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/aqua-pure',
    },
  ];

  return (
    <section className="py-80 px-16">
      <div className="container mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work in user experience and interface design."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;