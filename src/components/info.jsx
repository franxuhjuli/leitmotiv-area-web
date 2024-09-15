import { Slider } from "./ui/slider.jsx";

export function Info() {
  return (
    <section className="py-16 bg-white dark:bg-slate-800 bt-2 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-extrabold text-teal-700 mb-4 dark:text-white">
            IMPULSANDO LA CULTURA A TRAVES DE LA <span className="text-slate-600 dark:text-teal-400">COLABORACIÓN</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
            En Leitmotiv Area, nuestro objetivo es claro: impulsar la cultura y
            la creatividad mediante proyectos innovadores y dinámicos.
            Promovemos el turismo cultural, la divulgación y la digitalización,
            fomentando la cooperación comunitaria y el desarrollo social.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
            Descubre oportunidades únicas de formación y voluntariado en
            actividades socioculturales. ¡Únete a nosotros y vive una
            experiencia cultural inolvidable!
          </p>
        </div>
        <Slider />
      </div>
    </section>
  );
}
