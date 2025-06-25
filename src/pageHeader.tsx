import Header from "../src/components/header"


function App() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Demo content to show header behavior */}
      <div className="pt-32">
        <div className="py-32 text-white bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold">Welcome to Our Organization</h1>
            <p className="max-w-2xl mx-auto text-xl opacity-90">
              Building bridges of opportunity in a world divided by inequality. We exist to ensure technology and
              education serve humanity.
            </p>
          </div>
        </div>

        <div className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More content to demonstrate scrolling */}
        <div className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">What We Do</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Digital Equity</h3>
                  <p className="text-gray-600">
                    Providing access, devices, and training for low-income communities to bridge the digital divide.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Education & Upskilling</h3>
                  <p className="text-gray-600">
                    Workshops and pathways for sustainable careers in the digital economy.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Health & Wellbeing</h3>
                  <p className="text-gray-600">Innovative digital health solutions for underserved communities.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">Impact Funding</h3>
                  <p className="text-gray-600">Scaling solutions and funding social change initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
