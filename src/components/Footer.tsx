import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const propertyServices = [
    "Tenant Placement & Screening",
    "Rent Collection & Accounting", 
    "Maintenance & Repairs",
    "Property Inspections"
  ];

  const constructionServices = [
    "Architectural Designs",
    "Structural Designs", 
    "General Construction",
    "Electrical Works"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">JKBG Construction</h3>
                <p className="text-sm text-muted-foreground">Company Ltd</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in construction services and property management. 
              Leading the way in civil engineering and building construction across Kenya.
            </p>
            <div className="space-y-2">
              <a href="tel:+254720836939" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +254720836939
              </a>
              <a href="mailto:jkbgconstruction@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                jkbgconstruction@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Property Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Property Services</h4>
            <ul className="space-y-3">
              {propertyServices.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Construction Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Construction Services</h4>
            <ul className="space-y-3">
              {constructionServices.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
            
            <div className="pt-4">
              <Button variant="hero" size="lg" className="w-full">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} JKBG Construction Company Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;