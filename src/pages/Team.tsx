import { motion } from "framer-motion";
import { Link, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "[Name], CPA",
      role: "Managing Partner",
      bio: "Leads the firm with over 25 years of experience in corporate tax and strategic structuring.",
      imageUrl: "",
    },
    {
      name: "[Name], CPA, CFA",
      role: "Director of Audit",
      bio: "Specializes in assurance services and has advised multiple Fortune 500 companies throughout their career.",
      imageUrl: "",
    },
    {
      name: "[Name], CPA",
      role: "Senior Tax Consultant",
      bio: "Adept at handling complex international taxation, ensuring our clients optimize their global footprint.",
      imageUrl: "",
    },
    {
      name: "[Name], EA",
      role: "Accounting Manager",
      bio: "Leads our bookkeeping operations, deploying automated tech stacks for growing startups.",
      imageUrl: "",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our firm is powered by a team of dedicated certified public accountants and financial experts.
            </p>
          </motion.div>
        </div>
        
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <img className="aspect-[3/4] w-full rounded-2xl object-cover" src={person.imageUrl} alt={person.name} />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-primary-600">{person.role}</p>
              <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
              
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Link className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
