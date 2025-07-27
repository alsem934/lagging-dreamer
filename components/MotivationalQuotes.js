// components/MotivationalQuotes.js



"use client "
import { useEffect, useState } from 'react'

const verses = [
  "Keep going, even if you're crawling — you're still moving.",
  "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (Indeed, with hardship comes ease. – Surah Ash-Sharh 94:6)",
  "إِنَّ مَعَ الْعُسْرِ يُسْرًا (Indeed, with hardship comes ease. – Surah Ash-Sharh 94:7)",
  "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ (Perhaps you hate a thing and it is good for you. – Surah Al-Baqarah 2:216)",
  "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ (Do not despair of the mercy of Allah. – Surah Az-Zumar 39:53)",
  "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (Indeed, Allah is with the patient. – Surah Al-Baqarah 2:153)",
  "رَبِّ اشْرَحْ لِي صَدْرِي (My Lord, expand for me my chest. – Surah Ta-Ha 20:25)",
  "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ (Be patient, and your patience is only through Allah. – Surah An-Nahl 16:127)",
  "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا (Say, 'Nothing will happen to us except what Allah has decreed for us.' – Surah At-Tawbah 9:51)",
  "إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ (Indeed, my Lord is with me; He will guide me. – Surah Ash-Shu‘ara 26:62)",
    "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا (And put your trust in Allah, and sufficient is Allah as a Disposer of affairs. – Surah Al-Ahzab 33:3)",

    "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ (And I entrust my affair to Allah. – Surah Ghafir 40:44)",
]

export default function MotivationalQuotes() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % verses.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <blockquote className="text-center text-2xl leading-loose text-green-700 font-semibold my-12">
      {verses[index]}
    </blockquote>
  )
}
