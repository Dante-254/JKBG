import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Home, 
  Wrench, 
  FileText, 
  Users, 
  Shield, 
  Zap,
  Hammer,
  ClipboardCheck,
  PaintBucket
} from "lucide-react";

const Services = () => {
  const propertyServices = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tenant Placement & Screening",
      description: "Professional tenant vetting and placement services to ensure quality occupancy."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Rent Collection & Accounting", 
      description: "Efficient rent collection and comprehensive financial reporting for property owners."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Maintenance & Repairs",
      description: "Professional maintenance services to keep your property in excellent condition."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Property Inspections",
      description: "Regular property inspections to identify issues before they become costly problems."
    }
  ];

  const constructionServices = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Architectural Designs",
      description: "Creative and functional architectural designs tailored to your vision and needs."
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: "Structural Designs",
      description: "Expert structural engineering designs ensuring safety and code compliance."
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Bill of Quantities",
      description: "Detailed cost estimation and quantity surveying for accurate project budgeting."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Electrical Works",
      description: "Professional electrical installation and maintenance services for all projects."
    },
    {
      icon: <PaintBucket className="h-6 w-6" />,
      title: "General Construction",
      description: "Complete construction services from foundation to finishing for residential and commercial projects."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive construction and property management services designed to meet all your needs
          </p>
        </div>

        {/* Property Management Services */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Property Management</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {propertyServices.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Construction Services */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Construction Services</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card/30 backdrop-blur rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team is ready to bring your vision to life.
          </p>
          <Button variant="hero" size="lg">
            Get Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;