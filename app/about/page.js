// "use client";
// import { motion } from "framer-motion";
// import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// export default function AboutPage() {
//   const cards = [
//     {
//       title: "Why I Built This",
//       desc: "Lagging Dreamer was born in a time of uncertainty. My PC was slow, life felt stuck, but I wanted to keep moving forward.",
//     },
//     {
//       title: "What It Means",
//       desc: "Even a lagging dreamer can reach their goals. This app is a daily reminder that small steps matter.",
//     },
//     {
//       title: "What I’m Learning",
//       desc: "Discipline, patience, and the power of consistency. Building this also sharpens my Next.js and Tailwind skills.",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16">
//       <h1 className="text-4xl font-bold mb-10">About Lagging Dreamer 🚧</h1>

//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-5xl w-full mb-12">
//         {cards.map((card, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:bg-gray-700 transition transform duration-300"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: idx * 0.2 }}
//           >
//             <h2 className="text-2xl font-semibold mb-3 text-green-400">{card.title}</h2>
//             <p className="text-gray-300 text-sm">{card.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Tech stack icons */}
//       <div className="flex space-x-12 text-gray-400 text-6xl">
//         <SiNextdotjs
//           className="hover:text-white cursor-pointer transition-colors duration-300"
//           title="Next.js"
//         />
//         <SiTailwindcss
//           className="hover:text-teal-400 cursor-pointer transition-colors duration-300"
//           title="Tailwind CSS"
//         />
//       </div>

//       <p className="mt-4 text-gray-400 text-sm">
//         Built with Next.js and Tailwind CSS
//       </p>
//     </main>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
export default function AboutPage() {
  const cards = [
    {
      title: "Why I Built This",
      desc: "Lagging Dreamer was born in a time of uncertainty. My PC was slow, life felt stuck, but I wanted to keep moving forward.",
    },
    {
      title: "What It Means",
      desc: "Even a lagging dreamer can reach their goals. This app is a daily reminder that small steps matter.",
    },
    {
      title: "What I’m Learning",
      desc: "Discipline, patience, and the power of consistency. Building this also sharpens my Next.js and Tailwind skills.",
    },
  ];

  const timeline = [
    { year: "🎓 Campus", text: "Studied Civil Engineering, built foundational skills." },
    { year: "💻 Freelance Attempt", text: "Tried a project, learned about deadlines & consistency." },
    { year: "🚧 Lagging Dreamer", text: "Started this project to build discipline and track growth." },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16">
      {/* Profile / Intro Section */}
      <section className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">About Lagging Dreamer 🚧</h1>
        <p className="text-gray-400 text-sm">
          Civil Engineer | Aspiring Developer | Building discipline one day at a time.
        </p>
      </section>

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-5xl w-full mb-16">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:bg-gray-700 transition transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-green-400">{card.title}</h2>
            <p className="text-gray-300 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Journey</h2>
        <div className="flex flex-col space-y-6">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="text-2xl">{item.year}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Text */}
           {/* Tech stack icons */}
     <div className="flex space-x-12 text-gray-400 text-6xl">
        <SiNextdotjs
       className="hover:text-white cursor-pointer transition-colors duration-300"
          title="Next.js"
        />
        <SiTailwindcss
          className="hover:text-teal-400 cursor-pointer transition-colors duration-300"
          title="Tailwind CSS"
        /> 
    </div>     

      <p className="mt-4 text-gray-400 text-sm">
       Built with Next.js and Tailwind CSS
      </p>
    </main>
  );
}
     