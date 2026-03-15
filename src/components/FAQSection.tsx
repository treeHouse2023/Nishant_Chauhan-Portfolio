import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do you typically work with clients?',
    answer: 'I believe in collaborative, transparent partnerships. Every project starts with a discovery call to understand your goals, followed by a detailed proposal. Throughout the project, you\'ll have regular updates and opportunities for feedback. I use tools like Notion for project management and Slack/Discord for quick communication.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Turnaround varies by project complexity. A social media video edit might take 2-3 days, while a complete website can take 2-4 weeks. Brand identity projects typically span 3-6 weeks. During our initial call, I\'ll provide a realistic timeline based on your specific needs.',
  },
  {
    question: 'How does pricing work?',
    answer: 'I offer both project-based and retainer pricing. Project pricing is based on scope, complexity, and timeline. For ongoing needs, retainer packages provide better value and priority access. I\'m always transparent about costs—you\'ll receive a detailed quote before we begin.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'All projects include 2-3 rounds of revisions to ensure you\'re completely satisfied. I find that clear communication upfront usually means fewer revisions are needed. Additional revision rounds can be arranged if your needs change during the project.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer: 'Absolutely! I work with clients globally through video calls, screen sharing, and collaborative tools. Time zones are rarely an issue—I\'m flexible with meeting times and maintain clear async communication. Some of my best partnerships are with clients I\'ve never met in person.',
  },
  {
    question: 'What tools and software do you use?',
    answer: 'For video editing: Premiere Pro, After Effects, DaVinci Resolve. Design: Figma, Adobe Creative Suite, Blender for 3D. Development: React, Next.js, TypeScript, Tailwind CSS. I\'m always learning new tools to deliver the best results for each project.',
  },
  {
    question: 'Can you work under NDA?',
    answer: 'Yes, I regularly work under NDA for sensitive projects. Confidentiality and professionalism are core to how I operate. I\'m happy to sign your NDA or provide mine before we discuss project details.',
  },
  {
    question: 'What if I need ongoing support after the project?',
    answer: 'I offer maintenance packages for websites and ongoing creative support through monthly retainers. Many clients continue working with me long after the initial project. I also provide documentation and training so your team can handle day-to-day updates independently.',
  },
];

export function FAQSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="faq" className="section-padding bg-surface-elevated">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-body-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Everything you need to know about working together. Can't find what you're looking for? 
            Feel free to reach out.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-heading-md py-5 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-body-md pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
