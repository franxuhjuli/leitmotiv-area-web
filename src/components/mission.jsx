import { Button } from "./ui/button.jsx"
import { Item } from "./ui/item.jsx"
import { Drama, FileAudio, Globe, LibraryBig, Theater, Drum } from "lucide-react";

export function Mission() {
  return (
    <section className="bg-gradient-to-r from-[#228e70] to-[#63527c] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black mb-8 text-center">
          NUESTRA <span className="text-slate-800">MISIÓN</span>
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-white pb-2">
            Promovemos y respaldamos proyectos en diversas áreas de las
            industrias culturales y creativas: artes escénicas, medios
            audiovisuales, diseño, edición, servicios creativos y mucho más.
            Nuestro objetivo es impulsar la diversidad y enriquecer nuestra
            sociedad a través del poder transformador de la cultura. ¡Únete a
            nosotros y se parte del movimiento cultural!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          <Item icon={<Drama className="w-8 h-8" />} text="Artes escenicas" subtext="Música en vivo, teatro, danza..." />
          <Item icon={<FileAudio className="w-8 h-8" />} text="Medios audiovisuales" subtext="Cine, televisión, radio..."/>
          <Item icon={<Globe className="w-8 h-8" />} text="Nuevos Medios" subtext="Digitalizacion, aplicaciones..."/>
          <Item icon={<LibraryBig className="w-8 h-8" />} text="Ediciones impresas" subtext="Libros, prensa especializada..."/>
          <Item icon={<Theater className="w-8 h-8" />} text="Artes visuales" subtext="Fotografia, pintura, arte urbano..."/>
          <Item icon={<Drum className="w-8 h-8" />} text="Expresiones tradicionales" subtext="Artesania, ferias, mercadillos..."/>
        </div>
          <Button text="Unete ahora"/>
        </div>
      </div>
    </section>
  );
}
