// app/page.js
"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotivationalQuotes from '@/components/MotivationalQuotes'


export default function Home() {
  return (         
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-20 font-sans">
        
        {/* Big Title */}
        <h1 className="text-6xl font-bold mb-2 select-none">
          Lagging Dreamer 🚧
        </h1>
              <span className='text-6xl'>   <MotivationalQuotes />  </span>
        
        {/* Personal Statement */}
        <p className="max-w-xl text-center text-gray-300 text-lg mb-12 leading-relaxed">
          I chase pleasure, delay purpose. My PC fails me, yet I dream wildly. This is my truth — and I’m not done yet.
        </p>
        
        {/* Animated Glitchy Box */}
        <div className="bg-gray-800 rounded-lg p-8 mb-12 shadow-lg w-full max-w-md text-yellow-400 font-mono text-xl tracking-wide glitch">
          “The rush never stops.”
        </div>

        {/* Short story paragraph */}
        <p className="max-w-lg text-gray-400 text-center mb-16">
          Life’s a constant race against time and technology — lagging behind, but always moving forward.  
          This site is a mirror of my unfinished journey.
        </p>
        
        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-indigo-400 font-semibold animate-pulse cursor-default">
            I’m not done yet. I will fix this.
          </p>
        </div>
      </main>
      <Footer    />
    </>
  )
}
