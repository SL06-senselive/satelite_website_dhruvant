
import { 
  Globe, 
  Shield, 
  Battery, 
  Zap, 
  Wifi, 
  CloudCog,
  Satellite
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-senseLive-teal" />,
      title: "Global Coverage",
      description: "Works seamlessly in remote and offshore locations worldwide with no coverage gaps."
    },
    {
      icon: <Wifi className="h-10 w-10 text-senseLive-teal" />,
      title: "Multi-Network Support",
      description: "Compatible with Iridium, NB-IoT NTN, and Viasat IDP for flexible connectivity options."
    },
    {
      icon: <Battery className="h-10 w-10 text-senseLive-teal" />,
      title: "Low Power Consumption",
      description: "Designed for battery-powered remote installations with extended operational life."
    },
    {
      icon: <Shield className="h-10 w-10 text-senseLive-teal" />,
      title: "Rugged & Reliable",
      description: "IP65/IP67 rated for harsh industrial conditions, built to withstand extreme environments."
    },
    {
      icon: <Zap className="h-10 w-10 text-senseLive-teal" />,
      title: "Secure Data Transmission",
      description: "Supports AES-256 encryption and secure boot for maximum data protection."
    },
    {
      icon: <CloudCog className="h-10 w-10 text-senseLive-teal" />,
      title: "Real-Time Monitoring",
      description: "Supports IoT dashboards and SCADA integrations for immediate insights."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-senseLive-spaceBlack text-white relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-senseLive-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-senseLive-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Satellite className="text-senseLive-teal h-8 w-8 mr-2" />
            <div className="h-px w-12 bg-senseLive-teal"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Advanced Features & Capabilities
          </h2>
          <p className="text-lg text-gray-300">
            Our satellite IoT devices are engineered to deliver unmatched reliability, security, and performance in the most challenging extraterrestrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-senseLive-blue/50 backdrop-blur-sm p-8 rounded-lg border border-senseLive-teal/20 hover:border-senseLive-teal/50 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-senseLive-teal/10 w-fit mb-5 group-hover:bg-senseLive-teal/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-senseLive-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {feature.description}
              </p>
              
              {/* Tech decoration line */}
              <div className="w-12 h-1 bg-senseLive-teal/30 mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
