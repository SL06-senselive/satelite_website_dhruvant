import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState, useEffect } from "react";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const highlightedCountries = [
  "India",
  "Egypt",
  "Brazil",
  "Saudi Arabia",
  "United Arab Emirates",
  "United States of America",
  "Australia",
  "China",
  "France",
  "South Africa",
];

const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch(geoUrl);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setGeoData(data);
      } catch (err) {
        setError(`Failed to load map: ${err.message}`);
      }
    };
    fetchGeoData();
  }, []);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!geoData) return <div className="text-center">Loading map...</div>;

  return (
    <div className="w-full">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // Log properties to verify name
              console.log("Country:", geo.properties.name);
              const countryName = geo.properties.name || "";
              const isHighlighted = highlightedCountries.includes(countryName);
              if (isHighlighted) {
                console.log(`Highlighting: ${countryName}`);
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => setSelectedCountry(countryName)}
                  style={{
                    default: {
                      fill: isHighlighted ? "#33C3F0" : "#E5E7EB",
                      stroke: "#ffffff",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#0ea5e9",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#0f766e",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {selectedCountry && (
        <p className="text-center mt-4 font-medium text-senseLive-purple">
          Selected Country: {selectedCountry}
        </p>
      )}
    </div>
  );
};

export default WorldMap;