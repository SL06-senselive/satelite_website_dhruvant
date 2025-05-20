
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Satellite, Globe } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-senseLive-blue via-senseLive-darkTeal to-senseLive-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-[15%] w-48 h-48 rounded-full bg-senseLive-orange/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-senseLive-teal/10 blur-3xl"></div>

      {/* Orbit line */}
      <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 orbit-line opacity-20"></div>

      {/* Tech points */}
      <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-senseLive-teal glow-dot"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 rounded-full bg-senseLive-orange glow-dot"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Satellite className="text-senseLive-teal h-8 w-8" />
            <Globe className="text-senseLive-orange h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Connect from <span className="text-senseLive-teal">North</span> to <span className="text-senseLive-orange">South</span> Pole
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Join leading industries worldwide in leveraging Dhruvant's ViaSat powered satellite IoT solutions for true global connectivity and real-time monitoring anywhere on Earth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-senseLive-orange hover:bg-senseLive-orange/90 text-white">
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-senseLive-teal text-senseLive-teal hover:bg-senseLive-teal hover:text-white transition-all duration-300"
            >
              <Link to="/products">Explore Products</Link>
            </Button>


          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
