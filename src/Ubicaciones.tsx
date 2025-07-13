import baile from "./assets/baile.png";
import iglesia from "./assets/iglesia.png";
import saco from "./assets/saco.png";
import vestido from "./assets/vestido.png";

function Ubicaciones() {
  return (
    <div className="bg-white py-10 px-6 text-center space-y-12">
      <div>
        <div className="flex justify-center mb-2">
          <img src={iglesia} alt="baile" className="text-[#6a1b1a] w-10 h-10" />
        </div>
        <h2 className="text-[#6a1b1a] font-semibold uppercase text-sm">MISA</h2>
        <p className="text-gray-700">Iglesia San Pedro</p>
        <p className="italic text-gray-600">Calle Tarija y Av. América</p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-[#6a1b1a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#6a1b1a]"
        >
          Ver ubicación
        </a>
      </div>

      <div>
        <div className="flex justify-center mb-2">
          <img src={baile} className="w-10 h-10" />
        </div>
        <h2 className="text-[#6a1b1a] font-semibold uppercase text-sm">RECEPCIÓN</h2>
        <p className="text-gray-700">Jardín Padilla</p>
        <p className="italic text-gray-600">Calle Sucre y 16 de Julio</p>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-[#6a1b1a] text-white px-4 py-2 rounded-md text-sm hover:bg-[#6a1b1a]"
        >
          Ver ubicación
        </a>
      </div>

      <div>
        <h2 className="text-[#6a1b1a] font-semibold uppercase text-sm mb-1">
          CÓDIGO DE VESTIMENTA
        </h2>
        <p className="text-gray-700 mb-3">Formal</p>
        <div className="flex justify-center gap-6 text-[#6a1b1a]">
          <img src={saco} className="w-10 h-10" />
          <img src={vestido} className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default Ubicaciones;