import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Redux', 'Framer Motion'],
    },
    {
      title: 'Backend',
      gradient: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Tools & DevOps',
      gradient: 'from-orange-500 to-red-500',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Figma', 'VS Code', 'Postman'],
    },
    {
      title: 'Soft Skills',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Agile', 'Leadership', 'Time Management'],
    },
  ];

  const qualifications = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2021 - 2025',
      description: 'Focus on Software Engineering and Web Development',
    },
    {
      title: 'Full-Stack Developer Certificate',
      institution: 'Online Platform',
      period: '2023',
      description: 'Comprehensive course on modern web development',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Qualifications */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Education & <span className="bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-[hsl(var(--gradient-end))]/5 border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold">{qual.title}</h4>
                      <Badge variant="outline" className="border-primary text-primary">
                        {qual.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-semibold mb-2">{qual.institution}</p>
                    <p className="text-muted-foreground">{qual.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
