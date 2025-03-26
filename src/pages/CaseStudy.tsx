import { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/case-studies'
import { CaseStudy as CaseStudyType } from '../data/types'
import { useMediaQuery } from 'react-responsive'
import { HeroProps } from '../data/types'

const CaseStudy: FC<HeroProps> = ({ email, linkedIn }) => {
  const { id } = useParams<{ id: string }>()
  const caseStudy = caseStudies.find(cs => cs.id === Number(id))
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case study not found</h1>
          <Link to="/case" className="text-blue-600 hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="min-h-screen bg-white pt-8 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[620px] mx-auto">
          <Link 
            to="/case" 
            className="inline-flex items-center text-gray-600 hover:text-black mb-8 group"
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
            Back to Cases
          </Link>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {caseStudy.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8 justify-center"
          >
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm "
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              {caseStudy.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="aspect-video w-full mb-12 rounded-lg overflow-hidden"
          >
            <img
              src={`/case-${id}.png`}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {Object.entries(caseStudy.content)
            .filter(([key]) => key !== 'images')
            .map(([key, value], index) => (
              <motion.section
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                <p className="text-gray-600 leading-relaxed">{value as string}</p>
              </motion.section>
            ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
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
      </div>
    </motion.div>
  )
}

export default CaseStudy 