import Guibi from "../assets/imgs/Guibi.png";
import Place from "../assets/imgs/MapPin.svg";
import Plane from "../assets/imgs/AirplaneTilt.svg";
import Img from "../assets/imgs/Image.svg";

export function About() {
  return (
    <section
      id="about"
      className="px-4 md:p-32 flex flex-col md:flex-row space-y-6 justify-between items-center  "
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={Guibi}
          alt="Guibi"
          className="h-28 w-28 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Pedro Paulo</h1>
          <p className="text-lg text-center text-gray-600  w-90 md:w-auto">
            Viajante apaixonado por explorar o mundo e compartilhar suas
            experiências. Com um espírito aventureiro e uma câmera sempre à mão,
            Pedro busca capturar a essência de cada destino que visita,
            inspirando outros a embarcarem em suas próprias jornadas.
          </p>
        </div>
      </div>
      <span className="hidden md:block w-[25%]"> </span>
      <div className="flex flex-col items-center justify-center gap-4 w-96 ">
        <div className="flex items-center w-full gap-2 ">
          <img src={Place} alt="Location" className="w-6" />
          <p className="text-gray-600 text-center">Minas Gerais, Brasil</p>
        </div>
        <div className="flex items-center w-full gap-2 ">
          <img src={Plane} alt="Location" className="w-6" />
          <p className="text-gray-600 text-center  ">37 Países</p>
        </div>
        <div className="flex items-center w-full  gap-2 ">
          <img src={Img} alt="Location" className="w-6" />
          <p className="text-gray-600 text-center">240 Fotos</p>
        </div>
      </div>
    </section>
  );
}
