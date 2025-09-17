import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  SendHorizontal,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendEmail } from "@/integrations/Core";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await SendEmail({
        to: "yarramadaharishreddy@gmail.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yarramadaharishreddy@gmail.com",
      href: "mailto:yarramadaharishreddy@gmail.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-87905XXXX0",
      href: "tel:+9187905XXXX0",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: "#",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Harishreddyyarramada",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harish-reddy-yarramada-44aaa8287/",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:yarramadaharishreddy@gmail.com",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          Ready to collaborate on exciting projects or discuss opportunities?
          Let's connect and build something amazing together!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-60" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-cyan-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Send Message
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors duration-300 h-11 md:h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors duration-300 h-11 md:h-12"
                      />
                    </div>
                  </div>

                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors duration-300 h-11 md:h-12"
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors duration-300 resize-none min-h-[120px]"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 
             hover:from-cyan-600 hover:to-purple-600 text-white font-semibold 
             py-3 md:py-4 rounded-lg transform hover:scale-105 
             transition-all duration-300 disabled:opacity-50 
             disabled:cursor-not-allowed disabled:hover:scale-100
             flex items-center justify-center gap-2" // 👈 added flex center
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendHorizontal className="w-5 h-5" />{" "}
                        {/* 👈 removed mr-2 */}
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
                    >
                      Something went wrong. Please try again or contact me
                      directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-2 lg:order-2"
          >
            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div
                    className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    <info.icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold text-sm md:text-base break-words">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Connect with me
              </h3>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className="w-5 md:w-6 h-5 md:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 md:p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20"
            >
              <p className="text-gray-300 italic mb-2 text-sm md:text-base leading-relaxed">
                "Let's build the future together with innovative technology and
                creative solutions."
              </p>
              <p className="text-cyan-400 font-semibold text-sm md:text-base">
                - Yarramada Harish Reddy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
