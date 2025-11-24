import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Globe, User } from "lucide-react";
import HeroAnimation from "@/components/HeroAnimation";
import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import Footer from "@/components/Footer";
import AboutDialog from "@/components/AboutDialog";
import WhatsAppLogo from "@/assets/logos/WhatsAppLogo";
import InstagramLogo from "@/assets/logos/InstagramLogo";

const Index = () => {
  const [showHero, setShowHero] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      
      <AnimatePresence mode="wait">
        {showHero ? (
          <HeroAnimation key="hero" onComplete={() => setShowHero(false)} />
        ) : (
          <div key="content" className="relative z-10">
            <ProfileSection />
            
            <div className="max-w-2xl mx-auto px-6 pb-12 space-y-4">
              <button
                onClick={() => setAboutOpen(true)}
                className="w-full group block bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 transition-all duration-300 hover:border-institutional-gold hover:shadow-lg hover:shadow-institutional-gold/20 hover:scale-[1.02] text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-institutional-gold group-hover:text-institutional-glow transition-colors duration-300">
                      <User className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-foreground group-hover:text-institutional-gold transition-colors duration-300">
                      Quem sou?
                    </span>
                  </div>
                </div>
              </button>

              <LinkCard
                icon={<WhatsAppLogo size={28} />}
                title="WhatsApp"
                url="https://wa.me/5561992979832"
                delay={0.8}
              />
              <LinkCard
                icon={<InstagramLogo size={28} />}
                title="Instagram"
                url="https://www.instagram.com/gracamachado133/"
                delay={0.9}
              />
            </div>

            <div className="max-w-2xl mx-auto px-6 pt-12 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.anabb.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4 transition-all duration-300 hover:border-institutional-gold hover:shadow-md hover:shadow-institutional-gold/10"
                >
                  <Globe className="w-5 h-5 text-institutional-gold" />
                  <span className="text-sm font-medium text-foreground">Conheça a ANABB</span>
                </a>
                
                <a
                  href="https://www.instagram.com/anabbevoce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-4 transition-all duration-300 hover:border-institutional-gold hover:shadow-md hover:shadow-institutional-gold/10"
                >
                  <InstagramLogo size={20} />
                  <span className="text-sm font-medium text-foreground">Instagram ANABB</span>
                </a>
              </div>
            </div>

            <AboutDialog open={aboutOpen} onOpenChange={setAboutOpen} />

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
