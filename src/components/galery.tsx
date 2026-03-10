import foto1 from "../assets/imgs/Image 01.png";
import foto2 from "../assets/imgs/Image 02.png";
import foto3 from "../assets/imgs/Image 03.png";
import foto4 from "../assets/imgs/Image 04.png";
import foto5 from "../assets/imgs/Image 05.png";
import foto6 from "../assets/imgs/Image 06.png";
import foto7 from "../assets/imgs/Image 07.png";
import foto8 from "../assets/imgs/Image 08.png";
import foto9 from "../assets/imgs/Image 09.png";
import foto10 from "../assets/imgs/Image 10.png";
import foto11 from "../assets/imgs/Image 11.png";
import foto12 from "../assets/imgs/Image 12.png";

export function Galery() {
  return (
    <section className="px-24 md:px-32 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src={foto1} alt="Foto 1" className="w-full h-auto" />
        <img src={foto2} alt="Foto 2" className="w-full h-auto" />
        <img src={foto3} alt="Foto 3" className="w-full h-auto" />
        <img src={foto4} alt="Foto 4" className="w-full h-auto" />
        <img src={foto5} alt="Foto 5" className="w-full h-auto" />
        <img src={foto6} alt="Foto 6" className="w-full h-auto" />
        <img src={foto7} alt="Foto 7" className="w-full h-auto" />
        <img src={foto8} alt="Foto 8" className="w-full h-auto" />
        <img src={foto9} alt="Foto 9" className="w-full h-auto" />
        <img src={foto10} alt="Foto 10" className="w-full h-auto" />
        <img src={foto11} alt="Foto 11" className="w-full h-auto" />
        <img src={foto12} alt="Foto 12" className="w-full h-auto" />
      </div>
    </section>
  );
}
