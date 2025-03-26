import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CaseCard from '../components/CaseCard'
import { caseStudies } from '../data/case-studies'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

const Case: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="min-h-screen bg-white pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-left">Case Studies</h1>
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-black group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to start
          </Link>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {caseStudies.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              {...caseItem}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Case 