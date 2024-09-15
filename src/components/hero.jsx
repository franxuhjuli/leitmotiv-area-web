import { Button } from "./ui/button.jsx"
export function Hero() {
  return (
    <section
      className="bg-white dark:bg-gradient-to-r from-[#228e70] to-[#63527c] text-white py-8 px-8 md:py-16 md:px-16
    flex flex-col-reverse lg:flex-row items-center "
    >
      <div className="container mx-auto lg:px-20 text-center lg:text-left lg:w-2/3">
        <h1 className="text-5xl font-black mb-6 text-teal-700 dark:text-white">
          LEITMOTIV{" "}
          <span className="text-slate-800">AREA</span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-100 text-bold  mb-6 md:mb-8">
          "Cultura que une, movimientos creativos que generan comunidad e
          impulsan el cambio"
        </p>
        <Button text="Unete ahora"/>
      </div>
      <div className="w-1/2 lg:w-1/3 ">
        <img
          src="./la2.png"
          className="md:max-w-72 md:max-h-72 mx-auto mb-6 md:mb-0 md:pb-6 lg:py-2"
        ></img>
      </div>
    </section>
  );
}

