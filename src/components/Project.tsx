import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
      github: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with drag-and-drop functionality, real-time updates, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#',
      github: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather forecast application with beautiful data visualizations and location-based weather alerts.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      gradient: 'from-green-500 to-emerald-500',
      link: '#',
      github: 'https://github.com',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media performance across multiple platforms with detailed insights.',
      tech: ['React', 'D3.js', 'Express', 'MongoDB'],
      gradient: 'from-orange-500 to-red-500',
      link: '#',
      github: 'https://github.com',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI for smart replies and conversation summarization.',
      tech: ['React', 'Socket.io', 'OpenAI', 'Node.js'],
      gradient: 'from-indigo-500 to-purple-500',
      link: '#',
      github: 'https://github.com',
    },
    {
      title: 'Portfolio Builder',
      description: 'No-code portfolio builder with customizable templates and instant deployment capabilities.',
      tech: ['Next.js', 'Tailwind', 'Vercel', 'CMS'],
      gradient: 'from-pink-500 to-rose-500',
      link: '#',
      github: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <div className={`h-2 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
