import { useEffect, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/_image-manifest.json")
      .then((r) => r.json())
      .then((m) => setImages(m?.gallery || []))
      .catch(() => setImages([]));
  }, []);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const prev = useCallback(
    () => setIndex((s) => (s - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((s) => (s + 1) % images.length),
    [images.length]
  );

  // keyboard navigation while lightbox open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Badge variant="secondary">Gallery</Badge>
            <h2 className="text-3xl font-bold text-foreground mt-3">
              Project Gallery
            </h2>
            <p className="text-muted-foreground mt-2">
              A selection of our completed and in-progress works.
            </p>
          </div>

          <div className="gallery columns-2 sm:columns-3 lg:columns-4 gap-4">
            {images.map((src, idx) => {
              const sizeClass =
                idx % 7 === 0
                  ? "h-80"
                  : idx % 5 === 0
                  ? "h-72"
                  : idx % 3 === 0
                  ? "h-56"
                  : "h-40";
              return (
                <figure
                  key={idx}
                  className="break-inside-avoid mb-4 rounded overflow-hidden"
                >
                  <button
                    onClick={() => openAt(idx)}
                    className="block w-full text-left"
                  >
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className={`w-full ${sizeClass} object-cover rounded`}
                      loading="lazy"
                    />
                  </button>
                </figure>
              );
            })}
          </div>
        </div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[95%] p-0 bg-transparent shadow-none">
          <div className="relative flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={images[index]}
              alt={`Gallery ${index + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <DialogClose asChild>
              <button className="absolute right-2 top-2 z-50 rounded bg-black/40 p-2 text-white hover:bg-black/60">
                <X className="h-5 w-5" />
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Gallery;
