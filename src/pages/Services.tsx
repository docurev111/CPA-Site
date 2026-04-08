import { motion } from "framer-motion";
import { Briefcase, Building2, Calculator, LineChart, Landmark, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Audit & Assurance",
      icon: Landmark,
      description: "Industry leading independent audits to ensure compliance and financial integrity for your business.",
    },
    {
      title: "Tax Services",
      icon: Calculator,
      description: "Minimize liability and maximize wealth with our comprehensive and forward-looking tax strategies.",
    },
    {
      title: "Consulting",
      icon: TrendingUp,
      description: "Innovative solutions and hands-on support to help our clients attain their financial goals.",
    },
    {
      title: "Public Company Services",
      icon: Building2,
      description: "Registered with the Public Company Accounting Oversight Board (PCAOB), delivering expert oversight.",
    },
    {
      title: "Securities & Derivatives",
      icon: LineChart,
      description: "Serving the international securities and derivatives industry with extensive expertise.",
    },
    {
      title: "Personalized Support",
      icon: Briefcase,
      description: "We build deep connections to ensure we cover various needs through responsive, personalized service.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-white py-24 sm:py-32 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Industry Leading Audit, Tax, and Consulting Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              Delivering specialized financial solutions that adapt to your evolving needs. With a proven commitment to quality and excellence since 1991.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 text-primary-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                
                <Link to="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700">
                  Discuss this service <span className="ml-1" aria-hidden="true">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
