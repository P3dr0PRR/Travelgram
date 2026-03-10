export function Footer() {
  return (
    <footer className="flex flex-col justify-between px-24 md:px-32 py-8 text-[#6C6C6C] text-sm md:text-base space-y-2 font-sans">
      <div className="flex flex-col gap-4 w-full justify-between items-center">
        <div className="flex w-full justify-between">
          <p className="transition-all duration-300 hover:scale-125 hover:brightness-10 ">
            Termos de Uso
          </p>

          <p className="transition-all duration-300 hover:scale-125 hover:brightness-10 text-right">
            Política de Privacidade
          </p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-center transition-all duration-300 hover:scale-125 hover:brightness-10">
            Travelgram &copy; 2024
          </p>
          <p className=" transition-all duration-300 hover:scale-125 hover:brightness-10 text-center">
            Desenvolvido por <br></br> Pedro Paulo
          </p>
        </div>
      </div>
    </footer>
  );
}
