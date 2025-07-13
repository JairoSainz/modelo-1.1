import Countdown from "react-countdown";
import boda from "./assets/boda.jpeg";

const fechaBoda = new Date("2025-11-29T00:00:00");

function Portada() {
  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img src={boda} alt="boda" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-[16px] tracking-widest">NOS CASAMOS</p>
          <h1 className="text-[50px] font-greatvibes">Lucía & Iván</h1>
          <p className="text-[16px] tracking-widest">29.11.2025</p>
        </div>
      </div>
      <div className="bg-white py-6 px-4 text-center">
        <h2 className="text-[#6a1b1a] font-semibold text-lg mb-4">FALTAN:</h2>

        <Countdown
          date={fechaBoda}
          renderer={({ days, hours, minutes, seconds, completed }) =>
            completed ? (
              <span className="text-green-600 font-bold text-lg">
                ¡Ya es el gran día!
              </span>
            ) : (
              <div className="flex justify-center space-x-4 text-[#6a1b1a] mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{days}</span>
                  <span className="text-sm">Días</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{hours}</span>
                  <span className="text-sm">horas</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{minutes}</span>
                  <span className="text-sm">minutos</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{seconds}</span>
                  <span className="text-sm">segundos</span>
                </div>
              </div>
            )
          }
        />

        {/* Frase final y fecha */}
        <p className="text-[#6a1b1a] text-sm mb-4">
          Te esperamos para <br /> celebrar nuestra boda
        </p>

        <div className="flex justify-center items-center gap-4 uppercase text-xs font-semibold text-[#6a1b1a]">
          <div className="border-t border-b px-2 py-1">SÁBADO</div>
          <div className="text-2xl font-bold">29</div>
          <div className="border-t border-b px-2 py-1">NOVIEMBRE</div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
