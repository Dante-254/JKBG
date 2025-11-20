import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CompanyInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Google Maps Location */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.638450110695!2d37.14054403437812!3d-1.282252600656322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f650029ab0ae5%3A0x6c030c67b65c95e!2sJKBG%20Construction%20company%20ltd!5e0!3m2!1sen!2ske!4v1763630707354!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JKB Build Kenya Location"
            />
          </div>
          <div className="text-center mt-4">
            <p className="text-muted-foreground">
              📍 Nairobi, Kenya | Serving construction and property management needs across the region
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  👁️ Vision
                </Badge>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To be Kenya's leading construction and property management company, 
                setting the standard for quality, innovation, and customer satisfaction 
                while building sustainable communities for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  🎯 Mission
                </Badge>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We deliver exceptional construction and property management services 
                through skilled craftsmanship, innovative solutions, and unwavering 
                commitment to our clients' success, safety, and satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="flex justify-center">
            <Card className="max-w-md">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <span className="text-2xl font-bold">DM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">David Muthui</h3>
                <Badge variant="secondary" className="mb-3">
                  🎨 Developer GI JOE
                </Badge>
                <p className="text-muted-foreground">
                  Lead designer responsible for creating innovative and functional design solutions for all our construction projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Website Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Work Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Modern Residential Complex",
                description: "luxury apartments with modern amenities",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
              },
              {
                title: "Commercial Building Construction",
                description: "Office complex with sustainable design",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
              },
              {
                title: "Property Renovation",
                description: "Complete home makeover and restoration",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop"
              },
              {
                title: "Infrastructure Development",
                description: "Road construction and site development",
                image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&h=400&fit=crop"
              },
              {
                title: "Interior Design Services",
                description: "Modern interior solutions and fit-outs",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
              },
              {
                title: "Property Management",
                description: "Comprehensive maintenance and management",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
