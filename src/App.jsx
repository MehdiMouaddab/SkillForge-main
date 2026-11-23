import Benefits from "./components/Benefits";
import BookContent from "./components/BookContent";
import BookInfo from "./components/BookInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1">
        <Hero />
        <BookInfo />
        <Benefits/>
        <BookContent/>
        <Testimonials/>
      </main>
      <Footer />
    </div>
  )
};

export default App
