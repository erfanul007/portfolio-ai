// Sample skills data
const skillCategories = [
  {
    id: 1,
    name: 'Programming Languages',
    skills: [
      { name: 'C#', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 90 },
      { name: 'HTML/CSS', level: 85 }
    ]
  },
  {
    id: 2,
    name: 'Frameworks & Libraries',
    skills: [
      { name: '.NET Core', level: 95 },
      { name: 'ASP.NET MVC', level: 90 },
      { name: 'Entity Framework', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Angular', level: 70 }
    ]
  },
  {
    id: 3,
    name: 'Tools & Platforms',
    skills: [
      { name: 'Visual Studio', level: 95 },
      { name: 'SQL Server', level: 90 },
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 85 }
    ]
  },
  {
    id: 4,
    name: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 95 },
      { name: 'Communication', level: 85 },
      { name: 'Project Management', level: 80 },
      { name: 'Mentoring', level: 85 }
    ]
  }
];

// Competitive programming achievements
const competitiveProgramming = [
  {
    id: 1,
    competition: 'LeetCode',
    achievement: 'Solved 500+ problems, ranked in top 5% globally',
    year: '2022'
  },
  {
    id: 2,
    competition: 'HackerRank',
    achievement: '5-star rating in Problem Solving and C# certification',
    year: '2021'
  },
  {
    id: 3,
    competition: 'CodeForces',
    achievement: 'Candidate Master (Purple), participated in 30+ contests',
    year: '2020-2022'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Skills & Achievements
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {category.name}
                  </h4>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Competitive Programming Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Competitive Programming
            </h3>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I am passionate about algorithmic problem solving and regularly participate in coding competitions to sharpen my skills.
              </p>
              
              <div className="space-y-6">
                {competitiveProgramming.map((item) => (
                  <div key={item.id} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.competition}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.achievement}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Problem-Solving Approach
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Strong understanding of data structures and algorithms</li>
                  <li>Efficient time and space complexity analysis</li>
                  <li>Systematic debugging and testing methodology</li>
                  <li>Ability to optimize solutions for performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 