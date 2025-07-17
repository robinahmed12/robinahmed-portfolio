import React, { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showSuccessAlert = () => {
    // Create custom sweet alert
    const alertDiv = document.createElement("div");
    alertDiv.className =
      "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50";
    alertDiv.innerHTML = `
      <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md mx-4 transform transition-all duration-300 scale-95 animate-pulse">
        <div class="text-center">
          <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
            <svg class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-slate-900 dark:text-gray-100 mb-2">Message Sent Successfully!</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
            Close
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(alertDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.remove();
      }
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);

    // Show success alert
    showSuccessAlert();

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactItems = [
    {
      icon: FaPhone,
      title: "Phone",
      value: "+88001716900294",
      href: "tel:++-88001716900294",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "01716900294",
      href: "https://wa.me/8801716900294",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "shawonahmed0294@gmail.com",
      href: "mailto:robinahmed2998@gmail.com",
      color: "text-red-600 dark:text-red-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Cumilla, Bangladesh",
      href: "#",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/robinahmed",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: FaGithub,
      href: "https://github.com/robinahmed",
      label: "GitHub",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <FaPaperPlane className="text-2xl text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-50 mb-4">
            Let's Work{" "}
            <span className="text-red-600 dark:text-red-400 relative">
              Together
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600 dark:bg-red-400 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new
            projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div
            className="lg:col-span-1 space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-slate-700"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-slate-700 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 dark:text-gray-50 mb-1">
                      {item.title}
                    </h3>
                    <a
                      href={item.href}
                      className="text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 break-all"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Availability Card */}
            <div
              className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 p-6 rounded-2xl shadow-lg text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FaClock className="text-2xl" />
                <h3 className="text-xl font-semibold">Availability</h3>
              </div>
              <p className="text-red-100 leading-relaxed">
                Currently available for freelance projects and full-time
                opportunities. Let's create something amazing together!
              </p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for work</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 ${social.color} text-slate-600 dark:text-slate-400`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-red-100">
                  I'd love to hear from you. Send me a message and I'll respond
                  as soon as possible.
                </p>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-800 dark:text-gray-50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-gray-50 placeholder-slate-400 dark:placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-800 dark:text-gray-50">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-gray-50 placeholder-slate-400 dark:placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-800 dark:text-gray-50">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-700 text-slate-800 dark:text-gray-50 placeholder-slate-400 dark:placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
