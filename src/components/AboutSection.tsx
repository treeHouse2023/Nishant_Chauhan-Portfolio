import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Sparkles, Quote, MapPin, GraduationCap, Heart } from 'lucide-react'; 

const personalValues = [

];

export function AboutSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-body-sm font-semibold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">
            The Person Behind the <span className="text-gradient">Pixels</span>
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            More than a freelancer, I'm a storyteller, problem solver, and a optimist Head
            who believes great work comes from genuine passion.
          </p>
        </motion.div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Image Side */}
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden glow-soft"
              >
                <img
                  src="/Profile.jpg"
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isStoryInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-body-sm font-medium">Available Worldwide</p>
                      <p className="text-xs text-muted-foreground">Remote-first creative</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl -z-10"
              />
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Quote */}
            <div className="glass rounded-2xl p-6 md:p-8 border-gradient">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
            <p className="text-heading-lg md:text-heading-xl font-display italic text-foreground/90 leading-relaxed">
  "I believe every pixel should tell a story, every edit should evoke emotion, 
  every website should feel like coming home, and every idea should connect 
  with people through meaningful marketing and impactful outreach."
</p>
            </div>

      {/* Story Paragraphs */}
<div className="space-y-5 text-muted-foreground text-body-md leading-relaxed">
  <p>
    My journey started with a simple question: <span className="text-foreground font-medium">"How do they make those 
    amazing videos?"</span> That curiosity led me down a rabbit hole of creativity that transformed 
    from hobby to passion to profession.
  </p>
  <p>
    Today, I'm a <span className="text-primary font-medium">Computer Science and MBA student with a focus on Marketing</span> by day and a 
    <span className="text-secondary font-medium"> creative professional</span> by... well, also day, 
    night, and weekends. I've discovered that the best work happens when technical skills 
    meet genuine enthusiasm.
  </p>
  <p>
    Along the way, I've gained valuable real-world exposure working with the 
    <span className="text-accent font-medium"> Government of India initiatives</span>, contributing to the 
    <span className="text-accent font-medium"> Viksit Bharat Sankalp</span> outreach program, and receiving 
    professional training under <span className="text-accent font-medium">Hindustan Aeronautics Limited (HAL)</span>. 
    These experiences strengthened my ability to combine technology, creativity, and communication in impactful ways.
  </p>
  <p>
    What sets me apart? I don't just complete projects I <span className="text-accent font-medium">invest in them</span>. 
    Every client becomes a collaborator, every brief becomes an opportunity to exceed expectations, 
    and every deadline is a promise I keep.
  </p>
  <br/>
</div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {personalValues.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 glass rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-2">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-body-sm font-semibold mb-1">{value.label}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Creating', value: '3+', icon: '🎨' },
            { label: 'Happy Clients', value: '25+', icon: '😊' },
            { label: 'Projects Done', value: '50+', icon: '🚀' },
            { label: 'Cups of Coffee', value: '∞', icon: '☕' },
          ].map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-5 text-center card-interactive"
            >
              <span className="text-3xl mb-2 block">{fact.icon}</span>
              <div className="text-display-sm font-display text-gradient">{fact.value}</div>
              <p className="text-body-sm text-muted-foreground">{fact.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
