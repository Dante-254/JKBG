import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CurrentSite = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/_image-manifest.json")
      .then((r) => r.json())
      .then((m) => setImages(m?.current_site || []))
      .catch(() => setImages([]));
  }, []);

  if (!images.length) return null;

  return (
    <section id="current-site" className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Badge variant="secondary">Current Site</Badge>
          <h3 className="text-2xl font-bold text-foreground mt-3">
            On-going / Recent Work
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <Card
              key={i}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <Link
                  to="/gallery"
                  className="block w-full h-56 overflow-hidden rounded-t"
                >
                  <img
                    src={src}
                    alt={`Site ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
          <Card
            key={i}
            className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
          >
            <CardContent className="p-0">
              <Link
                to="/gallery"
                className="block w-full h-56 overflow-hidden rounded-t focus:outline-none"
              >
                <img
                  src={src}
                  alt={`Site ${i + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CurrentSite;
