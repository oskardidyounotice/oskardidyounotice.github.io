import { FC } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const About: FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          {/* Two Column Layout */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            {/* Left Column - Text */}
            <div className="text-left" id="about-me">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm a passionate designer and developer focused on creating meaningful digital experiences. 
                With a strong foundation in both design and technology, I bridge the gap between user needs 
                and technical solutions. A strong believer in the communication and collaboration between teams to leverage the best possible results, both for the consumer and the business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Design</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• User Interface Design</li>
                    <li>• Figma (Expert)</li>
                    <li>• User Experience Design</li>
                    <li>• Prototyping</li>
                    <li>• Design Thinking</li>
                    <li>• Design Research</li>
                    <li>• Design Strategy</li>
                    <li>• Design Systems</li>
                    <li>• Design Process</li>
                    <li>• Web accessibility</li>
                    <li>• WCAG guidelines</li>
                    
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Development/Tech(hobby)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• React</li>
                    <li>• TypeScript</li>
                    <li>• HTML/CSS</li>
                    <li>• JavaScript</li>
                    <li>• Responsive Design</li>
                    <li>• Godot (GDScript)</li>
                    <li>• Adobe Suite</li>
                    <li>• Blender</li>
                    <li>• 3D-modeling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="aspect-square w-full max-w-md mx-auto"
              >
                <img
                  src="public/oskar-portrait.jpg"
                  alt="Oskar Sjöberg"
                  className="w-full h-full object-cover rounded-full shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={item}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h3>
            <div className="space-y-6 justify-center">
              <div className="text-center justify-center max-w-2xl m-auto">
                <h4 className="text-lg font-semibold text-gray-800">UX/UI Designer, UX Lead</h4>
                <p className="text-gray-600">NetConsult AB • 2022 - Present</p>
                <p className="text-gray-600 mt-2 ">
                  Started out fresh as the only UX-designer which meant creating a foundation for the UX-work, processes, 
                  tools, and documentation. While delivering design resources for the teams and current clients. Later also 
                  focusing on leveraging the business side with the UX-space. Worked with different initiatives aimed at aquiring 
                  new clients and contancts while delivering knowledge about relevant topics. Working continously with digital 
                  accessibility and user experience on all fronts, both in current projects but also writing articles and material 
                  for the company and teams. Applied relevant UX-research methods for active and potential clients with the goal 
                  of creating a new business angles as well as creating value for the clients.
                </p>
              </div>
              <div className="text-center justify-center max-w-2xl m-auto py-8">
                <h4 className="text-lg font-semibold text-gray-800">Software tester, Project leader, Productionmanager</h4>
                <p className="text-gray-600">ProvideIT • 2016 - 2021</p>
                <p className="text-gray-600 mt-2 ">
                Initially worked with quality assurance for our web-projects focusing on testing
                user interfaces and advanced administrative tools with diverse workflows and
                user roles. I later moved to project management due to my involvement and
                knowledge in the active projects, taking on more responsibility such as client
                communication, planning and strategy. With a strong foundation for the
                business and the industry i later moved on to become our in-house production
                manager, overseeing t he total production of our projects as well as planning
                and strategy. Focusing on delivering high quality solutions wit h an engaging
                user experience t hat are built to last.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 