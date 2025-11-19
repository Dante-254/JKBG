import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Calendar } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Award className="h-6 w-6" />, label: "Licensed Contractor", value: "Certified" },
    { icon: <Users className="h-6 w-6" />, label: "Satisfied Clients", value: "500+" },
    { icon: <Calendar className="h-6 w-6" />, label: "Years Experience", value: "15+" },
    { icon: <CheckCircle className="h-6 w-6" />, label: "Projects Completed", value: "1000+" }
  ];

  const features = [
    "Advanced building technology implementation",
    "Cost-effective and successful project delivery", 
    "Comprehensive engineering construction services",
    "Professional consultation and planning",
    "Quality assurance and timely completion",
    "Licensed and insured operations"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">About JKBG Construction</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Leading the way in civil engineering and building construction
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                JKBG is a locally owned Kenyan construction company committed to serving both organizations and individuals with exceptional construction expertise and services.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-foreground">
                Our engineering construction services support comprehensive project development, from initial design to final completion. We provide a wide range of construction solutions backed by advanced building technology and professional expertise.
              </p>
              
              <p className="text-foreground">
                We are committed to providing the best possible construction expertise and service to ensure cost-effective and successful projects that meet and exceed our clients' expectations.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Achievements Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;