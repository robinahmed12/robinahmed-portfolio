import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
   useEffect(() => {
      document.title = "Contact";
    })

  return (
    <section id="contact" className="py-12 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-8 text-center">
          Get In <span className="text-[#DC2626]">Touch</span>
        </h2>

        <div data-aos="fade-up"
        data-aos-duration="3000" className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-[#F8FAFC] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#DC2626]">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#DC2626]">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1E293B]">Phone</h4>
                    <a
                      href="01716900294"
                      className="text-[#64748B] hover:text-[#DC2626] transition-colors"
                    >
                      01716900294
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#DC2626]">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1E293B]">WhatsApp</h4>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748B] hover:text-[#DC2626] transition-colors"
                    >
                      01716900294
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#DC2626]">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1E293B]">Email</h4>
                    <a
                      href="mailto:hello@robinahmed.com"
                      className="text-[#64748B] hover:text-[#DC2626] transition-colors"
                    >
                      robinahmed2998@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#DC2626]">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1E293B]">Location</h4>
                    <p className="text-[#64748B]">Cumilla, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FECACA] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
                Availability
              </h3>
              <p className="text-[#1E293B]">
                I'm currently available for work and full-time
                positions. Feel free to reach out for collaborations or just to
                say hello!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#DC2626]"
            >
              <h3 className="text-xl font-semibold text-[#1E293B] mb-6">
                Send Me a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1E293B] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1E293B] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1E293B] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-[#E2E8F0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-transparent transition-all"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DC2626] text-white py-3 px-6 rounded-md font-medium hover:bg-[#B91C1C] transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
