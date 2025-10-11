import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


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
    description:
      'A dynamic full-stack e-commerce website that supports multiple product categories, user authentication, shopping cart, order tracking, and secure online payments with an admin dashboard for inventory and sales management.',
    tech: ['HTML', 'PHP', 'SQL', 'Bootstrap', 'JavaScript'],
    gradient: 'from-blue-500 to-cyan-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Pizza Shop Web Site',
    description:
      'A responsive pizza ordering website allowing customers to browse menus, customize pizzas, and place online orders with integrated contact forms and promotional sections.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    gradient: 'from-purple-500 to-pink-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Service Center Management',
    description:
      'A complete web-based system for managing customer vehicles, service types, GRNs, invoices, and stock, featuring admin dashboards, analytics, and role-based access.',
    tech: ['React', 'Chart.js', 'Tailwind', 'PHP', 'SQL'],
    gradient: 'from-green-500 to-emerald-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Mobile App - Plant Shop',
    description:
      'An Android-based m-commerce app for buying and selling plants with features like Firebase authentication, product catalog, cart management, and order tracking.',
    tech: ['Android', 'Firebase', 'Java'],
    gradient: 'from-orange-500 to-red-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Mini ERP System',
    description:
      'A lightweight ERP solution for managing sales, purchases, stock, and finance, built with a React frontend and PHP backend for small-scale businesses.',
    tech: ['React', 'Tailwind', 'PHP', 'SQL'],
    gradient: 'from-indigo-500 to-purple-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Library System',
    description:
      'A Java-based library management system that handles book records, member registrations, borrowing and returning operations, and report generation.',
    tech: ['Java', 'SQL'],
    gradient: 'from-pink-500 to-rose-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Stock Management System',
    description:
      'A desktop application for tracking inventory levels, purchases, and sales transactions with real-time updates and automatic report generation.',
    tech: ['Java', 'SQL'],
    gradient: 'from-blue-500 to-cyan-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Banking System',
    description:
      'An enterprise-level Java EE application that manages customer accounts, transactions, and loans using Servlets and EJBs on GlassFish Server.',
    tech: ['Java EE', 'Servlet', 'EJB', 'GlassFish Server'],
    gradient: 'from-purple-500 to-pink-500',
    link: '#',
    github: 'https://github.com',
  },
  {
    title: 'Hospital Management System',
    description:
      'A system for managing hospital operations including patient records, doctor appointments, billing, and staff management with secure database integration.',
    tech: ['Java', 'SQL'],
    gradient: 'from-green-500 to-emerald-500',
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
                  {/* <div className="flex gap-3">
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
                  </div> */}
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
