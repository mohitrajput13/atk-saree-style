import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Content */}
          <div>
            <h2 className="text-4xl font-serif text-gray-800 mb-2">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-orange-400 mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-8">
              Hear from our satisfied<br />
              Clients have to say. ❤️
            </p>

            {/* Main testimonial image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/b81453ff-045b-4874-80d8-2fe3216ee88e.png"
                alt="Happy customers in beautiful sarees"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Testimonial Cards Stack */}
          <div className="space-y-4">
            {/* First Testimonial Card */}
            <div className="bg-red-900 text-white p-6 rounded-lg relative">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm mb-4 leading-relaxed">
                "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulya saree pieces. Truly exceptional art."
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
                  <span className="text-red-900 font-semibold text-sm">N</span>
                </div>
                <span className="text-sm font-medium">Nivedita Roy, Kolkata</span>
              </div>
              
              {/* Arrow on the right */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-400 w-8 h-8 rounded flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>

            {/* Second Testimonial Card */}
            <div className="bg-red-900 text-white p-6 rounded-lg relative">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm mb-4 leading-relaxed">
                "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulya saree pieces. Truly exceptional art."
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
                  <span className="text-red-900 font-semibold text-sm">N</span>
                </div>
                <span className="text-sm font-medium">Nivedita Roy, Kolkata</span>
              </div>
              
              {/* Arrow on the right */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-400 w-8 h-8 rounded flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>

            {/* Third Testimonial Card */}
            <div className="bg-red-900 text-white p-6 rounded-lg relative">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-sm mb-4 leading-relaxed">
                "As someone who collects handloom sarees, I was blown away by the craftsmanship and story behind every Atulya saree pieces. Truly exceptional art."
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
                  <span className="text-red-900 font-semibold text-sm">N</span>
                </div>
                <span className="text-sm font-medium">Nivedita Roy, Kolkata</span>
              </div>
              
              {/* Arrow on the right */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-400 w-8 h-8 rounded flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;