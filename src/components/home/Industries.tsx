import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Industries = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const industries = [
    {
      title: "Oil & Gas",
      image: "src/assets/oil.jpg",
      description: "Pipeline monitoring, remote equipment diagnostics, and leak detection systems.",
      link: "/solutions",
      tabId: "oil-gas", // Add tabId to match Solutions component
    },
    {
      title: "Maritime & Fisheries",
      image: "src/assets/maritime.jpg",
      description: "Vessel tracking, emergency alerts, and comprehensive fleet monitoring solutions.",
      link: "/solutions",
      tabId: "maritime",
    },
    {
      title: "Utilities & Energy",
      image: "src/assets/energy.jpg",
      description: "Smart grid monitoring and renewable energy asset management systems.",
      link: "/solutions",
      tabId: "energy",
    },
    {
      title: "Agriculture",
      image: "src/assets/agriculture.jpg",
      description: "Remote irrigation monitoring and sensor-based automation for improved yields.",
      link: "/solutions",
      tabId: "agriculture",
    },
    {
      title: "Logistics & Fleet",
      image: "src/assets/logistics.jpg",
      description: "Asset tracking, vehicle telemetry, and predictive maintenance solutions.",
      link: "/solutions",
      tabId: "logistics",
    },
  ];

  const handleLearnMore = (tabId) => {
    // Navigate to Solutions page with the tabId as a query parameter
    navigate(`/solutions?tab=${tabId}`);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-senseLive-blue">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600">
            Our satellite IoT solutions power critical operations across multiple sectors, delivering reliable connectivity where it's needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.slice(0, 3).map((industry, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-senseLive-blue/90 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{industry.description}</p>
                  <button
                    onClick={() => handleLearnMore(industry.tabId)} // Use button with onClick
                    className="inline-flex items-center text-senseLive-teal hover:text-white mt-3 text-sm font-medium"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.slice(3, 5).map((industry, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-senseLive-blue/90 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{industry.description}</p>
                  <button
                    onClick={() => handleLearnMore(industry.tabId)} // Use button with onClick
                    className="inline-flex items-center text-senseLive-teal hover:text-white mt-3 text-sm font-medium"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-senseLive-teal hover:bg-senseLive-darkTeal">
            <Link to="/solutions">View All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;