import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Instagram, 
  Megaphone,
  Coffee,
  Heart,
  Stethoscope,
  Store,
  Utensils,
  Sparkles
} from 'lucide-react';

const marketingProjects = [
  {
    id: 1,
    title: 'Café & Coffee Shops',
    icon: Coffee,
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    description: 'Crafted cozy, inviting social media presence for local coffee shops, driving foot traffic and building loyal communities.',
    services: ['Instagram Strategy', 'Content Calendar', 'Story Campaigns', 'Influencer Collabs'],
    metrics: [
      { label: 'Engagement Increase', value: '140%' },
      { label: 'Follower Growth', value: '2.5K+' },
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 2,
    title: 'Restaurants & Eateries',
    icon: Utensils,
    category: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    description: 'Developed mouth-watering visual content and strategic campaigns that turned casual visitors into regular diners.',
    services: ['Food Photography', 'Menu Design', 'Review Management', 'Local SEO'],
    metrics: [
      { label: 'Table Reservations', value: '+25%' },
      { label: 'Online Orders', value: '+35%' },
    ],
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Psychological Clinics',
    icon: Heart,
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop',
    description: 'Created sensitive, trust-building content that destigmatizes mental health and connects practitioners with those seeking help.',
    services: ['Educational Content', 'Awareness Campaigns', 'Community Building', 'Brand Trust'],
    metrics: [
      { label: 'Appointment Bookings', value: '+50%' },
      { label: 'Community Reach', value: '15K+' },
    ],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 4,
    title: 'Dental Practices',
    icon: Stethoscope,
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    description: 'Transformed clinical dental services into approachable, family-friendly brands that patients actually look forward to visiting.',
    services: ['Patient Education', 'Before/After Content', 'Google Business', 'Review Strategy'],
    metrics: [
      { label: 'New Patients', value: '+30%' },
      { label: 'Google Rating', value: '4.5★' },
    ],
    color: 'from-cyan-500 to-teal-600',
  },
  {
    id: 5,
    title: 'Local Businesses',
    icon: Store,
    category: 'Retail & Services',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    description: 'Empowered small local businesses to compete with bigger brands through authentic storytelling and community engagement.',
    services: ['Brand Story', 'Local Campaigns', 'Customer Loyalty', 'Event Promotion'],
    metrics: [
      { label: 'Brand Awareness', value: '+180%' },
      { label: 'Customer Retention', value: '+75%' },
    ],
    color: 'from-emerald-500 to-green-600',
  },
  {
    id: 6,
    title: 'Service Brands',
    icon: Sparkles,
    category: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    description: 'Positioned service-based businesses as industry authorities through thought leadership content and strategic visibility.',
    services: ['LinkedIn Growth', 'Case Studies', 'Testimonials', 'Authority Building'],
    metrics: [
      { label: 'Lead Generation', value: '+80%' },
      { label: 'Brans Reach', value: '+25%' },
    ],
    color: 'from-blue-500 to-indigo-600',
  },
];

const serviceHighlights = [
  { icon: Instagram, label: 'Social Media Marketing', description: 'Strategic content that builds engaged communities' },
  { icon: Target, label: 'Content Strategy', description: 'Data-driven planning for maximum impact' },
  { icon: Megaphone, label: 'Brand Visibility', description: 'Cutting through noise to get noticed' },
  { icon: Users, label: 'Customer Engagement', description: 'Building relationships that convert' },
];

function ProjectCard({ project, index }: { project: typeof marketingProjects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden card-interactive h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
              {project.category}
            </span>
          </div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
            className="absolute top-4 right-4"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-background/90 backdrop-blur-sm rounded-lg p-3 text-center"
              >
                <div className={`text-heading-md font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-heading-lg mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-body-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Services Tags */}
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 text-xs bg-muted rounded-full text-muted-foreground"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function DigitalMarketingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="marketing" className="section-padding bg-gradient-mesh relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isHeaderInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary mb-6 glow-accent"
          >
            <TrendingUp className="w-8 h-8 text-accent-foreground" />
          </motion.div>

          <span className="block text-accent text-body-sm font-semibold uppercase tracking-wider mb-2">
            Digital Marketing
          </span>
          <h2 className="text-display-sm md:text-display-md font-display mb-4">
            Real Businesses, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            I've helped diverse businesses—from cozy cafés to professional clinics—build their 
            digital presence and connect with customers who matter.
          </p>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-5 text-center card-interactive"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-3">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-body-sm font-semibold mb-1">{service.label}</h4>
              <p className="text-xs text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {marketingProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '11+', label: 'Businesses Served' },
              { value: '25K+', label: 'Followers Grown' },
              { value: '50-100%', label: 'Avg. Engagement Boost' },
              { value: '92%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-display-sm md:text-display-md text-gradient font-display">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-body-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
