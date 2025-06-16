/**
 * @author CMITEXPERTS
 * @website www.cmitexperts.com
 */

import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    content: "The attention to detail and level of professionalism is outstanding. I couldn't be happier with the results.",
    author: "Michael Chen",
    role: "Founder, InnovateX",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    content: "They transformed our vision into reality. The team's expertise and dedication are truly remarkable.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    image: "/testimonials/emily.jpg"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-12">
                <div className="mb-4">
                  <svg
                    className="h-8 w-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">
                  {testimonial.content}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 