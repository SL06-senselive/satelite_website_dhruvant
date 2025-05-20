import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Satellite } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-senseLive-blue text-white py-16 md:py-24">
      {/* GIF Background */}
      <img
        src="src/assets/earth_digital.gif" // <-- Replace with your GIF path
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
      />
      {/* Gradient overlay: dark on left, bright on right */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(16, 23, 42, 0.85) 0%, rgba(16, 23, 42, 0.5) 50%, rgba(16, 23, 42, 0.05) 100%)"
        }}
      ></div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-background opacity-10 z-20"></div>
      
      {/* Orbit lines */}
      <div className="absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 orbit-line z-20"></div>
      <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 orbit-line z-20"></div>
      
      {/* Animated satellite elements */}
      <div className="absolute top-1/4 right-[5%] w-16 h-16 rounded-full bg-senseLive-teal/20 animate-pulse-slow glow-dot z-20"></div>
      <div className="absolute bottom-1/3 left-[10%] w-24 h-24 rounded-full bg-senseLive-orange/20 animate-pulse-slow z-20"></div>
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <Satellite className="text-senseLive-teal h-6 w-6" />
              <span className="text-senseLive-teal font-medium">Global Satellite Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting <span className="text-senseLive-orange">Pole to Pole</span> with Satellite IoT
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Dhruvant provides seamless global connectivity with cutting-edge satellite IoT devices based on ViaSat networks, covering the entire planet from North to South pole.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-senseLive-teal hover:bg-senseLive-darkTeal text-white font-medium">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
              <Button asChild size="lg" className="bg-senseLive-teal hover:bg-senseLive-darkTeal text-white font-medium">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-gray-300 mb-3">Powered by world-class satellite networks</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-md">
                  <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">VS</span>
                  </div>
                  <span className="text-sm font-medium">ViaSat Technology</span>
                </div>
              </div>
            </div>
          </div>
          {/* Removed globe animation and related elements */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
