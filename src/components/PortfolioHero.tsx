import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import { Github, Mail, Linkedin, Download } from "lucide-react";
import { personalData } from "@/constants/personalData";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-bg"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            {personalData.tagline}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {personalData.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" dangerouslySetInnerHTML={{__html: personalData.description}} />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href={personalData.social.email}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                {personalData.email}
              </Button>
            </a>
            <a href={personalData.cvLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href={personalData.social.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href={personalData.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href={personalData.social.email}>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-primary-glow rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-primary rounded-full animate-glow-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default PortfolioHero;