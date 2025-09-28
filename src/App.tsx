import { useState } from "react";
import "./App.css";
import EnrollForm from "./components/EnrollForm";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReviewForm from "./components/ReviewForm";
import Testimonials from "./components/Testimonials";

function App() {
  const [updateList, setUpdateList] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials updateList={updateList} />
        <EnrollForm />
        <ReviewForm setUpdateList={setUpdateList}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
