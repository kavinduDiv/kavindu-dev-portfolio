import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Qualifications = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      period: '2019 - 2023',
      description: 'GPA: 3.8/4.0 | Focus: Software Engineering, Web Development',
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2022',
      description: 'Intensive 12-week program covering MERN stack',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta (Coursera)',
      year: '2023',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Udemy',
      year: '2022',
    },
  ];

  const experience = [
    {
      position: 'Frontend Developer',
      company: 'Tech Startup Inc.',
      period: '2023 - Present',
      description: 'Building responsive web applications using React and TypeScript',
    },
    {
      position: 'Junior Developer',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Developed client websites and maintained internal tools',
    },
  ];

  return (
    <section id="qualifications" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My educational background and professional journey
          </p>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="certifications">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/20">
                        <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription className="mt-1">
                          {edu.institution} • {edu.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/20">
                        <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{exp.position}</CardTitle>
                        <CardDescription className="mt-1">
                          {exp.company} • {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                          <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {cert.issuer}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Issued: {cert.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default Qualifications;
