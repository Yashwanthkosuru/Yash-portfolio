import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  Send,
  ExternalLink,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const EMAILJS_SERVICE_ID = "service_dhx8pok";
const EMAILJS_TEMPLATE_ID = "template_yeo4rmj";
const EMAILJS_PUBLIC_KEY = "xjK1Gb9oUjMk-Q5en";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7093294377",
    href: "tel:+917093294377",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kosuruyashwanth@gmail.com",
    href: "mailto:kosuruyashwanth@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yashwanth-kosuru",
    href: "https://linkedin.com/in/yashwanth-kosuru-a65343159/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bahrain (Open to Relocation)",
    href: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper className="text-center mb-12 md:mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <ScrollAnimationWrapper direction="left" delay={100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="font-display text-lg md:text-xl font-semibold mb-4 md:mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-primary/10 rounded-xl">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm md:text-base truncate"
                          >
                            <span className="truncate">{item.value}</span>
                            {item.href.startsWith("http") && (
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            )}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm md:text-base">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Availability Card */}
            <ScrollAnimationWrapper direction="left" delay={200}>
              <div className="glass-card p-4 md:p-6 rounded-2xl neon-border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-foreground font-medium text-sm md:text-base">
                    Currently available for new opportunities
                  </span>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Contact Form */}
          <ScrollAnimationWrapper direction="right" delay={100}>
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h3 className="font-display text-lg md:text-xl font-semibold mb-4 md:mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="text-xs md:text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs md:text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs md:text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary/50 border-border focus:border-primary min-h-[100px] md:min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;