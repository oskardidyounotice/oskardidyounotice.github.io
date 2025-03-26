import { CaseStudy } from '../types'

export const case1: CaseStudy = {
  id: 1,
  title: 'Re-defining the interactions in an order management system',
  description: 'Rethinking the order management system from the ground up to improve efficiency and reduce errors. While also introducing a new way of working for the users.',
  tags: ['Re-design', 'Prototyping', 'User Testing'],
  logo: '/logos/case1.svg',
  bgColor: '#000000',
  content: {
    overview: 'A comprehensive redesign of an internal order management system that processes thousands of orders yearly. The project focused on improving efficiency and reducing errors in the order processing workflow.',
    challenge: 'The existing system was outdated and filled with outdated functionality that was not used by the users. With an outdated UI design and lack of consistency due to a long development history, the system lacked a clear purpose and direction.',
    solution: 'We conducted a thorough analysis of the existing system and developed a new design that is more user-friendly and efficient. The new design includes a new modular user interface which encourages greater personalization, aimed at making the workers more efficient while giving the system a consistent look and feel.',
    results: 'The new system was met with positive feedback from the stakeholders and the users and is currently being developed. ',
    images: {
      main: '/src/assets/hastens-main.png',
      process: [
        '/images/case1/process1.jpg',
        '/images/case1/process2.jpg'
      ],
      final: [
        '/images/case1/final1.jpg',
        '/images/case1/final2.jpg'
      ]
    }
  }
} 