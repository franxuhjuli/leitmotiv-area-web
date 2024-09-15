import { MapPin, CalendarRange } from "lucide-react";

export function Events() {
  const events = [
    {
      title: "Reaccionarte",
      description:"Intercambio juvenil internacional orientado a explorar y fomentar, a través de talleres artísticos y actividades colaborativas, el uso del arte como medio de participación social.",
        
      date: "2024-07-09",
      location: "El Borge, Malaga, SPAIN",
      image: "./reaccion.jpg",
    },
    {
      title: "Training Course - inc.Sports/in Spain",
      description:
      "Formación Erasmus+ para 20 trabajadores juveniles de 7 países de 8 dias de duración, con el objetivo de usar el deporte como herramienta de inclusión social para migrantes y refugiados.",
      date: "2024-05-18",
      location: "Robledo, Albacete, SPAIN",
      image: "./sport.jpg",
    },
    {
      title: "Music In - Multiplier Event",
      description:
      "Colaboración en el programa Erasmus+ Music In, cuyo fin es promover la inclusión comunitaria de jóvenes vulnerables mediante prácticas musicales y fomentando el vínculo entre educación formal y no formal.", 
       
      date: "2023-06-29",
      location: "San Javier, Murcia, SPAIN",
      image: "./music.jpg",
    },
  ];

  return (
    <section className="py-16" id="proyectos">
      <div className="container mx-auto px-12">
        <h2 className="text-2xl font-extrabold text-teal-800 dark:text-teal-500 mb-8 text-center">
          ÚLTIMOS{"  "}
          <span className="text-slate-700 dark:text-white">PROYECTOS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center p-4 bg-teal-600 text-white">
                <div>
                  <h3 className="text-xl font-bold mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-lg">
                    <CalendarRange className="w-4 h-4 mr-1" />
                    <span> {event.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="w-full rounded-lg overflow-hidden mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 ">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
