import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CaseCard from './CaseCard'
import { caseStudies } from '../data/case-studies'
import { CaseStudy } from '../data/types'

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

const HomeCases: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="mb-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">An insight into my work</h2>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {caseStudies.map((caseItem: CaseStudy) => (
            <CaseCard
              key={caseItem.id}
              {...caseItem}
              compact={true}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HomeCases 