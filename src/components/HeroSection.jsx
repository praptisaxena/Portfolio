import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textVariants = ["Full-Stack & Mobile Developer", "AI & ML Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="animate-fade-in"> Hi, I'm</span>
            <span className="text-primary animate-fade-in"> Prapti</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Saxena
            </span>
          </h1>

          {/* Animated text section */}
          <div className="h-20 md:h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                className="text-lg md:text-xl text-purple-300 max-w-2xl mx-auto text-center absolute"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {textVariants[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p>
            Final-year Computer Science student specializing in Full-Stack
            Development, App Development, and Machine Learning.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
