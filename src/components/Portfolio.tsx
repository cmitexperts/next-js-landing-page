/**
 * @author CMITEXPERTS
 * @website www.cmitexperts.com
 */

import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with real-time inventory management.',
    image: '/portfolio/demo1.png', 
    category: 'Web Development'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    description: 'User-friendly mobile application with intuitive interface.',
    image: '/portfolio/demo2.png',
    category: 'UI/UX Design'
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Complete brand identity design for a tech startup.',
    image: '/portfolio/demo3.png',
    category: 'Branding'
  },
  {
    id: 4,
    title: 'Dashboard Design',
    description: 'Analytics dashboard with real-time data visualization.',
    image: '/portfolio/demo4.png',
    category: 'Web Development'
  },
  {
    id: 5,
    title: 'Marketing Website',
    description: 'Responsive marketing website with modern design.',
    image: '/portfolio/demo5.png',
    category: 'Web Development'
  },
  {
    id: 6,
    title: 'Product Design',
    description: 'Innovative product design with user-centered approach.',
    image: '/portfolio/demo6.png',
    category: 'Product Design'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 