import { CaseStudy } from '../types'

export const case3: CaseStudy = {
  id: 3,
  title: 'Configure, Price, Quote system designed to simplify complex pricing scenarios.',
  description: 'Creating a new user journey for the sales team to be able to configure and quote products to the customers.',
  tags: ['System Design', 'Prototyping', 'Service Design'],
  logo: '/logos/case3.svg',
  bgColor: '#1E1E1E',
  content: {
    overview: 'Developing a new platform for the sales team to be able to configure and quote products to the customers. Taking complex products with next to endless options and configurations and making it easy for the sales team to configure and quote.',
    challenge: 'Taking an existing user behaviour and experience based on a google spreadsheet and making it digital, while still keeping the products as flexible and dynamic as the previous way of working. Simplifying and streamlining the process for the sales team but also making it easy to understand for newer team members ',
    solution: 'Designed a dynamic pricing engine with real-time configuration updates. Supporting the sales team with an experience similar to the wizard flow we are used to in the digital world, making the process step by step based while still giving the user maximum information and transparency about both the products and the final quote at all stages. Handling errors and validation of all inputs to ensure a smooth and error free experience.',
    results: 'Reduced the quote generation time from 3-4 days to 1-3 hours, while also reducing the amount of errors and misunderstandings between the sales team and the customers. At the same time, we created a framwork that is reusable and adaptable to other products and markets.',
    images: {
      main: '/src/assets/veolia-main.png',
      process: [
        '/images/case3/process1.jpg',
        '/images/case3/process2.jpg'
      ],
      final: [
        '/images/case3/final1.jpg',
        '/images/case3/final2.jpg'
      ]
    }
  }
} 