import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[36vh] min-h-[300px] w-full overflow-hidden sm:h-[42vh]">
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=2000&q=80"
          alt="City skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-black/10" />
      </section>

      <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6 h-1 w-14 bg-sky-500" />
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A Full-Service Accounting Company in Chicago, IL
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-gray-700 sm:text-lg">
              Sample CPA was founded in 1991 by experienced partners and has built a long-standing reputation for audit, tax, and consulting services. As a full-service accounting firm focused on the securities and derivatives space, we deliver responsive, personalized support with a commitment to quality and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80"
              alt="Financial market screens"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200 sm:p-10"
          >
            <div className="mb-4 h-1 w-14 bg-sky-500" />
            <h3 className="text-2xl font-semibold sm:text-3xl">Our Clientele</h3>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Sample CPA serves clients across hedge funds, commodity pools, fund managers, proprietary trading firms, securities broker-dealers, futures commission merchants, introducing brokers, individual traders, brokers, exchanges, family offices, and high-net-worth individuals.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Our clients are members of, or maintain relationships with, both domestic and international securities and futures exchanges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-sm ring-1 ring-gray-200 sm:p-10"
          >
            <div className="mb-4 h-1 w-14 bg-sky-500" />
            <h3 className="text-2xl font-semibold sm:text-3xl">Our History</h3>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Since 1991, Sample CPA has developed its practice around specialized accounting and advisory work for clients in highly regulated financial sectors.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Our partners bring decades of public accounting and industry experience. While operational leadership has evolved over time, our advisory culture remains rooted in practical guidance, technical depth, and long-term client relationships.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Today, we continue to pair proven accounting standards with modern execution, helping clients navigate complexity with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
              alt="Business discussion in office"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
