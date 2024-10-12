import { useScroll, motion, useTransform } from 'framer-motion';
import MatrixProfile from './MatrixProfile';

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
        <MatrixProfile />
  
        {/* Add more content below */}
      </motion.section>
    );
  };

  export default Home;