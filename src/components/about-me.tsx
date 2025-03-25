import { motion } from 'framer-motion';

import { aboutMe } from '@/config/data';
import { hashKey } from '@/utils/string';

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {aboutMe.map((payload, index) => (
        <p
          key={hashKey(`about-me-${index}`)}
          className="mb-4 text-gray-600 dark:text-gray-400"
        >
          {payload}
        </p>
      ))}
    </motion.div>
  );
}

export default AboutMe;
