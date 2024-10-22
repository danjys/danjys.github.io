import { motion } from 'framer-motion';
import WaterDropGrid from './WaterDrop';
import CustomName from './BubbleText';
import './contact.css';

const Contact = () => (
  <motion.section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className='paddingDiv'>
      <CustomName></CustomName>
      <WaterDropGrid></WaterDropGrid>
    </div>


  </motion.section>
);

export default Contact;