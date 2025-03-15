// Sample education data
const educations = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'Daffodil International University',
    location: 'Dhaka, Bangladesh',
    period: 'January 2018 - January 2022',
    description: 'Completed bachelor with a GPA 3.73, participated in various extra curricular such as programming competitions, math olympiad, programming club and activities.',
    courses: ['Data Structure', 'Algorithm', 'OOP', 'Database', 'Web Development', 'Operating System', 'Artificial Intelligence']
  }
];

// Certificates
const certificates = [
  {
    id: 1,
    title: 'IELTS Academic',
    issuer: 'British Council',
    description: 'Overall Band Score 7 (CEFR Level C1)'
  },
  {
    id: 2,
    title: 'Software Engineer Certification',
    issuer: 'HackerRank',
    description: 'Problem Solving, SQL, REST APIs'
  },
  {
    id: 3,
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    description: 'Describe cloud concepts learning path'
  }
];

// Sample volunteering data
const volunteering = [
  {
    id: 1,
    role: 'Vice President (ACM)',
    organization: 'Computer and Programming Club',
    period: 'January 2020 - December 2020',
    description: 'Managed programming and problem solving community of my university. Organized contests, training classes, and programming camps. Coordinated programmer\'s meetups and seminars, fostering a collaborative learning environment.'
  },
  {
    id: 2,
    role: 'Programming Trainer',
    organization: 'DIU ACM',
    period: 'May 2019 - December 2021',
    description: 'Volunteered as a trainer for the DIU Advanced Programming and Problem-Solving Camp, organized by DIU ACM, where I helped sophomore students from Daffodil International University improve their problem-solving skills.'
  },
  {
    id: 3,
    role: 'Problem Setter',
    organization: 'Various Programming Contests',
    period: '2019 - 2021',
    description: 'Authored 20+ programming problems for various contests, ensuring they were challenging yet solvable, with clear problem statements and test cases that covered edge cases.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20">
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
              
              {/* Certificates Section */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Certificates
                </h4>
                
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="border-l-2 border-blue-600 pl-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h5>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400">{cert.issuer}</span> - {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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