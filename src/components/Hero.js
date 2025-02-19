import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
        <motion.div
          className="text-left pl-4 sm:pl-8 lg:pl-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm{" "}
            </motion.span>
            <TypeAnimation
              sequence={[
                "Ting-Chen Yen",
                1500,
                "Peggy",
                1000,
                "a Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary dark:text-primary-light"
              repeat={Infinity}
            />
            <span className="wave">👋</span>
          </h1>
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I'm a dual Master's student specializing in Cloud and Network
            Infrastructures, with a passion for leveraging cloud technologies to
            build impactful, user-friendly web applications.
          </motion.p>
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="https://github.com/chung-coder"
              className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1 .07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/tingchen-yen"
              className="text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
