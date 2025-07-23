import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Testimonials data matching the design
const testimonials = [
  {
    id: 1,
    name: 'Nivedita Roy, Kolkata',
    rating: 5,
    text: 'As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulya saree pieces. Truly exceptional art.',
    avatar: '/lovable-uploads/b81453ff-045b-4874-80d8-2fe3216ee88e.png'
  },
  {
    id: 2,
    name: 'Priya Sharma, Mumbai',
    rating: 5,
    text: 'The quality of silk and intricate embroidery work is absolutely stunning. Each saree tells a beautiful story of Indian heritage and craftsmanship.',
    avatar: '/lovable-uploads/b81453ff-045b-4874-80d8-2fe3216ee88e.png'
  },
  {
    id: 3,
    name: 'Meera Patel, Ahmedabad',
    rating: 5,
    text: 'Atulya Karigari has redefined luxury for me. The attention to detail and authentic handloom work makes every piece a treasured possession.',
    avatar: '/lovable-uploads/b81453ff-045b-4874-80d8-2fe3216ee88e.png'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image and Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                Testimonials
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hear from our satisfied clients have to say. 
                <span className="text-primary ml-2">❤️</span>
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/lovable-uploads/b81453ff-045b-4874-80d8-2fe3216ee88e.png"
                  alt="Happy customers wearing beautiful sarees"
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Decorative Pattern Overlay */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Right Side - Testimonials Carousel */}
          <div className="space-y-8">
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="flex justify-end space-x-2 mb-6">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="h-10 w-10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="h-10 w-10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Testimonials Stack */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex;
                  const offset = index - currentIndex;
                  
                  return (
                    <div
                      key={testimonial.id}
                      className={`card-luxury p-6 transition-all duration-500 ${
                        isActive 
                          ? 'opacity-100 scale-100 z-20' 
                          : 'opacity-60 scale-95 z-10'
                      }`}
                      style={{
                        transform: `translateY(${offset * 20}px)`,
                      }}
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 fill-secondary text-secondary" 
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-foreground leading-relaxed mb-6 font-medium">
                        "{testimonial.text}"
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                            <span className="text-primary font-heading font-semibold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <div className="w-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;