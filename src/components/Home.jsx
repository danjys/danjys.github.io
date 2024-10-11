import WaterDropGrid from './WaterDrop';
import CustomName from './BubbleText';
import { useScroll, motion, useTransform } from 'framer-motion';

const Home = () => {
    const { scrollYProgress } = useScroll();
    
    // Transform the scroll progress to animate the SVG
    const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pt-20"
      >
        <CustomName></CustomName>
        <WaterDropGrid></WaterDropGrid>
  
        {/* Add more content below */}
      </motion.section>
    );
  };

  export default Home;