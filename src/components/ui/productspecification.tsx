import { useState, useRef, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const ProductSpecification = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(`${height}px`);
      } else {
        setContentHeight("0px");
      }
    }
  }, [isExpanded]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const specData = [
    { category: "Purpose", details: "Universal satellite IoT device for industrial equipment data transmission & remote control" },
    { category: "Connectivity", details: "Satellite (Geo & LEO-based), Industrial Protocols (Modbus RTU, RS485, CAN, 4–20mA, Digital I/O)" },
    { category: "Supported Networks", details: "Viasat  / Iridium / NTN / Sateliot (customizable per geography & use case)" },
    { category: "Data Modes", details: "Bi-directional communication (Telemetry + Command)" },
    { category: "Use Cases", details: "Oil & Gas, Mining, Utilities, Agriculture, Defence, Maritime, Environmental Monitoring" },
    { category: "Integration", details: "Compatible with PLCs, SCADA, RTUs, sensors, meters, and industrial gateways" },
    { category: "Power Supply", details: "Battery/solar/DC powered (configurable), intelligent power-saving system" },
    { category: "Power Consumption", details: "Ultra-low power mode for long field life" },
    { category: "Enclosure", details: "Rugged industrial housing, IP67+ rated, UV & chemical resistant" },
    { category: "Temperature Range", details: "-40°C to +85°C" },
    { category: "Mounting", details: "Flange, Pole, or Panel Mount" },
    { category: "Compliance", details: "RoHS, EMI/EMC, FCC, IC, CE (Planned), PESO Zone 2 " },
    { category: "Key Features", details: "Edge data logging, command response, over-temp/tamper alerts, internal storage, OTA support" },
    { category: "Protocols", details: "Modbus RTU, RS232, RS485, CAN, Analog (4–20mA), Digital I/O" },
    { category: "Reliability", details: "MIL-STD-810G tested for shock, vibration, humidity, solar, and altitude" },
    { category: "Installation", details: "Plug-and-play, configurable over air, minimal maintenance" }
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <button
            className="p-2 rounded-full hover:bg-blue-100 bg-blue-50 text-blue-600"
            onClick={handleToggleExpand}
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        <div
          ref={contentRef}
          style={{ height: contentHeight }}
          className="transition-all duration-500 ease-in-out overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/4 p-3 text-left text-white font-semibold border border-gray-300" style={{ backgroundColor: 'rgb(51, 195, 240)' }}>
                    Category
                  </th>
                  <th className="w-3/4 p-3 text-left text-white font-semibold border border-gray-300" style={{ backgroundColor: 'rgb(51, 195, 240)' }}>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {specData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors duration-150 text-black`}
                  >
                    <td className="p-3 border border-gray-300 font-medium text-black">{row.category}</td>
                    <td className="p-3 border border-gray-300 text-black">
                      {row.details}
                      {row.category === "Compliance" && (
                        <>
                          <span className="text-red-600 font-semibold ml-1">*</span>
                          <span className="text-red-500 ml-2">(In progress)</span>
                        </>
                      )}
                      {(row.category === "Connectivity" ||
                        row.category === "Reliability" ||
                        row.category === "Enclosure") && (
                          <span className="text-red-600 font-semibold ml-1">*</span>
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <div>{specData.length} items</div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
