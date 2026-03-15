import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const experiences = [

{
id:1,
role:"Field Marketing Intern",
company:"Garuda Aerospace Pvt. Ltd.",
location:"Prayagraj & Bhatinda",
duration:"Nov 2023 - Jan 2024",
type:"Internship",
logo:"/garuda.png",
color:"from-primary to-secondary",

description:
"Worked on drone awareness campaigns under the Bharat Viksit Sankalp program promoting agri-tech solutions.",

achievements:[
"Demonstrated drones to farmers for pesticide and fertilizer spraying",
"Conducted outreach programs across rural regions",
"Helped promote modern drone-based farming practices"
]
},

{
id:2,
role:"AI & Machine Learning Trainee",
company:"Intel Unnati Industrial Training",
location:"Remote",
duration:"May 2024 - Jul 2024",
type:"Industrial Training",
logo:"/intel.png",
color:"from-secondary to-accent",

description:
"Completed industrial training focused on Artificial Intelligence, Machine Learning and Generative AI.",

achievements:[
"Built chatbot using HuggingFace and LLaMA models",
"Worked on LLM inference and AI model workflows",
"Gained hands-on experience in real world AI systems"
]
},

{
id:3,
role:"Social Media Manager",
company:"GDG On Campus DAV University",
location:"Jalandhar",
duration:"Aug 2024 - Jul 2025",
type:"Leadership",
logo:"/gdg.png",
color:"from-accent to-primary",

description:
"Managed the social media presence and digital engagement for the Google Developer Group student community.",

achievements:[
"Promoted tech events like DevFest and workshops",
"Created engaging developer focused content",
"Helped increase community participation"
]
},

{
id:4,
role:"Internshala Student Partner (ISP)",
company:"Internshala",
location:"Remote · DAV University",
duration:"Apr 2025 - May 2025",
type:"Internship",
logo:"/internshala.png",
color:"from-primary to-accent",

description:
"Represented Internshala at my university promoting internships and online training programs.",

achievements:[
"Executed online and offline student marketing campaigns",
"Drove verified signups and training enrollments",
"Promoted internship awareness among students"
]
},

{
id:5,
role:"Founder & CEO",
company:"NextStep – Education and Career",
location:"Remote · Jalandhar",
duration:"Jul 2025 - Present",
type:"Founder",
logo:"/nextstep.png",
color:"from-primary to-secondary",

description:
"Founded NextStep, a platform helping students discover internships, certifications and career opportunities.",

achievements:[
"Built a growing student community across digital platforms",
"Curate verified internships and job opportunities",
"Provide career guidance and employability resources",
"Help students transition from learning to earning"
]
},

{
id:6,
role:"Digital Marketing & Video Editing",
company:"Freelancer.com",
location:"Remote",
duration:"Feb 2024 - Feb 2025",
type:"Freelance",
logo:"/freelancer.png",
color:"from-secondary to-primary",

description:
"Provided digital marketing and content services for small businesses and startups.",

achievements:[
"Created marketing strategies for multiple businesses",
"Managed social media and advertising campaigns",
"Analyzed marketing data to improve ROI"
]
},

{
id:7,
role:"Web Developer Intern",
company:"YHills",
location:"Remote",
duration:"Jun 2024 - Aug 2024",
type:"Internship",
logo:"/yhills.png",
color:"from-primary to-accent",

description:
"Worked on frontend development projects using modern web technologies.",

achievements:[
"Built responsive applications using HTML CSS JavaScript and React",
"Optimized UI performance and cross browser compatibility",
"Collaborated with development teams on project delivery"
]
},

{
id:8,
role:"Freelance Video Editor",
company:"TheBATeam (Batch-Man)",
location:"On-site",
duration:"Jul 2023 - Mar 2026",
type:"Freelance",
logo:"/batteam.png",
color:"from-accent to-secondary",

description:
"Created technical tutorial videos and educational content for software learning.",

achievements:[
"Produced high quality tutorial videos",
"Optimized content for YouTube engagement",
"Improved clarity and storytelling in technical videos"
]
},

{
id:9,
role:"Digital Media Executive (Web, Video & Graphics)",
company:"A-sonne",
location:"Hybrid · Jalandhar",
duration:"Nov 2024 - Mar 2026",
type:"Freelance",
logo:"/asonne.png",
color:"from-secondary to-accent",

description:
"Managed company digital presence including website, promotional videos and brand visuals.",

achievements:[
"Designed and optimized company website",
"Produced marketing videos and motion graphics",
"Created brand visuals for social media and print"
]
},

{
id:10,
role:"Crowdfunding Volunteer",
company:"Muskurahat Foundation",
location:"Remote · Jalandhar",
duration:"Aug 2025 - Sep 2025",
type:"Internship",
logo:"/muskurahat.png",
color:"from-primary to-secondary",

description:
"Worked on fundraising campaigns supporting underprivileged children through digital outreach.",

achievements:[
"Promoted campaigns using storytelling marketing",
"Engaged donors through social media outreach",
"Tracked fundraising progress and campaign impact"
]
}

];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${experience.color} ring-4 ring-background shadow-lg`}
        />
      </div>

      <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Content Side */}
        <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
          <motion.div
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 md:p-8 card-interactive border-gradient group"
          >
            {/* Header */}
            <div className={`flex items-start gap-4 mb-5 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative flex-shrink-0"
              >
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-16 h-16 rounded-xl object-cover ring-2 ring-border shadow-lg"
                />
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center`}>
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                </div>
              </motion.div>
              
              <div className={`flex-1 ${isEven ? 'lg:text-right' : ''}`}>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${experience.color} text-primary-foreground mb-2`}>
                  {experience.type}
                </span>
                <h3 className="text-heading-lg mb-1">{experience.role}</h3>
                <p className="text-primary font-medium">{experience.company}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className={`flex flex-wrap gap-4 mb-4 text-body-sm text-muted-foreground ${isEven ? 'lg:justify-end' : ''}`}>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-body-md mb-5 leading-relaxed">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
                  className={`flex items-start gap-3 text-body-sm ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`} />
                  <span className="text-foreground/80">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Empty Side for Timeline */}
        <div className={`hidden lg:block ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
      </div>
    </motion.div>
  );
}

export function ProfessionalExperience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="section-padding bg-surface-elevated relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-50" />
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 glow-primary"
          >
            <Building2 className="w-8 h-8 text-primary-foreground" />
          </motion.div>
          
          <span className="block text-primary text-body-sm font-semibold uppercase tracking-wider mb-2">
            Professional Journey
          </span>
          <h2 className="text-display-sm md:text-display-md font-display mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            From internships to freelancing—every role has shaped my skills and expanded my perspective 
            on delivering real-world impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8 lg:space-y-12">
          {/* Central Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-body-md mb-4">
            Want to know more about my professional journey?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Let's Connect
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
