import './App.css'

"use client";


import { Header } from "./components/header.jsx";
import { Footer } from "./components/footer.jsx";
import { Hero } from "./components/hero.jsx";
import { Mission } from "./components/mission.jsx";
import { Info } from "./components/info.jsx";
import { Events } from "./components/events.jsx";
import { Form } from "./components/form.jsx";
import { Banner } from "./components/banner.jsx";
import { Banner2 } from "./components/banner2.jsx";


function App() {
  

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      
      <Header />
      <Hero />
      <Banner />
      <Info />
      <Events />
      <Mission />
      <Form />
      <Banner2 />
      <Footer />
      
    </div>
  );
}

export default App
