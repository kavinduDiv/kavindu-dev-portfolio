import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working well in team environments',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with a love for creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm currently pursuing my Bachelor's in Software Engineer, with a focus on full-stack development. 
              My journey in tech started with curiosity and has evolved into a passion for creating 
              impactful digital experiences.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in building modern web applications using React, TypeScript, and PHP. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or designing beautiful user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">2+ Years Experience</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">6+ Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
