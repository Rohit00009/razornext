import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          TakeHub
        </motion.h1>

        <motion.span
          className="text-5xl"
          animate={{
            x: [0, 15, 0],
            rotate: [0, -10, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🛒
        </motion.span>
      </motion.div>
    </div>
  );
}
