import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

/* -------------------- Trusted Brands -------------------- */
const trustedBy = [
  "Google Developer Groups",
  "DAV University",
  "Batch-Man",
  "Traikare",
  "Intel Unnati",
  "Freelance Clients",
  "YHills",
  "Muskurahat Foundation",
  "A-sonne",
  "Internshala",
  "Garuda Aerospace Private Limited"
];

/* -------------------- Testimonials Data -------------------- */
const testimonials = [

{
name: "Palvi Kumari",
role: "MBA Student",
company: "DAV University",
content:
"Working alongside Nishant as a CR in the MBA program has been a great experience. He is insightful, disciplined, and always encourages learning and growth. His ability to guide and motivate others reflects strong leadership qualities.",
rating: 5,
avatar: "/palvi.jpg"
},

{
name: "Girish Taneja",
role: "Professor & Associate Dean",
company: "Lovely Professional University",
content:
"Nishant is a bright management graduate with a strong IT background. He is innovative, an excellent public speaker, and completes every task diligently. He has demonstrated great leadership as a class representative during his MBA.",
rating: 5,
avatar: "/girish.jpg"
},

{
name: "Shaveta Chutani",
role: "Education Management Professional",
company: "Academic Mentor",
content:
"Nishant consistently demonstrates exceptional problem-solving, logical reasoning, and algorithmic thinking. His balance of technical expertise and emotional intelligence enables him to excel both independently and in team environments.",
rating: 5,
avatar: "/shaveta.jpg"
},

{
name: "Surbhi",
role: "GDG on Campus Organizer",
company: "Google Developer Groups",
content:
"I had the pleasure of working closely with Nishant in the GDG community. His expertise in video editing, graphic design, and content creation significantly boosted our engagement. His creativity and dedication make him a valuable team member.",
rating: 5,
avatar: "/surbhi.jpg"
},

{
name: "Dr. Mukhtiar Singh",
role: "Assistant Professor",
company: "Chandigarh University",
content:
"Nishant is an outstanding student with exceptional academic ability, curiosity, and dedication. His critical thinking, communication, and leadership skills make him highly capable of succeeding in any opportunity he pursues.",
rating: 5,
avatar: "/mukhtiar.jpg"
},

{
name: "Namish Kashyap",
role: "Product Designer",
company: "Design Mentor",
content:
"I strongly recommend Nishant for video editing. Working with him is fantastic — he is highly skilled in video creation and consistently delivers high-quality work quickly and efficiently.",
rating: 5,
avatar: "/namish.jpg"
},

{
name: "Dr. Balpreet Kaur",
role: "Assistant Professor",
company: "Academic Mentor",
content:
"Nishant is a highly skilled and visionary individual with a strong foundation in computer science. He consistently demonstrates exceptional technical ability and strong problem-solving skills while managing complex projects.",
rating: 5,
avatar: "/balpreet.jpg"
},

{
name: "Karanveer Chouhan",
role: "Founder",
company: "Batch-Man",
content:
"Nishant successfully executed multiple technical video projects while working with Batch-Man. His ability to understand complex programming concepts and convert them into engaging video content makes him a valuable asset to any organization.",
rating: 5,
avatar: "/karanveer.jpg"
},

{
name: "Vaibhav Chauhan",
role: "Business Development Manager",
company: "Cremica Foods",
content:
"Nishant is a passionate web developer with strong problem-solving and leadership skills. His communication ability, reliability, and positive personality make him excellent at building strong professional relationships.",
rating: 5,
avatar: "/vaibhav.jpg"
},

{
name: "Himanshu Aggarwal",
role: "Software Developer",
company: "Senior Peer",
content:
"Nishant is an active learner and passionate web developer with strong problem-solving skills. His experience as a class representative strengthened his communication, leadership, and adaptability, making him a reliable team player.",
rating: 5,
avatar: "/himanshu.jpg"
}

];

/* -------------------- Testimonial Card -------------------- */
function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 md:p-8 card-interactive h-full"
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-primary/30" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground text-body-md mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <div className="font-semibold text-body-md">{testimonial.name}</div>
          <div className="text-muted-foreground text-body-sm">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------- Testimonials Section -------------------- */
export function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="testimonials" className="section-padding bg-gradient-mesh">
      <div className="container mx-auto px-4">

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-body-sm uppercase tracking-wider">
            Trusted By Leading Brands
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-8">
            {trustedBy.map((brand, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-heading-md text-muted-foreground/50 font-display font-bold"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-body-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>

          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what people I've worked with
            have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}