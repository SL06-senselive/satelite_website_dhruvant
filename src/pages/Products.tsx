import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Radio,
  Wifi,
  Zap,
  Shield,
  MapPin,
  Thermometer,
  Lock,
  PlugZap,
  Antenna,
  Cable
} from "lucide-react";

import ProductSpecification from "@/components/ui/productspecification";

const Products = () => {
  const products = [

    {
      id: "viasat",
      title: "L-Band Dhruvant Transponder",
      subtitle: "Viasat Satellite Connectivity",
      image: "src/assets/visat_2.png",
      description: "The L-Band Dhruvant Transponder with Viasat connectivity provides robust and reliable satellite communications for industrial IoT applications in challenging environments.",
      specs: [
        { name: "Network", value: "Viasat Satellite Connectivity" },
        { name: "Frequency Band", value: "L-Band" },
        { name: "Data Transmission", value: "Uplink: 6.2 kb / Downlink: 10 kb" },
        { name: "Power Supply", value: "12V DC" },
        { name: "Antenna Type", value: "Integrated or External (Omnidirectional)" },
        { name: "Interface", value: "UART, RS-232, RS-485, GPIO" },
        { name: "GPS Support", value: "GNSS (GPS, GLONASS, Galileo) Support" },
        { name: "Enclosure", value: "IP67+ Weatherproof Enclosure" },
        { name: "Temperature Range", value: "-30°C to +85°C" },
        { name: "Security", value: "AES Encryption, Secure Over-the-Air (OTA) Updates" }
      ],
      icons: [
        { icon: <Cable className="h-5 w-5" />, text: "10 kb Downlink" },
        { icon: <PlugZap className="h-5 w-5" />, text: "OTA Updates" },
        { icon: <Thermometer className="h-5 w-5" />, text: "Extended Temp Range" },
        { icon: <Shield className="h-5 w-5" />, text: "IP67+ Rated" }
      ]
    },
    {
      id: "nbiot",
      title: "Dhruvant NB-IoT NTN Transponder",
      subtitle: "NB-IoT Over Satellite (3GPP Release 17)",
      image: "src/assets/visat_2.png",
      description: "The Dhruvant D2D Transponder is compliant with GSMA 3GPP Release 17 standards, enabling NB-IoT over satellite for extended connectivity in remote applications.",
      specs: [
        { name: "Network", value: "NB-IoT Over Satellite (GSMA 3GPP Release 17)" },
        { name: "Frequency Band", value: "S-Band / L-Band" },
        { name: "Data Transmission", value: "Low-Power Wide-Area (LPWA) Transmission" },
        { name: "Power Supply", value: "12V DC" },
        { name: "Antenna Type", value: "External High-Gain NB-IoT Antenna" },
        { name: "Interface", value: "UART, I2C, SPI, RS-485" },
        { name: "GPS Support", value: "GNSS Support for Location Tracking" },
        { name: "Enclosure", value: "IP67+ Ruggedized Enclosure" },
        { name: "Temperature Range", value: "-40°C to +85°C" },
        { name: "Security", value: "Secure Boot, End-to-End Data Encryption" }
      ],
      icons: [
        { icon: <Wifi className="h-5 w-5" />, text: "LPWA Transmission" },
        { icon: <Zap className="h-5 w-5" />, text: "Low Power" },
        { icon: <Antenna className="h-5 w-5" />, text: "High-Gain Antenna" },
        { icon: <Lock className="h-5 w-5" />, text: "Secure Boot" }
      ]
    }
  ];

  return (
    <>
      {/* Products Hero */}
      <div className="bg-senseLive-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Satellite IoT Devices</h1>
            <p className="text-xl text-gray-300">
              Our range of satellite IoT devices provides reliable connectivity in the most challenging environments, designed for industries that operate in remote regions.
            </p>
          </div>
        </div>
      </div>

      {/* Products Listing */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-1">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className={`mb-8 flex ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-80 h-80 object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="text-sm text-senseLive-teal font-medium mb-2">{product.subtitle}</div>
                    <h2 className="text-2xl font-bold text-senseLive-blue mb-4">{product.title}</h2>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                      {product.icons.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-2 text-senseLive-teal">
                            {item.icon}
                          </div>
                          <span className="text-sm text-gray-600">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-semibold mb-4 text-senseLive-blue">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-medium text-gray-700">{spec.name}: </span>
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {/* <Button className="bg-senseLive-teal hover:bg-senseLive-darkTeal">
                        Download Datasheet
                      </Button> */}
                      
                      <a href="https://form.jotform.com/251402056920447" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-senseLive-teal hover:bg-senseLive-darkTeal">
                          Request a Quote
                        </Button>
                      </a>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Product Specification */}
      <div className="py-16 bg-gray-50">
        <div className="text-center max-w-3xl mx-auto mb-2">
          <h2 className="text-3xl font-bold text-senseLive-blue">Product Specifications</h2>
        </div>
        <div className="container mx-auto px-2">
          <ProductSpecification />
        </div>
      </div>

      {/* Product Features */}

      {/* Certifications */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-2 text-senseLive-blue">Compliance & Certifications</h2>
            <p className="text-gray-600">
              Our satellite IoT devices meet the highest industry standards to ensure reliability, security, and performance.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-senseLive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">GSMA 3GPP Release 17</h3>
                <p className="text-sm text-gray-600">NB-IoT over NTN Satelite</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-senseLive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">ViaSat </h3>
                <p className="text-sm text-gray-600">Approval in Progress</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-senseLive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600">Certified manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
