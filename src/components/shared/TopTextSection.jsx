import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';

const TopTextSection = ({ title, subtitle }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subtitle}</p>
      <h2 className={styles.sectionHeadText}>{title}</h2>
    </motion.div>
  );
};

export default TopTextSection;
