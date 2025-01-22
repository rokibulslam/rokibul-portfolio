import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ResumePage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "REST APIs",
    "GraphQL",
    "TDD",
    "Agile",
  ];

  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response time by 40% through optimization",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
    },
    {
      company: "Digital Innovations Co.",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "New York, NY",
      achievements: [
        "Developed and maintained 3 major client applications",
        "Integrated payment processing system handling $500K monthly",
        "Improved application performance score by 25%",
        "Led team of 4 developers for client projects",
      ],
    },
    {
      company: "StartUp Tech",
      position: "Frontend Developer",
      period: "2018 - 2020",
      location: "Austin, TX",
      achievements: [
        "Built responsive web applications using React",
        "Implemented state management using Redux",
        "Collaborated with UX team to improve user experience",
        "Reduced bundle size by 35% through code splitting",
      ],
    },
  ];

  const education = [
    {
      school: "University of Technology",
      degree: "Master of Science in Computer Science",
      period: "2016 - 2018",
      location: "Boston, MA",
      details: "Focus on Software Engineering and Distributed Systems",
    },
    {
      school: "Tech Institute",
      degree: "Bachelor of Science in Computer Science",
      period: "2012 - 2016",
      location: "Seattle, WA",
      details: "Minor in Mathematics, Dean's List",
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Certified Scrum Master",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">John Developer</h1>
                <h2 className="text-xl text-gray-600 mb-4">
                  Senior Full Stack Developer
                </h2>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    john@example.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    San Francisco, CA
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">{job.position}</h4>
                      <h5 className="text-lg text-gray-600">{job.company}</h5>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-600">{job.period}</div>
                      <div className="text-gray-500">{job.location}</div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <h5 className="text-lg text-gray-600">{edu.school}</h5>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-600">{edu.period}</div>
                      <div className="text-gray-500">{edu.location}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{edu.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
