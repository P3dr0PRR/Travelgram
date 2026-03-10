import logo from "../assets/imgs/Logo.svg";
import MagnifyingGlass from "../assets/imgs/MagnifyingGlass.svg";
import Guibi from "../assets/imgs/Guibi.png";

export function Header() {
  return (
    <header className="w-full px-4 md:px-32 py-10 text-[#6C6C6C] flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between font-sans">
      <div className="w-full lg:w-auto flex items-center justify-center lg:justify-start">
        <img src={logo} alt="Travelgram logo" className="h-10" />
      </div>
      <div className="w-full lg:w-auto flex flex-wrap items-center justify-center gap-6 md:gap-8 text-base md:text-lg lg:text-xl">
        <div className="flex gap-2 items-center hover:scale-125 hover:text-[#EF5F4C] transition-all duration-300">
          <img
            src={MagnifyingGlass}
            alt="Search"
            className="w-6 transition-all duration-300 hover:brightness-10"
          />
          <p className="transition-all duration-300">Explorar</p>
        </div>
        <p className="transition-all duration-300 hover:scale-110 hover:text-[#EF5F4C]">
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
