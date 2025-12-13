import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-gradient">YK</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">Yashwanth A Kosuru</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yashwanth-kosuru-a65343159/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-lg hover:neon-border transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:kosuruyashwanth@gmail.com"
              className="p-2 glass-card rounded-lg hover:neon-border transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Yashwanth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;