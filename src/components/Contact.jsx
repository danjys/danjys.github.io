import { motion } from 'framer-motion';
import WaterDropGrid from './WaterDrop';
import CustomName from './BubbleText';

const Contact = () => (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <CustomName></CustomName>
        <WaterDropGrid></WaterDropGrid>
      </div>
      
  
    </motion.section>
  );

  export default Contact;