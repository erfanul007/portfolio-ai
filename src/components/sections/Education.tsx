// Sample education data
const educations = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Boston, MA',
    period: '2018 - 2020',
    description: 'Specialized in Software Engineering with focus on distributed systems and cloud computing. Graduated with honors.',
    courses: ['Advanced Algorithms', 'Distributed Systems', 'Cloud Computing', 'Software Architecture']
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State University',
    location: 'Chicago, IL',
    period: '2014 - 2018',
    description: 'Completed undergraduate studies with a minor in Mathematics. Participated in various programming competitions.',
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Operating Systems']
  }
];

// Sample volunteering data
const volunteering = [
  {
    id: 1,
    role: 'Technical Mentor',
    organization: 'Code for Good',
    period: '2021 - Present',
    description: 'Mentoring underprivileged students in programming and web development. Organizing monthly coding workshops.'
  },
  {
    id: 2,
    role: 'Open Source Contributor',
    organization: '.NET Foundation',
    period: '2020 - Present',
    description: 'Contributing to open source .NET projects. Helping with documentation and bug fixes.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Education & Volunteering
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Education
            </h3>
            
            <div className="space-y-8">
              {educations.map((edu) => (
                <div key={edu.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-gray-700 dark:text-gray-300 mb-1">
                    <span className="font-medium">{edu.institution}</span>, {edu.location}
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {edu.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Courses:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-300 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Volunteering Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Volunteering
            </h3>
            
            <div className="space-y-8">
              {volunteering.map((vol) => (
                <div key={vol.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {vol.role}
                  </h4>
                  <div className="text-gray-700 dark:text-gray-300 mb-1">
                    <span className="font-medium">{vol.organization}</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {vol.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {vol.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 