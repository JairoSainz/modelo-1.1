import whatsapp from "./assets/whatsapp.png";

function Confirmacion (){
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto text-center font-sans">
      <img src={whatsapp} alt="WhatsApp" className="w-10 h-10 mx-auto mb-4" />
      
      <h2 className="text-lg font-bold text-gray-800 mb-2">CONFIRMAR ASISTENCIA</h2>
      
      <a
        href="https://wa.me/526421127776?text=Hola,%20confirmo%20mi%20asistencia%20al%20evento"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#6a1b1a] text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200 block mx-auto w-fit"
      >
        Confirmar por WhatsApp
      </a>
      
      <p className="mt-4 text-gray-600">ESPERAMOS CONTAR CON SU PRESENCIA</p>
      <p className="italic text-gray-500 mt-2">¡Muchas gracias!</p>
    </div>
  );
};

export default Confirmacion;