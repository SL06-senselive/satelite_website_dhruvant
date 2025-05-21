
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">

      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-senseLive-teal via-senseLive-purple to-senseLive-orange mb-4">
            About Dhruvant
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering global connectivity solutions with cutting-edge satellite IoT technology
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-senseLive-blue mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To connect the unconnected parts of our world through innovative satellite IoT solutions,
              enabling businesses to monitor, track, and communicate with their assets anywhere on Earth.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-senseLive-blue mb-4">Our Vision</h2>
            <p className="text-gray-700">
              A world where distance and remote locations are no longer barriers to connectivity,
              where every business has the ability to monitor and manage their assets globally in real-time.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-senseLive-teal/10 md:w-48 flex items-center justify-center p-6">
                <div className="h-44">
                  <img
                  src="src/assets/favicon.png"
                   className="h-44 w-auto object-cover rounded-full"
                  />
                  
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 mb-4">
                  Founded in 2018, Dhruvant emerged from a simple observation: despite living in a connected world,
                  vast portions of our planet remain offline due to their remote locations or challenging environments.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders, with backgrounds in telecommunications and satellite technology, set out to bridge this gap.
                  Starting with a small team of five engineers, we developed our first satellite IoT prototype that could
                  transmit data from anywhere on Earth.
                </p>
                <p className="text-gray-700">
                  Today, Dhruvant has grown into a leading provider of satellite IoT solutions serving industries from
                  maritime and agriculture to oil & gas and transportation. We've expanded our team 
                  across engineering, product development, and customer success, all driven by our passion to connect the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
              <div className="h-40 bg-gradient-to-r from-senseLive-blue to-senseLive-teal flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="src/assets/person/abhijeet.png"
                    alt="AR Logo"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Abhijeet Bhoyar</h3>
                <p className="text-gray-500 mb-3">
 Chief Organizing Officer (COO)</p>
                <p className="text-gray-700 text-sm">
A visionary leader driving global expansion and strategic growth. With deep expertise in Industry 4.0 and satellite IoT, Abhijeet leads international business development and forges partnerships that scale innovation across sectors and geographies.
                </p>
              </div>
            </div>


            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
              <div className="h-40 bg-gradient-to-r from-senseLive-purple to-senseLive-blue flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
                    <img
                    src="src\assets\person\piyush.png"
                    alt="PC Logo"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Piyush Charpe</h3>
                <p className="text-gray-500 mb-3">Chief Executive Officer (CEO)</p>
                <p className="text-gray-700 text-sm">
                 Piyush defines the company’s technology roadmap, drawing on extensive experience in advanced IoT architectures. He ensures Dhruvant’s solutions are robust, secure, and built for future global deployments.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
              <div className="h-40 bg-gradient-to-r from-senseLive-orange to-senseLive-purple flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="src/assets/person/mayur.png"
                    alt="Mayur Dafare"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Mayur Dafare</h3>
                <p className="text-gray-500 mb-3">Chief Technology Officer (CTO)</p>
                <p className="text-gray-700 text-sm">
                  An expert in scalable industrial IoT solutions, Mayur has led LoRa-based satellite IoT development projects, including deployments in collaboration with ISRO. He drives product innovation and ensures successful real-world implementation at scale.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-senseLive-teal/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-senseLive-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Reliability</h3>
              <p className="text-gray-700 text-sm">
                Our customers depend on our solutions in critical situations. We design for reliability in the most challenging environments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-senseLive-blue/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-senseLive-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-700 text-sm">
                We constantly push the boundaries of what's possible in satellite IoT, never settling for the status quo.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-senseLive-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-senseLive-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Customer Focus</h3>
              <p className="text-gray-700 text-sm">
                We listen closely to our customers' needs and design solutions that address their specific challenges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-senseLive-orange/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-senseLive-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Global Impact</h3>
              <p className="text-gray-700 text-sm">
                We're committed to making a positive difference worldwide by connecting the unconnected and enabling sustainable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
