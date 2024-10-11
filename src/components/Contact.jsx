import { motion } from 'framer-motion';

const Contact = () => (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold">Get in Touch</h2>
    </motion.section>
  );

  export default Contact;