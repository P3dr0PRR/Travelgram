import logo from "../assets/imgs/Logo.svg";
import MagnifyingGlass from "../assets/imgs/MagnifyingGlass.svg";
import Guibi from "../assets/imgs/Guibi.png";

export function Header() {
  return (
    <header className="w-full py-10 gap-6 space-y-6 text-[#6C6C6C] flex flex-col lg:flex-row items-center justify-center md:justify-between md:px-32">
      <div>
        <img src={logo} alt="Travelgram logo" className="h-10" />
      </div>
      <div className="flex items-center gap-6 text-base md:text-lg lg:text-xl">
        <img
          src={MagnifyingGlass}
          alt="Search"
          className="w-6 transition-all duration-300 hover:scale-125 hover:brightness-10"
        />
        <p className="transition-all duration-300 hover:scale-110 hover:text-gray-900">
          Explorar
        </p>
        <p className="transition-all duration-300 hover:scale-110 hover:text-gray-900">
          Minhas Viagens
        </p>
        <img
          src={Guibi}
          alt="Guibi"
          className="h-10 w-10 md:h-16 md:w-16 rounded-full"
        />
      </div>
    </header>
  );
}
