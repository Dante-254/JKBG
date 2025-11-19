import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import heroImage from "@/assets/WhatsApp Image 2025-11-07 at 19.30.44 (1).webp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="JKBG Construction - Professional building construction services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              JKBG CONSTRUCTION
              <span className="block text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
                COMPANY LTD
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-medium text-primary mb-4">
              YOUR TRUSTED PARTNER IN CONSTRUCTION SERVICES
            </p>
            
            <p className="text-xl lg:text-2xl text-foreground mb-6">
              Earn free-stress income from your property.
            </p>
          </div>

          {/* Quality Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-base bg-secondary/80 backdrop-blur">
              Reliable
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base bg-secondary/80 backdrop-blur">
              Professional  
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base bg-secondary/80 backdrop-blur">
              Efficient
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="text-lg">
              <Phone className="h-5 w-5" />
              +254720836939
            </Button>
            <Button variant="professional" size="xl" className="text-lg">
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;