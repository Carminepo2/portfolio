import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { motion } from "framer-motion";

const pageTransitionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <motion.div variants={pageTransitionVariants} initial="hidden" animate="visible">
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
