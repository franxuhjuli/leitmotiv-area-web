import { useState } from "react";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos del formulario a tu servidor
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-800" id="contacto">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-extrabold text-teal-800 dark:text-teal-500 mb-8 text-center">
          CONTACTO
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
          Si estas interesad@ en participar en futuros proyectos o quieres saber
          mas ¡No dudes en dejar un mensaje!.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-slate-700 dark:text-slate-200"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
              />
              <button
                type="submit"
                text="Enviar"
                className="px-4 py-2 h-12 mt-12 w-full bg-teal-700 hover:bg-teal-600 text-white hover:font-bold rounded-md"
              >
                Enviar
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="h-full">
              <label
                htmlFor="message"
                className="block text-lg text-slate-700 dark:text-slate-200"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-[calc(100%-1.75rem)]  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 resize-y"
              />
              {isSubmitted && (
                <div className="text-center text-orange-700 font-bold mb-4 underline">
                  Mensaje enviado. Gracias por tu interés.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
