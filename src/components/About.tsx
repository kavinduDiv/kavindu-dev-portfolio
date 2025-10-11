import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Palette,
      title: 'Design',
      items: ['Figma', 'UI/UX', 'Responsive', 'Animations'],
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Tools',
      items: ['Git', 'Docker', 'VS Code', 'Postman'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <motion.div
        className="max-w-7xl mx-auto"
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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack software engineer with 3+ years of experience building scalable web applications. 
              My journey started with a curiosity about how websites work, which evolved into a passion for crafting 
              elegant solutions to complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React and modern JavaScript frameworks, but I'm always eager to learn new technologies 
              and best practices. When I'm not coding, you'll find me contributing to open-source projects, writing 
              technical blog posts, or exploring the latest web development trends.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className={`bg-gradient-to-br ${skill.gradient} text-white border-none shadow-lg hover:shadow-xl transition-all`}>
                    <CardHeader>
                      <Icon className="h-8 w-8 mb-2" />
                      <CardTitle className="text-white">{skill.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="text-white/90 space-y-1 text-sm">
                        {skill.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
