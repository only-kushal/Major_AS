import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <div className="text-center py-16 md:py-20 px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          About <span className="text-green-500">CareerSaathi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-base md:text-lg text-gray-600"
        >
          CareerSaathi is an AI-powered smart interview platform designed
          to help students and professionals practice interviews with
          adaptive AI, smart follow-ups, and real-time performance feedback.
        </motion.p>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 px-4 md:px-6 bg-white"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-sm md:text-base">
          Our mission is to bridge the gap between academic learning and
          industry expectations by providing intelligent, affordable and
          accessible interview preparation for everyone.
        </p>
      </motion.div>

      {/* Team Section */}
      <div className="py-12 md:py-16 px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10"
        >
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

          {[
            {
              name: "Arpit Ranjan",
              role: "Founder & Lead Developer",
              desc: "AI & Full Stack Developer passionate about building intelligent career tools."
            },
            {
              name: "Kiran Kumari",
              role: "Frontend Developer",
              desc: "Responsible for UI/UX design and interactive user experience."
            },
            {
              name: "Kushal Kumar",
              role: "Backend Developer",
              desc: "Handles server architecture, APIs and database management."
            },
            {
              name: "Guddu Kumar",
              role: "AI Engineer",
              desc: "Works on AI logic, resume analysis and smart interview generation."
            },
            {
              name: "Vineet Kr. Singh",
              role: "Product Designer",
              desc: "Focuses on usability, branding and overall product vision."
            },
            {
              name: "Akash Kr. Singh",
              role: "Marketing & Strategy",
              desc: "Handles growth strategy, outreach and partnerships."
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 md:p-8 text-center"
            >
              <h3 className="text-lg md:text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-green-500 font-medium mt-2 text-sm md:text-base">
                {member.role}
              </p>
              <p className="text-gray-600 mt-4 text-xs md:text-sm">
                {member.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default About;