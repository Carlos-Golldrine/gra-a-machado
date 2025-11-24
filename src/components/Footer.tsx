import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import InstagramLogo from "@/assets/logos/InstagramLogo";

const Footer = () => {
  return (
    <motion.footer
      className="py-12 px-6 text-center border-t border-border/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <p className="text-muted-foreground italic text-lg font-light max-w-2xl mx-auto leading-relaxed mb-8">
        "Pioneira e defensora da saúde e liderança feminina no BB ❤️"
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <a
          href="https://www.anabb.org.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-institutional-gold transition-colors duration-300"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium">Conheça a ANABB</span>
        </a>
        
        <a
          href="https://www.instagram.com/anabbevoce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-institutional-gold transition-colors duration-300"
        >
          <InstagramLogo size={20} />
          <span className="text-sm font-medium">Instagram ANABB</span>
        </a>
      </div>
      
      <div className="flex justify-center">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-institutional-gold to-transparent rounded-full"></div>
      </div>
    </motion.footer>
  );
};

export default Footer;
