import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Radio, 
  Wifi, 
  Zap, 
  Shield, 
  ChevronRight,
  Satellite,
  Navigation
} from "lucide-react";
import viasatImage from "@/assets/image_visat.png";


const Products = () => {
  const products = [
    {
      title: "L-Band Dhruvant Transponder",
      network: "Viasat Satellite Connectivity",
      band: "L-Band",
      features: [
        { icon: <Radio className="h-4 w-4" />, text: "10 kb Downlink" },
        { icon: <Cpu className="h-4 w-4" />, text: "GNSS Support" },
        { icon: <Shield className="h-4 w-4" />, text: "Secure OTA Updates" }
      ],
      image: viasatImage,
      link: "/products"
    },
    {
      title: "Dhruvant NB-IoT NTN Transponder",
      network: "NB-IoT Over Satellite (3GPP Release 17)",
      band: "S-Band / L-Band",
      features: [
        { icon: <Wifi className="h-4 w-4" />, text: "LPWA Transmission" },
        { icon: <Zap className="h-4 w-4" />, text: "Low Power Consumption" },
        { icon: <Shield className="h-4 w-4" />, text: "End-to-End Encryption" }
      ],
      image: viasatImage,
      link: "/products"
    }
  ];

  return (
    <section className="py-16 md:py-24 space-gradient text-white relative overflow-hidden">
      {/* Orbital tech elements */}
      <div className="absolute top-20 right-20 w-48 h-48 rounded-full orbit-line"></div>
      <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-senseLive-teal glow-dot animate-orbit"></div>
      
      <div className="absolute bottom-40 left-10 w-32 h-32 rounded-full orbit-line"></div>
      <div className="absolute bottom-40 left-10 w-2 h-2 rounded-full bg-senseLive-purple glow-dot animate-slow-orbit"></div>
      
      {/* Star elements */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-white opacity-70 animate-twinkle delay-100"></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-white opacity-70 animate-twinkle delay-300"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-white opacity-70 animate-twinkle delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="h-px w-8 bg-senseLive-teal"></div>
            <Satellite className="h-6 w-6 text-senseLive-teal" />
            <div className="h-px w-8 bg-senseLive-teal"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Orbital IoT Devices
          </h2>
          <p className="text-lg text-gray-300">
            Purpose-built hardware solutions designed for reliable connectivity in the most challenging environments, from Earth to orbit.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {products.map((product, index) => (
              <div 
                key={index}
                className="tech-panel p-[1px] rounded-lg group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-senseLive-blue/80 backdrop-blur-sm rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-44 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Tech overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-senseLive-blue to-transparent opacity-60"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-senseLive-teal glow-dot"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs text-senseLive-teal uppercase tracking-wide">{product.band}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-senseLive-teal transition-colors">
                      {product.title}
                    </h3>
                    <div className="mb-4">
                      <div className="text-sm text-gray-300 mb-1 flex items-center">
                        <Navigation className="h-3 w-3 mr-1 text-senseLive-teal" />
                        {product.network}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <span className="mr-2 text-senseLive-teal">{feature.icon}</span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={product.link}
                      className="inline-flex items-center text-senseLive-teal hover:text-senseLive-purple text-sm font-medium"
                    >
                      View specifications <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-senseLive-teal text-white bg-senseLive-teal hover:bg-senseLive-teal/10">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;