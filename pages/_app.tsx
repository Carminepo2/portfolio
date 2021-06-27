import "../styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const pageTransitionVariants = {
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route} variants={pageTransitionVariants} initial="hidden" animate="visible" exit="exit">
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
