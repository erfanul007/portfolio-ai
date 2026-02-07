// Sample experience data
const experiences = [
  {
    id: 1,
    title: 'Senior Backend Developer',
    company: 'InfinitiBit',
    location: 'Dhaka, Bangladesh',
    period: 'November 2025 - Present',
    description: [
      'Leading the design of a tax automation system using GraphBit AI agent framework, ensuring security and efficiency for sensitive data analysis.',
      'Led backend development for a Python multi-agent chat system with GraphRAG and Local LLM, optimizing for unstructured data and privacy.',
      'Built a pipeline converting 3TB of documents to metadata-rich text, boosting vectorization and model training efficiency by 10x.'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'CrewAI', 'GraphBit', 'Local LLM', 'Docker']
  },
  {
    id: 2,
    title: 'Backend Developer (.NET)',
    company: 'InfinitiBit',
    location: 'Dhaka, Bangladesh',
    period: 'November 2024 - November 2025',
    description: [
      'Developed a .NET 8 bid management platform with RAG-based AI agents, achieving a 40% efficiency boost in document analysis.',
      'Architected services for long-running AI analysis, versioning, and e-signatures, significantly improving process workflows.',
      'Integrated Snowflake, Adobe e-Sign, SharePoint, and AWS services (S3, SES) to automate complex enterprise data workflows.',
      'Designed an event-driven platform processing 100M+ events/day using Go, Kafka, TimescaleDB, and Kubernetes.'
    ],
    technologies: ['.NET 8', 'EF Core', 'SQL Server', 'CQRS', 'RabbitMQ', 'RAG', 'AWS']
  },
  {
    id: 3,
    title: 'Senior Software Engineer',
    company: 'Enosis Solutions',
    location: 'Dhaka, Bangladesh',
    period: 'April 2024 - July 2024',
    description: [
      'Migrated a hiring platform from Node.js to .NET 8, establishing a modular architecture for enhanced scalability.',
      'Managed development of substantial features for a leading Angular-based project management software.'
    ],
    technologies: ['.NET 8', 'C#', 'Angular', 'Modular Monolith', 'Node.js']
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'Enosis Solutions',
    location: 'Dhaka, Bangladesh',
    period: 'January 2022 - March 2024',
    description: [
      'Migrated a US-based dental practice management system, upgrading applications from VB.NET 3.5 to C# .NET 6 to integrate cloud-native Azure services.',
      'Built a microservice with Azure Functions for sending transactional emails on behalf of client emails with customized templates.',
      'Developed SSO with Azure Active Directory (Microsoft Entra) for multi-tenant SaaS platform with 100k+ users.',
      'Identified security vulnerabilities and implemented a backend RBAC authorization layer in API endpoints to prevent data breaches.'
    ],
    technologies: ['.NET 6', 'C#', 'Azure Functions', 'Microsoft Entra', 'Microservices', 'VB.NET']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">

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