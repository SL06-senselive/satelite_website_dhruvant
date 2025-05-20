import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Solutions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial tab from query params or default
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "oil-gas";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync tab with URL changes (e.g., browser navigation)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab") || "oil-gas";
    setActiveTab(tab);
  }, [location.search]);

  // When user switches tab, update state and URL
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(location.search);
    params.set("tab", tab);
    navigate({ search: params.toString() }, { replace: true });
  };

  const industries = [
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: "src/assets/oil-rig.png",
      banner: "src/assets/oil_2.jpg",
      description: "Our satellite IoT solutions enable real-time monitoring and control of remote oil and gas assets, improving operational efficiency and safety while reducing downtime.",
      challenges: [
        "Remote pipeline monitoring in areas without cellular coverage",
        "Equipment diagnostics and predictive maintenance",
        "Environmental compliance and leak detection",
        "Worker safety in hazardous locations"
      ],
      solutions: [
        {
          title: "Asset Tracking",
          description: "Real-time tracking of vehicles, equipment, and personnel across remote oil fields and offshore platforms."
        },
        {
          title: "Pipeline Monitoring",
          description: "Continuous monitoring of pipeline integrity, pressure, and flow with immediate alerts for anomalies."
        },
        {
          title: "Predictive Maintenance",
          description: "AI-driven analytics to predict equipment failures before they occur, minimizing downtime."
        },
        {
          title: "Environmental Monitoring",
          description: "Automated monitoring for gas leaks, spills, and other environmental compliance parameters."
        }
      ]
    },
    {
      id: "maritime",
      name: "Maritime & Fisheries",
      icon: "src/assets/cruise.png",
      banner: "src/assets/maritime_2.png",
      description: "Keep your maritime operations connected with reliable satellite IoT solutions that ensure vessel tracking, safety monitoring, and efficient fleet management across global waters.",
      challenges: [
        "Vessel tracking in remote ocean regions",
        "Crew safety and emergency communications",
        "Fuel consumption optimization",
        "Regulatory compliance and reporting"
      ],
      solutions: [
        {
          title: "Vessel Tracking",
          description: "Real-time tracking and monitoring of vessels for improved fleet management and regulatory compliance."
        },
        {
          title: "Emergency Alert Systems",
          description: "Satellite-based SOS and emergency communications for crew safety in remote waters."
        },
        {
          title: "Fuel Monitoring",
          description: "Real-time fuel consumption tracking to optimize routes and reduce operational costs."
        },
        {
          title: "Environmental Compliance",
          description: "Automated monitoring and reporting for emissions and discharge regulations."
        }
      ]
    },
    {
      id: "agriculture",
      name: "Agriculture",
      icon: "src/assets/agriculture.png",
      banner: "src/assets/agriculture_2.png",
      description: "Transform agricultural operations with satellite IoT solutions that provide real-time insights on soil conditions, crop health, and irrigation systems across remote farmlands.",
      challenges: [
        "Remote farm monitoring without cellular coverage",
        "Water management and irrigation optimization",
        "Weather monitoring and disaster preparation",
        "Livestock tracking and management"
      ],
      solutions: [
        {
          title: "Smart Irrigation",
          description: "Remote monitoring and control of irrigation systems to optimize water usage based on soil conditions."
        },
        {
          title: "Weather Stations",
          description: "Real-time weather data collection for improved crop management and disaster preparation."
        },
        {
          title: "Livestock Tracking",
          description: "GPS tracking and health monitoring of livestock across large, remote grazing areas."
        },
        {
          title: "Crop Monitoring",
          description: "Sensor-based monitoring of soil conditions, moisture levels, and crop health indicators."
        }
      ]
    },
    {
      id: "energy",
      name: "Utilities & Energy",
      icon: "src/assets/renewable-energy.png",
      banner: "src/assets/energy_2.jpg",
      description: "Optimize utility and energy operations with satellite IoT solutions for remote infrastructure monitoring, grid management, and predictive maintenance of critical assets.",
      challenges: [
        "Remote power grid monitoring",
        "Renewable energy asset management",
        "Power outage detection and response",
        "Infrastructure security in isolated locations"
      ],
      solutions: [
        {
          title: "Smart Grid Monitoring",
          description: "Real-time monitoring of power distribution networks with immediate fault detection and alerts."
        },
        {
          title: "Renewable Asset Management",
          description: "Remote monitoring and optimization of solar, wind, and hydro installations in isolated locations."
        },
        {
          title: "Substation Security",
          description: "Advanced security monitoring for remote substations and critical infrastructure."
        },
        {
          title: "Predictive Maintenance",
          description: "AI-driven analytics to predict equipment failures and optimize maintenance schedules."
        }
      ]
    },
    {
      id: "logistics",
      name: "Logistics & Fleet",
      icon: "src/assets/logistics.png",
      banner: "src/assets/logistics_2.jpg",
      description: "Enhance logistics and fleet operations with satellite IoT solutions that provide continuous tracking, route optimization, and vehicle diagnostics across all terrains and regions.",
      challenges: [
        "Fleet tracking in remote areas",
        "Cold chain monitoring for sensitive cargo",
        "Vehicle diagnostics and maintenance",
        "Route optimization for fuel efficiency"
      ],
      solutions: [
        {
          title: "Asset Tracking",
          description: "Real-time tracking of vehicles, containers, and high-value cargo across global supply chains."
        },
        {
          title: "Vehicle Telemetry",
          description: "Comprehensive monitoring of vehicle health, driver behavior, and maintenance needs."
        },
        {
          title: "Cold Chain Monitoring",
          description: "Temperature and condition monitoring for sensitive cargo during transport."
        },
        {
          title: "Route Optimization",
          description: "Data-driven route planning and optimization for improved efficiency and reduced costs."
        }
      ]
    }
  ];

  function handleRedirect() {
    window.location.href = "https://form.jotform.com/251362942176055";
  }

  return (
    <>
      {/* Solutions Hero */}
      <div className="bg-senseLive-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Industry Solutions</h1>
            <p className="text-xl text-gray-300">
              Our satellite IoT solutions are tailored to meet the specific challenges of industries operating in remote and challenging environments.
            </p>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="mb-8 overflow-x-auto pb-4">
              <TabsList className="h-auto p-1 bg-gray-100 border border-gray-200 inline-flex min-w-max">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="flex items-center gap-2 py-3 px-5 data-[state=active]:bg-white"
                  >
                    <img src={industry.icon} alt={industry.name} className="w-6 h-6 object-contain" />
                    <span>{industry.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={industry.banner} 
                      alt={industry.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-senseLive-blue mb-4">
                      {industry.name} Solutions
                    </h2>
                    <p className="text-gray-600 mb-8">{industry.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-senseLive-blue">Key Challenges</h3>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-senseLive-teal mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <span className="text-gray-600">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4 text-senseLive-blue">Our Approach</h3>
                        <p className="text-gray-600 mb-4">
                          We deliver end-to-end satellite IoT solutions tailored specifically for the {industry.name.toLowerCase()} industry, addressing the unique operational challenges and regulatory requirements.
                        </p>
                        <Button 
                          className="bg-senseLive-teal hover:bg-senseLive-darkTeal" 
                          onClick={handleRedirect}
                        >
                          Request Consultation
                        </Button>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-6 text-senseLive-blue">Solution Components</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {industry.solutions.map((solution, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-senseLive-teal hover:shadow-md transition-all">
                          <h4 className="font-semibold text-lg mb-3 text-senseLive-blue">{solution.title}</h4>
                          <p className="text-sm text-gray-600">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Solutions;