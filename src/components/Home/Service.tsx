"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Plus } from "lucide-react"

interface ServiceItem {
  id: number
  title: string
  content: string
  icon: string
  isActive?: boolean
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Consulting",
    content:
      "We provide expertise, capacity, and implementation support for our clients, helping them understand and mobilize their solutions in addressing complex social challenges, including housing, food security, community economic development, community transit, literacy, education, and social services.",
    icon: "images/da-fea_icon01.svg",
  },
  {
    id: 2,
    title: "Training",
    content:
      "Our comprehensive training offerings cater to individuals at all experience levels, from beginners to seasoned professionals. We empower nonprofits and government teams with the skills and knowledge necessary to develop sustainable models and conduct comprehensive impact measurement.",
    icon: "images/da-fea_icon02.svg",
    isActive: true,
  },
  {
    id: 3,
    title: "Ecosystem Development",
    content:
      "We are passionate about nurturing ecosystems that foster social purpose businesses and community growth. By working with us, governments and nonprofits can harness our experience to create environments where social entrepreneurs can thrive, helping to drive positive change at scale.",
    icon: "images/da-fea_icon03.svg",
  },
  {
    id: 4,
    title: "Community Programming",
    content:
      "We specialize in assisting social entrepreneurs and entrepreneurs that face systemic barriers create thriving, sustainable enterprises. While entrepreneurs focus on their businesses, we provide invaluable just-in-time coaching and resources, enabling them to grow and succeed.",
    icon: "images/da-fea_icon04.svg",
  },
]

export default function Service() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [visibleServices, setVisibleServices] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile view
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's md breakpoint
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    // Intersection Observer for scroll animations (mobile only)
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = Number(entry.target.getAttribute('data-service-id'))
              setVisibleServices((prev) => [...prev, id])
            }
          })
        },
        { threshold: 0.1 }
      )

      document.querySelectorAll('.service-card').forEach((card) => {
        observer.observe(card)
      })

      return () => {
        observer.disconnect()
        window.removeEventListener('resize', checkIfMobile)
      }
    }

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [isMobile])

  const getServiceBackground = (index: number) => {
    const backgrounds = [
      "bg-gradient-to-br from-red-100 to-white",
      "bg-gradient-to-br from-blue-200 to-white",
      "bg-gradient-to-br from-green-100 to-white",
      "bg-gradient-to-br from-cyan-100 to-white",
    ]
    return backgrounds[index]
  }

  const shouldShowContent = (id: number) => {
    // On mobile: show when scrolled into view or hovered (if somehow hovered on mobile)
    // On desktop: show when hovered or isActive
    return isMobile 
      ? visibleServices.includes(id) || hoveredService === id
      : hoveredService === id
  }

  return (
    <section
      className="relative py-24 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative z-10 px-4 mx-auto">
        {/* Section Header */}
        <div className="flex justify-center mb-12">
          <div className="max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src="/images/flower-icon-blue.svg" alt="Flower icon" className="w-5 h-5" />
              <span className="font-medium tracking-wide text-blue-600 uppercase">Our Services</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Our Services</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We provide tailored services that meet the unique needs of those who are driven to make social and
              economic impact in their communities. Our expertise supports those navigating the complex landscape of
              social impact and community development.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-6 lg:flex-row mb-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-service-id={service.id}
              className={`
                service-card relative group cursor-pointer transition-all duration-500 ease-in-out
                ${service.isActive ? "lg:w-[45%]" : "lg:w-[32%]"}
                ${getServiceBackground(index)}
                rounded-2xl p-8 lg:p-12 overflow-hidden
                hover:shadow-xl
              `}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Icon */}
              <div className="mb-12 transition-transform duration-300 group-hover:scale-110">
                <img src={service.icon || "/placeholder.svg"} alt={`${service.title} icon`} className="w-16 h-16" />
              </div>

              {/* Title */}
              <h3 className="mb-8 text-2xl font-bold text-gray-900 lg:text-3xl max-w-60">{service.title}</h3>

              {/* Arrow - Hidden when content is shown */}
              <div
                className={`
                  absolute bottom-12 left-8 transition-all duration-300
                  ${
                    shouldShowContent(service.id) || service.isActive
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }
                `}
              >
                <ArrowRight className="w-8 h-8 text-blue-600 transform -rotate-45" />
              </div>

              {/* Content - Shown on scroll (mobile) or hover (desktop) */}
              <div
                className={`
                  transition-all duration-400 ease-in-out
                  ${
                    shouldShowContent(service.id) || service.isActive
                      ? "opacity-100 translate-y-0 delay-300"
                      : "opacity-0 translate-y-5"
                  }
                `}
              >
                <p className="font-medium leading-relaxed text-gray-700">{service.content}</p>
              </div>

              {/* Overlay Link */}
              <a href="#" className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 hover:shadow-lg group">
            <span className="mr-2">Book a Discover Call</span>
            <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>
      </div>
    </section>
  )
}