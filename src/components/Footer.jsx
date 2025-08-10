import { motion } from 'framer-motion';
import '../styles/footer.css';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Anu Ahish. Crafted with ❤️ and lots of coffee.
        </p>
      </div>
    </motion.footer>
  );
}
