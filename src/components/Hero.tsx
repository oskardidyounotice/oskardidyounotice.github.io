import { FC } from 'react'
import { motion } from 'framer-motion'
import { HeroProps } from '../data/types'
import { useMediaQuery } from 'react-responsive'

const Hero: FC<HeroProps> = ({ name, tagline, email, linkedIn }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const scrollToContent = () => {
    const homeCases = document.getElementById('home-cases')
    if (homeCases) {
      homeCases.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <img
          src="/illustration.png"
          alt="Hero illustration"
          className={`${isMobile ? 'w-full' : 'w-1/2'} m-auto object-cover`}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-5xl md:text-6xl'} font-bold text-gray-900 mb-6`}
        >
          {name}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className={`${isMobile ? 'text-base' : 'text-lg sm:text-xl md:text-2xl'} text-gray-600 mb-8 max-w-3xl mx-auto`}
        >
          {tagline}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href={`mailto:${email}`}
            className={`${isMobile ? 'w-full' : ''} px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base`}
          >
            {email}
          </a>
          <a 
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={`${isMobile ? 'w-full' : ''} px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors text-sm sm:text-base`}
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
      
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-32 transform -translate-x-1/2 cursor-pointer bg-white w-16 h-16 flex item-center justify-center outline-none focus:outline-none"
        style={{ backgroundColor: 'white', border: '1px solid white' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-gray-600 hover:text-black flex items-center justify-center"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero 