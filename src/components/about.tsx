import Guibi from "../assets/imgs/Guibi.png";
import Place from "../assets/imgs/MapPin.svg";
import Plane from "../assets/imgs/AirplaneTilt.svg";
import Img from "../assets/imgs/Image.svg";

export function About() {
  return (
    <section
      id="about"
      className="px-4 md:px-20 py-8 flex flex-col lg:flex-row gap-6 md:gap-0 items-center justify-between space-y-4 font-sans"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={Guibi}
          alt="Guibi"
          className="h-32 w-32 lg:h-42 lg:w-42 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col items-center lg:w-[529px]">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#313131]">
            Pedro Paulo
          </h1>
          <p className="text-md lg:text-xl text-center text-[#6C6C6C] w-80 md:w-full">
            Viajante apaixonado por explorar o mundo e compartilhar suas
            experiências. Com um espírito aventureiro e uma câmera sempre à mão,
            Pedro busca capturar a essência de cada destino que visita,
            inspirando outros a embarcarem em suas próprias jornadas.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-col justify-between gap-4 w-full lg:w-72 lg:pl-32 text-[#6C6C6C]">
        <div className="flex items-center justify-center lg:justify-start w-full gap-2">
          <img src={Place} alt="Location" className="w-6" />
          <p className="text-gray-600 md:text-lg">Minas Gerais, Brasil</p>
        </div>
        <div className="flex items-center justify-center lg:justify-start w-full gap-2">
          <img src={Plane} alt="Location" className="w-6" />
          <p className="text-gray-600 md:text-lg">37 Países</p>
        </div>
        <div className="flex items-center justify-center lg:justify-start w-full gap-2">
          <img src={Img} alt="Location" className="w-6" />
          <p className="text-gray-600 md:text-lg">240 Fotos</p>
        </div>
      </div>
    </section>
  );
}
