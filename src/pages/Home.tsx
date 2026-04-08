import { motion } from "framer-motion";
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      name: "Audit Services",
      description: "Industry leading independent audits to ensure compliance and financial integrity for your business.",
      icon: Shield,
    },
    {
      name: "Tax Services",
      description: "Minimize liability and maximize wealth with our comprehensive and forward-looking tax strategies.",
      icon: Calculator,
    },
    {
      name: "Consulting",
      description: "Innovative solutions and hands-on support to help our clients attain their financial goals.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
          alt="Accounting office"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Industry Leading Audit, Tax, and Consulting Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                A full-service public accounting firm serving the international securities and derivatives industry. We deliver quality services out of a commitment to quality and excellence.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link to="/services" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                  Our Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Quality Service That Exceeds Expectations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Learn More About Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We make it a point to communicate well with our clients. We build deep connections to ensure we cover their various needs, delivering innovative solutions to help our clients attain their goals.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
