// Sample experience data
const experiences = [
  {
    id: 1,
    title: 'Senior .NET Developer',
    company: 'Tech Solutions Inc.',
    location: 'New York, NY',
    period: 'Jan 2022 - Present',
    description: [
      'Led the development of enterprise-level web applications using .NET Core and ASP.NET MVC',
      'Implemented microservices architecture to improve scalability and maintainability',
      'Mentored junior developers and conducted code reviews to ensure code quality',
      'Collaborated with cross-functional teams to deliver features on time and within scope'
    ],
    technologies: ['.NET Core', 'C#', 'ASP.NET MVC', 'SQL Server', 'Azure', 'Entity Framework']
  },
  {
    id: 2,
    title: '.NET Developer',
    company: 'Digital Innovations',
    location: 'Boston, MA',
    period: 'Mar 2020 - Dec 2021',
    description: [
      'Developed and maintained web applications using .NET Framework and ASP.NET',
      'Designed and implemented database schemas and stored procedures in SQL Server',
      'Integrated third-party APIs and services to enhance application functionality',
      'Participated in Agile development processes including daily stand-ups and sprint planning'
    ],
    technologies: ['.NET Framework', 'C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'jQuery']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="border-l-4 border-blue-600 pl-6 ml-3 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-2"></div>
              
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-300">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  {exp.period}
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 