import { cn } from "@/lib/utils"
import { Dancing_Script } from "next/font/google"
import { FaClock } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className="animate-appear grow">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 text-amber-800/70">
        <img
          src="/cover.jpg"
          alt="Logo"
          className="w-1/2 rounded-2xl order-2 md:order-1 mx-auto"
        />
        <div className="flex flex-col justify-center grow text-center gap-4 order-1 md:order-2">
          <h1
            className={cn(
              "text-amber-800 text-4xl md:text-6xl font-extrabold tracking-widest mt-3",
              dancingScript.className,
            )}
          >
            Flores del Tamango
          </h1>
          <p className="text-center text-lg md:text-2xl">
            Café y pastelería artesanal
          </p>
          <div className="flex flex-col gap-1 text-center text-lg md:text-2xl">
            <h1 className="text-amber-800 text-xl md:text-3xl font-extrabold uppercase tracking-widest mt-3 flex flex-row gap-2 justify-center">
              Nuestro Horario <FaClock />
            </h1>
            <p>Martes a Viernes de 8:00 a 13:00 y 15:00 a 20:00</p>
            <p>Sábado horario continuo de 8:00 a 19:00</p>
            <p>Domingo horario continuo de 8:00 a 18:00</p>
          </div>
          <div className="flex flex-col gap-1 text-center text-lg md:text-2xl">
            <h1 className="text-amber-800 text-xl md:text-3xl font-extrabold uppercase tracking-widest mt-3 flex flex-row gap-2 justify-center">
              Ubicación <FaLocationDot />
            </h1>
            <p>Terminal de buses de Cochrane</p>
            <a
              href="https://maps.app.goo.gl/DLNjj5L7U2LLAB4o7"
              className={cn(
                "flex flex-row gap-1 justify-center items-center",
                "px-2 py-1 relative cursor-pointer",
                "text-amber-800 hover:text-teal-600 transition-colors",
              )}
              target="_blank"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
