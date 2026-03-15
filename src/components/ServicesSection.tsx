import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Video, Palette, Code, ArrowRight, Check, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Cinematic edits that captivate your audience and tell your story with impact.',
    features: [
      'YouTube content creation',
      'Social media reels & shorts',
      'Corporate videos',
      'Motion graphics & VFX',
      'Color grading & sound design',
    ],
    gradient: 'from-primary to-secondary',
    glowColor: 'glow-primary',
  },

  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visual identities that make your brand memorable and your message clear.',
    features: [
      'Brand identity design',
      'Logo & visual systems',
      'Social media graphics',
      'Print & marketing materials',
      'UI/UX design',
    ],
    gradient: 'from-secondary to-accent',
    glowColor: 'glow-secondary',
  },

  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites that convert visitors into loyal customers.',
    features: [
      'Custom web applications',
      'React & Next.js development',
      'Landing pages & portfolios',
      'E-commerce solutions',
      'Performance optimization',
    ],
    gradient: 'from-accent to-primary',
    glowColor: 'glow-accent',
  },

  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that grow brands, increase visibility and drive measurable business growth.',
    features: [
      'SEO & Google ranking',
      'Social media marketing',
      'Lead generation campaigns',
      'Content & influencer marketing',
      'Analytics & performance tracking',
    ],
    gradient: 'from-emerald-500 to-green-600',
    glowColor: 'glow-accent',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-8 h-full card-interactive border-gradient">

        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 ${service.glowColor}`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <service.icon className="w-7 h-7 text-primary-foreground" />
        </motion.div>

        {/* Content */}
        <h3 className="text-heading-xl mb-3">{service.title}</h3>

        <p className="text-muted-foreground text-body-md mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-3 text-body-sm"
            >
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>

              <span className="text-muted-foreground">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Button variant="ghost" className="group/btn w-full justify-between" asChild>
          <a href="#contact">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>

      </div>
    </motion.div>
  );
}

export function ServicesSection() {

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="section-padding relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

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
            Services
          </span>

          <h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>

          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            From stunning visuals to seamless web experiences, I provide end-to-end
            creative and marketing solutions that help brands grow online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-body-lg mb-6">
            Have a unique project in mind? Let's discuss how I can help.
          </p>

          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

        </motion.div>

      </div>
    </section>
  );
}