"use client"

import { useState, useEffect } from "react"
import { Menu, X, Plus, Heart, User, BarChart3, Users, Star, FileText } from "lucide-react"

export default function Header() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full border-t-blue-600 animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="body-wrap">
      {/* Header */}
      <header
        className={`header-area fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isSticky ? "bg-white shadow-lg transform translate-y-0" : "bg-transparent transform translate-y-0"
        }`}
        style={{ top: isSticky ? "0" : "35px" }}
      >
        <div className={`xb-header transition-all duration-300 ${isSticky ? "py-3" : "py-0"}`}>
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="header-logo">
                <a href="/" className="block">
                  {isSticky ? (
                    <img src="images/logo07.svg" alt="Logo" className="w-auto h-10" />
                  ) : (
                    <img src="images/logo06.svg" alt="Logo White" className="w-auto h-10 brightness-0 invert" />
                  )}
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="items-center hidden xl:flex">
                <div className="main-menu-wrap">
                  <nav className="main-menu">
                    <ul className="flex items-center space-x-8">
                      {/* Who We Are */}
                      <li className="relative group">
                        <button
                          className={`px-4 py-5 text-sm font-medium transition-colors ${
                            isSticky ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"
                          }`}
                          onMouseEnter={() => setActiveMegaMenu("who-we-are")}
                        >
                          Who We Are
                        </button>

                        {/* Mega Menu */}
                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg p-8 transition-all duration-300 ${
                            activeMegaMenu === "who-we-are"
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4"
                          }`}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-1">
                              <h3 className="mb-4 text-2xl italic font-bold text-gray-900">About Us</h3>
                              <p className="mb-6 leading-relaxed text-gray-600">
                                We are a Canadian non-profit dedicated to building bridges of opportunity in a world
                                divided by inequality. We exist to ensure technology and education serve humanity, not
                                the other way around.
                              </p>
                              <a
                                href="/about"
                                className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                              >
                                Learn More →
                              </a>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                APPROACH
                              </span>
                              <div className="space-y-3">
                                <a
                                  href="/strategy"
                                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                                >
                                  Strategy
                                </a>
                                <a
                                  href="/leadership"
                                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                                >
                                  Leadership
                                </a>
                              </div>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                LEGAL
                              </span>
                              <div className="space-y-3">
                                <a
                                  href="/records"
                                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                                >
                                  Public Records
                                </a>
                                <a
                                  href="/licensing"
                                  className="block text-lg font-semibold text-gray-900 hover:text-blue-600"
                                >
                                  Licensing
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* What We Do */}
                      <li className="relative group">
                        <button
                          className={`px-4 py-5 text-sm font-medium transition-colors ${
                            isSticky ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"
                          }`}
                          onMouseEnter={() => setActiveMegaMenu("what-we-do")}
                        >
                          What We Do
                        </button>

                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white shadow-2xl rounded-lg p-8 transition-all duration-300 ${
                            activeMegaMenu === "what-we-do"
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4"
                          }`}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-3 gap-8 mb-6">
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                CONNECT PEOPLE
                              </span>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    Digital Equity & Poverty Relief
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Access, Devices & Training For Low-Income Communities
                                  </p>
                                </div>
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    Nonprofit Capacity Building
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Mentorship, Tools And Leadership For Charities
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                RALLY COMMUNITIES
                              </span>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    Education & Employment Upskilling
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Workshops And Pathways For Sustainable Careers
                                  </p>
                                </div>
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    Health & Wellbeing Access
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Innovative Digital Health For Underserved Groups
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                RESEARCH & ANALYSIS
                              </span>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                                    Impact Funding & Advocacy
                                  </h4>
                                  <p className="text-sm text-gray-600">Scaling Solutions And Funding Social Change</p>
                                </div>
                                <a
                                  href="/all-research"
                                  className="inline-block font-semibold text-blue-600 hover:text-blue-700"
                                >
                                  See All Research →
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="pt-6 border-t border-gray-200">
                            <a
                              href="/services"
                              className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                            >
                              Learn More About What We Do →
                            </a>
                          </div>
                        </div>
                      </li>

                      {/* What You Can Do */}
                      <li className="relative group">
                        <button
                          className={`px-4 py-5 text-sm font-medium transition-colors ${
                            isSticky ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"
                          }`}
                          onMouseEnter={() => setActiveMegaMenu("what-you-can-do")}
                        >
                          What You Can Do
                        </button>

                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg p-8 transition-all duration-300 ${
                            activeMegaMenu === "what-you-can-do"
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4"
                          }`}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-3 gap-8">
                            <div>
                              <h3 className="mb-4 text-2xl italic font-bold text-gray-900">Get Involved</h3>
                              <p className="mb-6 leading-relaxed text-gray-600">
                                From donating, volunteering, or partnering, there are many ways to support our mission
                                and uplift communities.
                              </p>
                              <a
                                href="/get-involved"
                                className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                              >
                                Learn More →
                              </a>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                ACT
                              </span>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">Volunteer</h4>
                                  <p className="text-sm text-gray-600">
                                    Offer Your Skills And Time For Real Community Impact
                                  </p>
                                </div>
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">Partner With Us</h4>
                                  <p className="text-sm text-gray-600">
                                    Join Our Network Of Changemakers And Businesses
                                  </p>
                                </div>
                                <div>
                                  <h4 className="mb-2 text-lg font-semibold text-gray-900">Attend An Event</h4>
                                  <p className="text-sm text-gray-600">Workshops, Talks, And Outreach Sessions</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                                DONATE
                              </span>
                              <div className="space-y-6">
                                <div className="flex items-start">
                                  <Heart className="w-5 h-5 mt-1 mr-3 text-blue-600" />
                                  <div>
                                    <h4 className="mb-2 text-lg font-semibold text-gray-900">Make A Donation</h4>
                                  </div>
                                </div>
                                <div className="flex items-start">
                                  <User className="w-5 h-5 mt-1 mr-3 text-blue-600" />
                                  <div>
                                    <h4 className="mb-2 text-lg font-semibold text-gray-900">Ways To Give</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* What We Fund */}
                      <li className="relative group">
                        <button
                          className={`px-4 py-5 text-sm font-medium transition-colors ${
                            isSticky ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"
                          }`}
                          onMouseEnter={() => setActiveMegaMenu("what-we-fund")}
                        >
                          What We Fund
                        </button>

                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg p-8 transition-all duration-300 ${
                            activeMegaMenu === "what-we-fund"
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4"
                          }`}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-3 gap-8">
                            <div>
                              <h3 className="mb-4 text-xl font-bold text-gray-900">
                                <em>Apply for Funding</em>
                              </h3>
                              <p className="mb-6 text-gray-600">
                                The Mozilla Foundation provides funding and resources to individuals, groups, and
                                organizations aligned with creating a more human-centered internet.
                              </p>
                              <a
                                href="/funding"
                                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
                              >
                                Learn more →
                              </a>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                OPPORTUNITIES
                              </span>
                              <a href="/awards" className="block group">
                                <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                                  Fellowship & Awards
                                </div>
                                <div className="text-sm text-gray-600">
                                  We recognize, support, and amplify leaders who work on issues impacting the health of
                                  the internet
                                </div>
                              </a>
                            </div>
                            <div>
                              <span className="block mb-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                COMMUNITY IMPACT
                              </span>
                              <div className="space-y-4">
                                <a href="/alumni" className="block group">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-600">Alumni</div>
                                  <div className="text-sm text-gray-600">
                                    A vibrant community of past fellows and awardees
                                  </div>
                                </a>
                                <a href="/collaborations" className="block group">
                                  <div className="font-semibold text-gray-900 group-hover:text-blue-600">
                                    Collaborations
                                  </div>
                                  <div className="text-sm text-gray-600">An ecosystem of donors working together</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* Blog */}
                      <li className="relative group">
                        <button
                          className={`px-4 py-5 text-sm font-medium transition-colors ${
                            isSticky ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-300"
                          }`}
                          onMouseEnter={() => setActiveMegaMenu("blog")}
                        >
                          Blog
                        </button>

                        {/* Blog Mega Menu */}
                        <div
                          className={`absolute top-full left-[-550px] w-screen max-w-4xl bg-white shadow-2xl rounded-lg p-8 transition-all duration-300 ${
                            activeMegaMenu === "blog"
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible translate-y-4"
                          }`}
                          onMouseLeave={() => setActiveMegaMenu(null)}
                        >
                          <div className="grid grid-cols-2 gap-12 mb-8">
                            <div>
                              <span className="block mb-6 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                FEATURED POSTS
                              </span>
                              <div className="space-y-8">
                                <div>
                                  <span className="block mb-3 text-xs font-semibold tracking-wide text-blue-600 uppercase">
                                    FELLOWSHIPS & AWARDS
                                  </span>
                                  <a href="/post1" className="block group">
                                    <div className="mb-3 text-lg font-semibold leading-tight text-gray-900 group-hover:text-blue-600">
                                      Build In The Open: Funding The Future Of Trustworthy Tech
                                    </div>
                                    <div className="text-sm leading-relaxed text-gray-600">
                                      We're Designing The Next Era Of Technical Grantmaking At Mozilla Foundation. And
                                      Because We Believe In Working Open, We're Sharing Our Thinking Now, Even As It Is
                                      Evolving.
                                    </div>
                                  </a>
                                </div>
                                <div>
                                  <span className="block mb-3 text-xs font-semibold tracking-wide text-blue-600 uppercase">
                                    ADVOCACY
                                  </span>
                                  <a href="/post2" className="block group">
                                    <div className="mb-3 text-lg font-semibold leading-tight text-gray-900 group-hover:text-blue-600">
                                      Build In The Open: Open Tech Advocacy For A New Era
                                    </div>
                                    <div className="text-sm leading-relaxed text-gray-600">
                                      True To Our Roots In Open-Source, We Intend To Go About The Foundation's Work
                                      Transparently, Learning And Iterating In The Open.
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div>
                              <span className="block mb-6 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                POPULAR TOPICS
                              </span>
                              <div className="space-y-4">
                                <a href="/advocacy" className="flex items-center group">
                                  <BarChart3 className="w-5 h-5 mr-4 text-blue-600" />
                                  <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                                    Advocacy
                                  </div>
                                </a>
                                <a href="/common-voice" className="flex items-center group">
                                  <Users className="w-5 h-5 mr-4 text-blue-600" />
                                  <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                                    Common Voice
                                  </div>
                                </a>
                                <a href="/fellowships" className="flex items-center group">
                                  <Star className="w-5 h-5 mr-4 text-blue-600" />
                                  <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                                    Fellowships & Awards
                                  </div>
                                </a>
                                <a href="/insights" className="flex items-center group">
                                  <FileText className="w-5 h-5 mr-4 text-blue-600" />
                                  <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                                    Insights
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="pt-6 border-t border-gray-200">
                            <a
                              href="/blog"
                              className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg"
                            >
                              See All Blog Posts →
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Donate Button */}
                <div className="ml-8">
                  <a
                    href="/contact"
                    className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 ${
                      isSticky ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Donate
                    <span
                      className={`ml-3 w-6 h-6 rounded-full flex items-center justify-center ${
                        isSticky ? "bg-blue-700" : "bg-blue-600"
                      }`}
                    >
                      <Plus className="w-3 h-3 text-white" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-md transition-colors ${
                    isSticky ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t shadow-lg xl:hidden">
            <div className="container px-4 py-6 mx-auto">
              <nav className="space-y-4">
                <a href="/about" className="block py-2 font-medium text-gray-900 hover:text-blue-600">
                  Who We Are
                </a>
                <a href="/services" className="block py-2 font-medium text-gray-900 hover:text-blue-600">
                  What We Do
                </a>
                <a href="/get-involved" className="block py-2 font-medium text-gray-900 hover:text-blue-600">
                  What You Can Do
                </a>
                <a href="/funding" className="block py-2 font-medium text-gray-900 hover:text-blue-600">
                  What We Fund
                </a>
                <a href="/blog" className="block py-2 font-medium text-gray-900 hover:text-blue-600">
                  Blog
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 mt-4 font-medium text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  Donate
                  <Plus className="w-4 h-4 ml-2" />
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
