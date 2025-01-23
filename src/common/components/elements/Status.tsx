import { motion } from 'framer-motion';

const Status = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex items-center gap-2'>
        <motion.div
          className='h-2 w-2 rounded-full bg-red-400'
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        <span className='text-xs font-thin text-neutral-600 dark:text-neutral-400'>
          Student Staff UNNES TV
        </span>
      </div>
    </motion.div>
  );
};

export default Status;
