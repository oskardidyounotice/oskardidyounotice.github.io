import { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface CaseCardProps {
  id: number
  title: string
  description: string
  tags: string[]
}

const CaseCard: FC<CaseCardProps> = ({ id, title, description, tags }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <Link to={`/case/${id}`} className="block">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-48 md:h-auto">
            <img
              src={`/case-${id}.png`}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">{title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2 text-left">{description}</p>
            <div className="flex items-center justify-between mt-20">
              <span className="text-sm font-medium text-black flex items-center">
                Read more
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CaseCard 