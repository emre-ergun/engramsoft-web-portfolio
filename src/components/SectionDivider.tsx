import { motion } from 'framer-motion';

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className='bg-gray-400 mb-32 mt-10 h-20 w-1 rounded-full hidden sm:block'
    ></motion.div>
  );
}

export default SectionDivider;
