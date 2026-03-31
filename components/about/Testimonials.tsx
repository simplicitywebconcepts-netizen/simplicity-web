"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    id: 1,
    content: "Working with Simplicity has completely transformed how we approach our digital infrastructure. Their team's technical depth and strategic vision are unmatched. They didn't just build a product; they built a scalable foundation for our future.",
    author: "Sarah Jenkins",
    role: "CTO of TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logo: "https://tailwindui.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
  },
  {
    id: 2,
    content: "The level of professionalism and the elegant codebase they delivered exceeded our expectations. Our platform's performance improved by 40%, and our development cadence is faster than ever thanks to their architectural choices.",
    author: "Marcus Chen",
    role: "VP of Engineering at NexaCorp",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logo: "https://tailwindui.com/plus-assets/img/logos/tuple-logo-indigo-600.svg"
  },
  {
    id: 3,
    content: "Simplicity brought a rare mix of modern design sensibilities and hardcore engineering to our project. They communicated clearly throughout the entire lifecycle and delivered a product our customers absolutely love.",
    author: "Elena Rodriguez",
    role: "Founder of Elevate",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logo: "https://tailwindui.com/plus-assets/img/logos/statamic-logo-indigo-600.svg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative backgrounds inspired by Tailwind UI simple centered */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--primary-light),transparent)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 ring-primary/10 shadow-xl shadow-primary/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <AnimatedSection className="text-center mb-10 flex flex-col items-center">
           <SectionLabel label="Testimonials" />
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               transition={{ duration: 0.3 }}
               className="flex flex-col items-center"
             >
                <img 
                  className="mx-auto h-12 grayscale opacity-70" 
                  src={testimonials[currentIndex].logo} 
                  alt="" 
                />
                <figure className="mt-10">
                  <blockquote className="text-center text-xl/8 font-semibold text-foreground sm:text-2xl/9">
                    <p>“{testimonials[currentIndex].content}”</p>
                  </blockquote>
                  <figcaption className="mt-10">
                    <img
                      className="mx-auto h-14 w-14 rounded-full border-2 border-primary/20"
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-foreground">{testimonials[currentIndex].author}</div>
                      <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-muted">
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                      <div className="text-muted">{testimonials[currentIndex].role}</div>
                    </div>
                  </figcaption>
                </figure>
             </motion.div>
          </AnimatePresence>
          
          {/* Controls - Positioned outside the text so they don't overlap */}
          <div className="flex items-center justify-between absolute top-[60%] -translate-y-1/2 left-0 right-0 -mx-4 sm:-mx-16 lg:-mx-20 pointer-events-none">
             <button 
                onClick={handlePrev} 
                className="p-3 rounded-full border border-border bg-white text-muted hover:text-primary hover:border-primary/50 transition-all shadow-md hover:shadow-lg focus:outline-none pointer-events-auto"
                aria-label="Previous testimonial"
              >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
                onClick={handleNext} 
                className="p-3 rounded-full border border-border bg-white text-muted hover:text-primary hover:border-primary/50 transition-all shadow-md hover:shadow-lg focus:outline-none pointer-events-auto"
                aria-label="Next testimonial"
              >
               <ChevronRight className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
                <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-primary' : 'bg-primary/20 hover:bg-primary/40'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}
