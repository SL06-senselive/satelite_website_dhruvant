import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Phone } from "lucide-react";
import WorldMap from "@/components/ui/worldmap";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-senseLive-teal via-senseLive-purple to-senseLive-orange mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our satellite IoT solutions? Our team is ready to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-senseLive-teal/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-senseLive-teal" />
              </div>
              <h3 className="font-medium text-lg mb-2">Email Us</h3>
              <p className="text-gray-500 mb-3">For general inquiries</p>
              <a href="mailto:info@dhruvant.com" className="text-senseLive-teal font-medium hover:underline">
                info@dhruvant.com
              </a>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center flex flex-col">
              <div className="w-12 h-12 mx-auto bg-senseLive-blue/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-senseLive-blue" />
              </div>
              <h3 className="font-medium text-lg mb-2">Call Us</h3>
              <a href="tel:+91-9518934783" className="text-senseLive-blue font-medium hover:underline mb-2">
                +91 9518934783
              </a>
              <a href="tel:+919518934783" className="text-senseLive-blue font-medium hover:underline">+91 9604070622</a>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 mx-auto bg-senseLive-purple/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-senseLive-purple" />
              </div>
              <h3 className="font-medium text-lg mb-2">Visit Us</h3>
              <p className="text-gray-500 mb-3">Our headquarters</p>
              <address className="not-italic text-senseLive-purple font-medium">
                GHRTBIF,<br /> Nagpur, Maharashtra, 440016
              </address>
            </div>
          </div>

          <div className="w-full my-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">Our Global Presence</h2>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-5xl h-auto"><WorldMap /></div>
              </div>
            </div>
          </div>

          {/* Embed JotForm Above Footer Using Iframe */}
<div className="mt-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4 sm:text-4xl">
      Get in Touch
    </h2>
    <p className="text-lg text-gray-600 text-center mb-8">
      Say hello, we’re always online.
    </p>
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <iframe
        src="https://form.jotform.com/251362942176055"
        className="w-full"
        style={{ height: "600px", border: "none" }}
        title="JotForm Contact Form"
        loading="lazy"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Contact;