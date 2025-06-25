export default function Feature() {
  const cards = [
    {
      id: 1,
      title: "Digital Equity & Poverty Relief",
      description: "Provide free and low-cost computers, internet access and tech training to break cycles of poverty.",
      gradient: "bg-gradient-to-br from-cyan-300 to-blue-600",
      topOffset: "top-80",
      maxWidth: "max-w-4xl",
      marginBottom: "mb-32",
    },
    {
      id: 2,
      title: "Education & Employment Upskilling",
      description:
        "Offer mentorship, sector-specific workshops and certification programs for immigrants and low-income individuals.",
      gradient: "bg-gradient-to-br from-blue-300 to-purple-400",
      topOffset: "top-80",
      maxWidth: "max-w-[61rem]",
      marginBottom: "mb-24",
    },
    {
      id: 3,
      title: "Nonprofit Capacity Building",
      description:
        "Equip grassroots charities with software tools, grant-writing support and leadership training to maximize their reach.",
      gradient: "bg-gradient-to-br from-pink-300 to-indigo-500",
      topOffset: "top-[21.6rem]",
      maxWidth: "max-w-[62rem]",
      marginBottom: "mb-16",
    },
    {
      id: 4,
      title: "Health & Wellbeing Access",
      description:
        "Develop digital health insurance solutions and advocate for policies that prioritize equitable healthcare access.",
      gradient: "bg-gradient-to-br from-yellow-300 to-pink-500",
      topOffset: "top-[23.2rem]",
      maxWidth: "max-w-[63rem]",
      marginBottom: "mb-8",
    },
    {
      id: 5,
      title: "Impact Funding & Advocacy",
      description:
        "Distribute grants to qualified donees and lead public-private partnerships to amplify systemic change.",
      gradient: "bg-gradient-to-br from-yellow-300 to-pink-500",
      topOffset: "top-[23.2rem]",
      maxWidth: "max-w-[64rem]",
      marginBottom: "mb-8",
    },
  ]

  return (
    <section id="what-we-do" className="bg-[#f4f5fc] py-12 md:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="pt-12 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/images/flower-icon-blue.svg" alt="Flower icon" className="w-6 h-6" />
            <span className="text-sm font-medium tracking-wide text-gray-600 uppercase">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212877]">What We Do</h2>
        </div>

        {/* Solution Cards */}
        <div className="mt-12 space-y-8 solution-cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`sticky p-0.5 rounded-lg mx-auto transition-transform duration-300 hover:scale-[1.02] min-h-[28rem] ${card.topOffset} ${card.maxWidth} ${card.marginBottom} ${card.gradient}`}
            >
              <div className="flex flex-col items-start p-8 md:p-12 lg:p-16 border-4 border-transparent rounded-lg bg-[#f4f5fc] gap-6 md:gap-8 lg:gap-10 min-h-[28rem]">
                {/* Icon placeholder - hidden as per original CSS */}
                <div className="invisible w-12 h-12">
                  <img
                    src={`/images/icons/${card.title.toLowerCase().replace(/\s+/g, "-").replace("&", "")}.svg`}
                    alt=""
                    className="w-12 h-12"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#212877] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#212877] text-base md:text-lg leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
