import { useState } from 'react';

// Skills data
const skillCategories = [
  {
    id: 1,
    name: 'Programming Languages',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    skills: [
      { name: 'C#', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'Go', level: 70 },
      { name: 'Java', level: 65 }
    ]
  },
  {
    id: 2,
    name: 'Backend',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
    skills: [
      { name: '.NET', level: 95 },
      { name: 'EF Core', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'CQRS', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'RabbitMQ', level: 75 }
    ]
  },
  {
    id: 3,
    name: 'AI & LLM',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
      </svg>
    ),
    skills: [
      { name: 'Agent Building', level: 90 },
      { name: 'GraphBit', level: 85 },
      { name: 'LLM', level: 85 },
      { name: 'CrewAI', level: 80 },
      { name: 'Vector DB', level: 80 },
      { name: 'MCP', level: 70 }
    ]
  },
  {
    id: 4,
    name: 'Database & Cloud',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    ),
    skills: [
      { name: 'Azure', level: 85 },
      { name: 'AWS', level: 85 },
      { name: 'SQL Server', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Snowflake', level: 70 }
    ]
  },
  {
    id: 5,
    name: 'Frontend & Tools',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'TailwindCSS', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Linux', level: 75 },
      { name: 'Angular', level: 70 }
    ]
  }
];

// Professional achievements
const professionalAchievements = [
  {
    id: 1,
    title: 'Employee of the Month',
    organization: 'InfinitiBit',
    description: 'Nominated multiple times and awarded in July 2025 for extraordinary contributions.'
  }
];

// Competitive programming achievements
const competitiveProgramming = [
  {
    id: 1,
    competition: 'DIU Intra-University Programming Contest 2021',
    achievement: 'Champion'
  },
  {
    id: 2,
    competition: 'Codeforces',
    achievement: 'Expert (Profile: erfanul007)'
  },
  {
    id: 3,
    competition: 'ICPC Dhaka Regional 2020',
    achievement: 'Participant (Team: DIU_Tr0jAnZ)'
  },
  {
    id: 4,
    competition: 'DIU Take-off Programming Contest, Summer 2018',
    achievement: '9th Place'
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  // Get the active category data
  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section - Innovative Tab Design */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h3>

            {/* Category Tabs */}
            <div className="flex flex-wrap mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center p-3 mx-1 rounded-md text-sm font-medium transition-colors ${activeCategory === category.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  aria-label={category.name}
                  title={category.name}
                >
                  <span>{category.icon}</span>
                </button>
              ))}
            </div>

            {/* Skills Visualization - Circular Progress */}
            {activeCategoryData && (
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {activeCategoryData.name}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {activeCategoryData.skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative w-20 h-20 mb-2">
                        {/* Background Circle */}
                        <svg className="w-20 h-20" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                            className="dark:stroke-gray-600"
                          />
                          {/* Foreground Circle */}
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeDasharray={`${skill.level}, 100`}
                            className="dark:stroke-blue-400"
                          />
                        </svg>
                        {/* Percentage in the middle */}
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </div>
                      </div>
                      <span className="text-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Achievements Section */}
          <div>
            {/* Professional Achievements */}
            <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Achievements
            </h4>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 gap-4">
                {professionalAchievements.map((item) => (
                  <div key={item.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                      {item.title} - {item.organization}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Programming */}
            <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Competitive Programming
            </h4>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Passionate about algorithmic problem solving with 2500+ problems solved across various online platforms. Represented my university in multiple national programming contests, including ICPC Dhaka Regionals.
              </p>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {competitiveProgramming.map((item) => (
                  <div key={item.id} className={`bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 ${item.id === 1 ? 'border-yellow-500' : 'border-blue-600'}`}>
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white">
                      {item.competition}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {item.achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 