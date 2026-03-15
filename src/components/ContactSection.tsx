import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Globe,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/* CONTACT INFO */

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nishant852800@gmail.com",
    href: "mailto:nishant852800@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

/* SOCIAL LINKS */

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nishant-chauhan-870239234/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/nishant852800",
    label: "Twitter",
  },
  {
    icon: Github,
    href: "https://github.com/treeHouse2023",
    label: "GitHub",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nishant.chauhan20/",
    label: "Instagram",
  },
  {
    icon: Globe,
    href: "https://www.researchgate.net/profile/Nishant-9?ev=hdr_xprf",
    label: "ResearchGate",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCSYOttdDx23-dxlJEkuzuzg",
    label: "YouTube",
  },
];

export function ContactSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("access_key", "1ef5c2bb-348c-4c9d-a22d-1acb5ec90420");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("subject", "New Portfolio Contact Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "I will reply to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-mesh">
      <div className="container mx-auto px-4">

        {/* HEADER */}

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-body-sm font-semibold uppercase tracking-wider">
            Contact
          </span>

          <h2 className="text-display-sm md:text-display-md font-display mt-2 mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>

          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT FORM */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-heading-xl mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <Input
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

              </form>
            </div>
          </motion.div>

          {/* CONTACT INFO */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* INFO CARDS */}

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm">
                      {info.label}
                    </div>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-semibold hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-semibold">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL LINKS */}

            <div className="glass rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">
                Connect With Me
              </h4>

              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold">Currently Available</span>
              </div>

              <p className="text-muted-foreground text-sm">
                I'm open to new freelance projects and collaborations.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}